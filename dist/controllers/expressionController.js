"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addExpressions = void 0;
const expressionHelper_1 = require("../helpers/expressionHelper");
exports.addExpressions = (req, res) => {
    const body = req.body; //input
    const { expressionOne, expressionTwo, sort } = body;
    const sortOrder = sort === 'asc' ? 1 : sort === 'dsc' ? -1 : null;
    const expressionsSum = expressionHelper_1.add(expressionOne, expressionTwo, sortOrder);
    const responseObject = {
        expressionsSum,
        formattedExpression: expressionHelper_1.formatExpression(expressionsSum)
    };
    res.status(200).json(responseObject);
};
