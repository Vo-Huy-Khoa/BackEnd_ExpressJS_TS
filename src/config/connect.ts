import mongoose from "mongoose";
export default async function connect() {
  const url = process.env.MONGO_URL || "";
  return await mongoose
    .connect(url)
    .then(() => {
      console.log("Database connected");
    })
    .catch(() => {
      console.log("Fail");
    });
}
