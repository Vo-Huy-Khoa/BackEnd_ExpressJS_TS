import express from "express";
import Router from "express";
import courseController from "../app/controllers/courseController";
import userController from "../app/controllers/userController";

const router = Router();

const initWebRoute = (app: express.Application) => {
  router.post("/courses/create", courseController.create);
  router.get("/courses/:id", courseController.find);
  router.put("/courses/edit/:id", courseController.update);
  router.delete("/courses/delete/:id", courseController.destroy);
  router.get("/courses", courseController.get);

  router.post("/users/create", userController.create);
  router.delete('/users/delete/"id', userController.destroy);
  router.put("users/edit/:id", userController.update);
  router.get("/users/id", userController.find);
  router.get("/users", userController.get);

  return app.use("/api", router);
};

export default initWebRoute;
