import "../promise-timeout";
import { populateDB } from '../config/populateDb';

new populateDB().readJson().then((data: any) => {
 console.log(data);
}).catch((err: any) => {
 console.log(err);
});