import jwt from "jsonwebtoken";

const createToken = () => {
  const key = process.env.JWT_SECRET || "";
  let payload = { name: "huykhoa", email: "huykhoa630@gmail.com" };
  let token = null;
  try {
    token = jwt.sign(payload, key, {expiresIn: '30s'});
    // console.log(token);
  } catch (error) {
    console.log(error);
  }

  return token;
};

const verifyToken = (token: any) => {
  const key = process.env.JWT_SECRET || "";
  let data: any = null;

  try {
    let decoded = jwt.verify(token, key);
    data = decoded;
  } catch (error) {
    console.log(error);
  }
  return data;
};

export { createToken, verifyToken };
