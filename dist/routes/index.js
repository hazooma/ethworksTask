"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers/");
const router = express_1.default.Router();
/* GET home page. */
router.get('/', (req, res, next) => {
    res.send('Hello World');
});
router.post('/expression/add', controllers_1.addExpressions);
exports.default = router;
