"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs-extra"));
const typeorm_1 = require("typeorm");
const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'kandarp',
    password: '',
    database: 'pokemons'
};
class populateDB {
    loadDb() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.readJson();
        });
    }
    readJson() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield typeorm_1.createConnection(config);
            }
            catch (error) {
                console.log('Error while connecting to the database', error);
                return error;
            }
            fs.readJson('./src/config/pokemons.json', (err, packageObj) => {
                if (!err) {
                    packageObj.forEach((i) => __awaiter(this, void 0, void 0, function* () {
                        yield this.updateDb(i);
                    }));
                }
                console.error(err);
            });
        });
    }
    updateDb(i) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('here');
        });
    }
}
exports.populateDB = populateDB;
//# sourceMappingURL=populateDb.js.map