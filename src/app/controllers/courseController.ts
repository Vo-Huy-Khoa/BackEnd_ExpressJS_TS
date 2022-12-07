import { Request, Response } from "express";
import CourseModel from "../models/Course";

class CourseController {
  async get(req: Request, res: Response) {
    await CourseModel.find()
      .then((courseList) => {
        res.status(200).json(courseList);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  }
  async create(req: Request, res: Response) {
    const createCourse = new CourseModel({
      title: req.body.title,
      description: req.body.description,
    });
    try {
      await createCourse.save();
      res.status(201).json(createCourse);
    } catch (error) {
      res.status(401).json(error);
    }
  }
  async find(req: Request, res: Response) {
    await CourseModel.findById(req.params.id)
      .then((course) => {
        res.status(200).json(course);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  }
  async update(req: Request, res: Response) {
    await CourseModel.updateOne(
      { _id: req.params.id },
      {
        title: req.body.title,
        description: req.body.description,
      }
    )
      .then((course) => {
        res.status(200).json(course);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  }
  async destroy(req: Request, res: Response) {
    await CourseModel.deleteOne({ _id: req.params.id })
      .then((course) => {
        res.status(200).json(course);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  }
}

export default new CourseController();
