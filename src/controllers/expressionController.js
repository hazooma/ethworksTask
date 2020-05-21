import {
  add,
  formatExpression
} from '../helpers/expressionHelper';
export const addExpressions = (req, res) => {
  const body = req.body; //input
  const {
    expressionOne,
    expressionTwo,
    sort
  } = body
  const sortOrder = sort === 'asc' ? 1 : sort === 'dsc' ? -1 : null
  const expressionsSum = add(expressionOne, expressionTwo, sortOrder)

  const responseObject = {
    expressionsSum,
    formattedExpression: formatExpression(expressionsSum)
  };
  res.status(200).json(responseObject);
};