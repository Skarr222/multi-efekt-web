import { Request, Response } from "express";
import { encrypt } from "../helpers/encryptionHelper";
import { User } from "../entity/User";
import { UserService } from "../services/user.services";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async signup(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body as User;
      const encryptedPassword = await encrypt.encryptpass(password);
      const userData = { name, email, password: encryptedPassword, role };

      const user = await this.userService.createUser(userData);
      const token = encrypt.generateToken({ id: user.id });

      return res.status(200).json({
        message: "User created successfully",
        token,
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Signup failed" });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch users" });
    }
  }

  async getUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.userService.getUserById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch user" });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
      const updatedUser = await this.userService.updateUser(id, {
        name,
        email,
      });
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      return res
        .status(200)
        .json({ message: "User updated", user: updatedUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to update user" });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedUser = await this.userService.deleteUser(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "User deleted" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to delete user" });
    }
  }
}
