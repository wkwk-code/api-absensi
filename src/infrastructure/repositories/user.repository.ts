import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../controllers/users/user-dto.class';
import { UserWithoutPassword, UserM } from 'src/domain/models/user.model';
import { UserRepository } from 'src/domain/repositories/userRepository.interface';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userEntityRepository: Repository<User>,
  ) { }

  async createUser(user: CreateUserDto): Promise<UserWithoutPassword> {
    const adminUserEntity = this.toUserEntity(user);
    await this.userEntityRepository.save(adminUserEntity);
    return this.toUser(adminUserEntity);
  }

  async updateRefreshToken(email: string, refreshToken: string): Promise<void> {
    await this.userEntityRepository.update(
      {
        email: email,
      },
      { hach_refresh_token: refreshToken },
    );
  }
  async getUserByEmail(email: string): Promise<UserM> {
    const adminUserEntity = await this.userEntityRepository.findOne({
      where: {
        email: email,
      },
    });
    if (!adminUserEntity) {
      return null;
    }
    return this.toUser(adminUserEntity);
  }
  async updateLastLogin(email: string): Promise<void> {
    await this.userEntityRepository.update(
      {
        email: email,
      },
      { last_login: () => 'CURRENT_TIMESTAMP' },
    );
  }

  private toUser(adminUserEntity: User): UserM {
    const adminUser: UserM = new UserM();

    adminUser.id = adminUserEntity.id;
    adminUser.fullName = adminUserEntity.fullName;
    adminUser.userName = adminUserEntity.userName;
    adminUser.password = adminUserEntity.password;
    adminUser.createDate = adminUserEntity.createdate;
    adminUser.updatedDate = adminUserEntity.updateddate;
    adminUser.lastLogin = adminUserEntity.last_login;
    adminUser.hashRefreshToken = adminUserEntity.hach_refresh_token;
    adminUser.image = adminUserEntity.image;

    return adminUser;
  }

  private toUserEntity(createUserDto: CreateUserDto): User {
    const userEntity: User = new User();

    userEntity.userName = createUserDto.userName;
    userEntity.password = createUserDto.password;
    userEntity.email = createUserDto.email;
    userEntity.image = createUserDto.image;
    userEntity.fullName = createUserDto.fullName;

    return userEntity;
  }
}