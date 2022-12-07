
import { Request, Response } from "express";


const authToken = (req:Request, res:Response)=>{
    const authorizationHeader = req.headers['authorization'];
    const token = authorizationHeader?.split(' ')[1];
}

export default authToken;