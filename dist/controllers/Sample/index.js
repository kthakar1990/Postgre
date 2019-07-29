"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class SampleRoutes {
    constructor() {
        this.path = '/api/sample';
        this.router = express_1.Router();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get(this.path, function (req, res) {
            res.send('success');
        });
        //this.router.post(this.path + '/createSubscription', testClass.createSubscription);
    }
}
exports.default = SampleRoutes;
//# sourceMappingURL=index.js.map