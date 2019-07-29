"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../promise-timeout");
const populateDb_1 = require("../config/populateDb");
new populateDb_1.populateDB().loadDb()
    .then(() => {
    console.log('complete');
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=populatedbCli.js.map