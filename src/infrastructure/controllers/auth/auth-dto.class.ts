import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthLoginDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'email is required' })
  @IsString({ message: 'email must be a string' })
  readonly email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  readonly password: string;
}