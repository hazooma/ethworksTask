"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.config();
const app = express_1.default();
let PORT;
if (process.env.NODE_ENV == 'test') {
    PORT = process.env.TEST_PORT || 26061;
}
else {
    PORT = process.env.PORT || 26062;
}
app.use(body_parser_1.default.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use('/', routes_1.default);
app.listen(PORT, error => {
    if (error) {
        console.log(error);
        throw error;
    }
    else {
        console.log(`Server Started Working...`);
        console.log(`listening to port ${PORT} ....`);
    }
});
exports.default = app;
