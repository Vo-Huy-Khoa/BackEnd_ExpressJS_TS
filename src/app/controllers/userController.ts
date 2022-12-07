import { Request, Response } from "express";
import UserModel from "../models/User";

class UserController {
  async get(req: Request, res: Response) {
    await UserModel.find()
      .then((userList) => {
        res.status(200).json(userList);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }

  async create(req: Request, res: Response) {
    const createUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
    });
    try {
      await createUser.save();
      res.json(createUser);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async find(req: Request, res: Response) {
    await UserModel.findById(req.params.id)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }

  async update(req: Request, res: Response) {
    await UserModel.updateOne({ _id: req.params.id }, req.body)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }

  async destroy(req: Request, res: Response) {
    await UserModel.deleteOne({ _id: req.params.id })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }
}

export default new UserController();
