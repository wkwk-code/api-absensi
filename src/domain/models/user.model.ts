export class UserWithoutPassword {
  id: number;
  username: string;
  email: string;
  createDate: Date;
  updatedDate: Date;
  lastLogin: Date;
  hashRefreshToken: string;
  photo: string;
}

export class UserM extends UserWithoutPassword {
  password: string;
}