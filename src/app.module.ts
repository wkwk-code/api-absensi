import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { BcryptModule } from './infrastructure/services/bcrypt/bcrypt.module';
import { JwtModule } from './infrastructure/services/jwt/jwt.module';

@Module({
  imports: [EnvironmentConfigModule, TypeOrmModule, TypeOrmModule, LoggerModule, ExceptionsModule, RepositoriesModule, BcryptModule, JwtModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
