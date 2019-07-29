/**The number of seconds in a unit of time */
export enum Seconds {
    oneMillisecond = 1 / 1000,
    oneSecond = 1,
    oneMinute = 60 * oneSecond,
    oneHour = 60 * oneMinute,
    oneDay = 24 * oneHour
}