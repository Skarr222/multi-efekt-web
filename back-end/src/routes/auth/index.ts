import * as express from "express";
import { UserController } from "../../controllers/User.controller";
import { AuthController } from "../../controllers/Auth.controller";
import { authorization } from "../../middleware/authorization";
import { authentification } from "../../middleware/authentification";
import { UserRole } from "../../models/auth";
import { UserService } from "../../services/user.services";
import { userRepository } from "../../config/entityMap";

const Router = express.Router();

const userService = new UserService(userRepository);
const userController = new UserController(userService);

Router.get(
  "/users",
  authentification,
  authorization([UserRole.ADMIN]),
  userController.getUsers.bind(userController)
);

Router.get(
  "/profile",
  authentification,
  authorization([UserRole.USER, UserRole.ADMIN]),
  AuthController.getProfile.bind(AuthController)
);

Router.post("/signup", userController.signup.bind(userController));

Router.post("/login", AuthController.login.bind(AuthController));

Router.put(
  "/update/:id",
  authentification,
  authorization([UserRole.USER, UserRole.ADMIN]),
  userController.updateUser.bind(userController)
);

Router.delete(
  "/delete/:id",
  authentification,
  authorization([UserRole.ADMIN]),
  userController.deleteUser.bind(userController)
);

export { Router as userRouter };
