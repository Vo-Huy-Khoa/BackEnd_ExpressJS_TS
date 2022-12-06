import { Request, Response } from "express";
import UserModel from "../models/User";

class UserController {
  get(req: Request, res: Response) {
    (async () => {
      await UserModel.find().then((userList) => {
        res.json(userList);
      });
    })();
  }

  create(req: Request, res: Response) {
    (async () => {
      const createUser = new UserModel(req.body);
      await createUser.save();
      res.json(createUser);
    })();
  }

  find(req: Request, res: Response) {
    (async () => {
      await UserModel.findById(req.params.id).then((user) => {
        res.json(user);
      });
    })();
  }

  update(req: Request, res: Response) {
    (async () => {
      await UserModel.updateOne({ _id: req.params.id }, req.body).then(
        (user) => {
          res.json(user);
        }
      );
    })();
  }

  destroy(req: Request, res: Response) {
    (async () => {
      await UserModel.deleteOne({ _id: req.params.id }).then((user) => {
        res.json(user);
      });
    })();
  }
}

export default new UserController();
