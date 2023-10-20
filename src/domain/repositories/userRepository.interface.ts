import { UserM } from "../models/user.model";

export interface UserRepository {
  getUserByUsername(email: string): Promise<UserM>;
  updateLastLogin(email: string): Promise<void>;
  updateRefreshToken(email: string, refreshToken: string): Promise<void>;
}