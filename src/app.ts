import express from "express";
import connect from "./config/connect";
import routes from "./routes/web";
import dotenv from 'dotenv';
import {createToken, verifyToken} from './app/middleware/token'


const app = express();

dotenv.config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

routes(app);


const jwt = createToken();

const decodedData = verifyToken(jwt);
console.log(decodedData);



connect();

app.listen(process.env.PORT, () => {
  console.log(`Server listing at port: ${process.env.PORT}`);
});
