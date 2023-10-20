import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  fullName: string;

  @Index({ unique: true })
  @Column('varchar', { unique: true })
  userName: string;

  @Column('varchar', { select: false, unique: true })
  email: string;

  @Column('text', { select: false, })
  password: string;

  @CreateDateColumn({ name: 'createdate' })
  createdate: Date;

  @UpdateDateColumn({ name: 'updateddate' })
  updateddate: Date;

  @Column({ nullable: true })
  last_login?: Date;

  @Column('varchar', { nullable: true })
  hach_refresh_token: string;

  @Column('text', { nullable: true })
  image?: string;
}