import { CreateUserDto } from "@/infrastructure/controllers/users/user-dto.class";
import { UserM, UserWithoutPassword } from "../models/user.model";

export interface UserRepository {
  createUser(user: CreateUserDto): Promise<UserWithoutPassword>;
  getUserByEmail(email: string): Promise<UserM>;
  updateLastLogin(email: string): Promise<void>;
  updateRefreshToken(email: string, refreshToken: string): Promise<void>;
}