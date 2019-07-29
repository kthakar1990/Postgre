import Timer = NodeJS.Timer;
import { Seconds } from './seconds';
const deepCopy = require('deep-copy');

const humanizeDuration = require('humanize-duration');

function extend() {
    const prototype = require('promise-prototype')(Promise);
    if (prototype.timeout) return;

    prototype.timeout = function (milliSeconds: number, contextOnTimeout: TimeoutContext) {

        let timeoutId: Timer;


        //Wrap the incoming promise into another promise so that we can short-circuit the timeout rejection from being triggered
        const promiseWrapper = new Promise((resolve, reject) => {
            (this as Promise<any>).then((value) => {
                clearTimeout(timeoutId);
                resolve(value);
            }).catch(function (reason) {
                clearTimeout(timeoutId);
                reject(reason);
            });
        });


        // Create a promise that rejects after the specified time duration
        const timeoutFunction = new Promise((_resolve, reject) => {
            timeoutId = setTimeout(() => {
                clearTimeout(timeoutId);
                //We are purposefully not logging anything here, because the caller is responsible for
                //handling the rejection
                const durationString = humanizeDuration(milliSeconds, { largest: 3, round: false });
                reject(Object.assign(deepCopy(contextOnTimeout), { human_readable_duration: durationString, duration: milliSeconds * Seconds.oneMillisecond }));
            }, milliSeconds);
        });


        // Returns a race between our timeout and the promise that timeout() is attached to.
        return Promise.race([
            promiseWrapper,
            timeoutFunction
        ]);
    };
}

extend();

export { };

