import { Request, Response } from "express";
import CourseModel from "../models/Course";

class CourseController {
  get(req: Request, res: Response) {
    (async () => {
      await CourseModel.find().then((courseList) => {
        res.json(courseList);
      });
    })();
  }
  create(req: Request, res: Response) {
    (async () => {
      const createCourse = new CourseModel({
        title: req.body.title,
        description: req.body.description,
      });
      await createCourse.save();
      res.json(createCourse);
    })();
  }
  find(req: Request, res: Response) {
    (async () => {
      await CourseModel.findById(req.params.id).then((course) => {
        res.json(course);
      });
    })();
  }
  update(req: Request, res: Response) {
    (async () => {
      await CourseModel.updateOne(
        { _id: req.params.id },
        {
          title: req.body.title,
          description: req.body.description,
        }
      ).then((course) => {
        res.json(course);
      });
    })();
  }
  destroy(req: Request, res: Response) {
    (async () => {
      await CourseModel.deleteOne({ _id: req.params.id }).then((course) => {
        res.json(course);
      });
    })();
  }
}

export default new CourseController();
