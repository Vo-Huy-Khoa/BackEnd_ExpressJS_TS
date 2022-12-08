import {Request, Response} from 'express'
import UserModel from '../models/User';

const register = async (req: Request,res:Response)=>{
    const createUser = new UserModel({
        name: req.body.name,
        email: req.body.email
    })

    try {
        await createUser.save();
        res.status(201).json(createUser);
    } catch (error) {
        res.status(400).json(error)
    }
}

const login = (req:Request, res:Response)=>{
    
}