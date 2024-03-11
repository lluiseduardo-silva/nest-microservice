import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsDate, IsOptional, IsUUID } from 'class-validator';

export abstract class AbstractSchema {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsOptional()
  id: string;

  @CreateDateColumn()
  @IsDate()
  @IsOptional()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  @IsOptional()
  updatedAt: Date;

  @DeleteDateColumn()
  @IsDate()
  @IsOptional()
  deletedAt?: Date;
}
