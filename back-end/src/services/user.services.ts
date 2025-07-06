import { Repository } from "typeorm";
import { User } from "../entity/User";

export class UserService {
  constructor(private readonly userRepository: Repository<User>) {}

  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async getUserById(userId: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async updateUser(
    userId: string,
    updateData: Partial<User>
  ): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) return null;
    Object.assign(user, updateData);
    return this.userRepository.save(user);
  }

  async deleteUser(userId: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) return null;
    await this.userRepository.remove(user);
    return user;
  }
}
