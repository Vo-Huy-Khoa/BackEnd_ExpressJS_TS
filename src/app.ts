import express from "express";
import connect from "./db/connect";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);
connect();

app.listen("3001", () => {
  console.log(`Server listing at 3001`);
});
