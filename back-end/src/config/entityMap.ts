import { PgDataSource } from "../data-source";
import { User } from "../entity/User";

export const userRepository = PgDataSource.getRepository(User);
