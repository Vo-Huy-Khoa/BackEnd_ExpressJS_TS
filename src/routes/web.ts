import express from "express";
import Router from "express";
import courseController from "../app/controllers/courseController";

const router = Router();

const initWebRoute = (app: express.Application) => {
  router.post("/courses/create", courseController.create);
  router.get("/courses/:id", courseController.find);
  router.put("/courses/edit/:id", courseController.update);
  router.delete("/courses/delete/:id", courseController.destroy);
  router.get("/courses", courseController.get);

  return app.use("/api", router);
};

export default initWebRoute;
