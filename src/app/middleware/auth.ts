import { NextFunction, Request, Response } from "express";
import { createToken, verifyToken } from "./token";

const authToken = (req: Request, res: Response, next: NextFunction) => {
  // const authorizationHeader = req.headers['authorization'];
  // const token = authorizationHeader?.split(' ')[1];
  // if (!token) {
  //     res.status(401);
  // }

  try {
    const jwt = createToken();
    const isVeriToken = verifyToken(jwt);
    if (isVeriToken) {
      console.log(isVeriToken);
      console.log('verify token');
      
      next();
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

export default authToken;
