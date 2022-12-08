import mongoose from "mongoose";
export default async function connect() {
  const url = process.env.MONGO_URL || "";
  
  return await mongoose
    .connect(url)
    .then(() => {
      console.log("Database connect successfully");
    })
    .catch(() => {
      console.log("Database connect fail");
    });
}
