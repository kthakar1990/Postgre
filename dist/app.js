"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression")); // compresses requests
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const lusca_1 = __importDefault(require("lusca"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_flash_1 = __importDefault(require("express-flash"));
const express_validator_1 = __importDefault(require("express-validator"));
class App {
    constructor(controllers) {
        this.app = express_1.default();
        this.initializeMiddlewares();
        this.port = 3000;
        this.initializeControllers(controllers);
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    initializeMiddlewares() {
        // Load environment variables from .env file, where API keys and passwords are configured
        dotenv_1.default.config({ path: '.env.example' });
        // Express configuration
        this.app.use(compression_1.default());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(express_validator_1.default());
        this.app.use(express_session_1.default({
            resave: true,
            saveUninitialized: true,
            secret: 'happy cats'
        }));
        this.app.use(express_flash_1.default());
        this.app.use(lusca_1.default.xframe('SAMEORIGIN'));
        this.app.use(lusca_1.default.xssProtection(true));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map