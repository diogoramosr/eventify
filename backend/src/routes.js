import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload.js";

const routes = new Router();
const upload = multer(uploadConfig);

// CONTROLLERS
import UserController from "./controllers/UserController.js";
import AuthController from "./controllers/AuthController.js";
import EventController from "./controllers/EventController.js";

// MIDDLEWARES
import { validId, validUser } from "./middlewares/global.middleware.js";
import { authMiddleware } from "./middlewares/auth.middlewares.js";

// ROUTES ---------------

// USERS
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.get("/users/:user_id", validId, validUser, UserController.show);

routes.get("/user", authMiddleware, UserController.details);

// EVENTS
routes.get("/events", EventController.index);
routes.post(
  "/events",
  authMiddleware,
  upload.array("banner"),
  EventController.store
);

// LOGIN
routes.post("/login", AuthController.login);

export default routes;
