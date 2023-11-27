import { IBcryptService } from 'src/domain/adapters/bcrypt.interface';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService implements IBcryptService {
  rounds: number = 10;

  async hash(hashString: string): Promise<string> {
    return await bcrypt.hash(hashString, this.rounds);
  }

  async compare(password: string, hashPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
}