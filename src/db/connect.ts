import mongoose from "mongoose";
export default async function connect() {
  return await mongoose
    .connect(
      "mongodb+srv://vohuykhoa:vohuykhoa@cluster0.nppkasl.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Database connected");
    })
    .catch(() => {
      console.log("Fail");
    });
}
