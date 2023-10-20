export class UserWithoutPassword {
  id: number;
  fullName: string;
  userName: string;
  email: string;
  createDate: Date;
  updatedDate: Date;
  lastLogin: Date;
  hashRefreshToken: string;
  image?: string;
}

export class UserM extends UserWithoutPassword {
  password: string;
}