import express from 'express';
import {
  addExpressions
} from '../controllers/';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Hello World');
});

router.post('/expression/add', addExpressions);

export default router;