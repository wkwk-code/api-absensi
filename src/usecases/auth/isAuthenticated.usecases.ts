import { UserWithoutPassword, UserM } from "src/domain/models/user.model";
import { UserRepository } from "src/domain/repositories/userRepository.interface";

export class IsAuthenticatedUseCases {
  constructor(private readonly adminUserRepo: UserRepository) { }

  async execute(emai: string): Promise<UserWithoutPassword> {
    const user: UserM = await this.adminUserRepo.getUserByEmail(emai);
    const { password, ...info } = user;
    return info;
  }
}