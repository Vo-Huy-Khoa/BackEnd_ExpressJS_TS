import { Request, Response } from "express";
import UserModel from "../models/User";


class UserController{
    
     get (req: Request, res: Response) {
        (async()=>{
            await UserModel.find()
            .then((userList)=>{
                res.json(userList)
            })
        })() 
    }

    create(req: Request, res: Response){
        (async()=>{
            const createUser = new UserModel({
                
            })
        })()
    }

    find(req: Request, res:Response){

    }

    update(req: Request, res:Response){
        
    }

    destroy(req: Request, res:Response){
        
    }


    
}

export default new UserController();