import "../promise-timeout";
import { populateDB } from '../config/populateDb';

new populateDB().readJson("src/config").then(() => {
 console.log("successfully populated the data");
 process.exit(0);
}).catch((err: any) => {
 console.log(err);
 process.exit(1);
});