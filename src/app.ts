import express from "express";
import connect from "./config/connect";
import routes from "./routes/web";
import dotenv from "dotenv";


const app = express();
const PORT = process.env.PORT ||  '3001';
console.log(process.env.PORT);





dotenv.config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

routes(app);

connect();

app.listen(PORT, () => {
  console.log(`Server listing at port: ${PORT}`);
});
