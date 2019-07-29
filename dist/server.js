"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./controllers/Sample/index"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new app_1.default([new index_1.default()]);
        app.listen();
    });
}
// If we don't catch the error then node will report an unhandledRejection but won't actually stop the server
Promise.resolve(main()).then(function () {
    console.info({
        "message": "Production start up complete",
        "logging_category": "startup",
        startup_status: "complete"
    });
}).catch(function (err) {
    console.error({
        "message": "Production start up failed",
        "logging_category": "startup",
        startup_status: "failed"
    });
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map