import express from 'express';
import {
  config
} from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';
config();
const app = express();
let PORT;
if (process.env.NODE_ENV == 'test') {
  PORT = process.env.TEST_PORT || 26061;
} else {
  PORT = process.env.PORT || 26062;
}

app.use(bodyParser.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', routes);

app.listen(PORT, error => {
  if (error) {
    console.log(error);
    throw error
  } else {
    console.log(`Server Started Working...`);


    console.log(`listening to port ${PORT} ....`);
  }
});

export default app;