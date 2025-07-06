import { NextFunction, Request, Response } from "express";
import { PgDataSource } from "../data-source";
import { User } from "../entity/User";
import { UserRole } from "../models/auth";

export const authorization = (roles: UserRole[]) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const userRepo = PgDataSource.getRepository(User);
    const user = await userRepo.findOne({
      where: { id: req["currentUser"].id },
    });

    if (!user || !roles.includes(user.role)) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    next();
  };
};
