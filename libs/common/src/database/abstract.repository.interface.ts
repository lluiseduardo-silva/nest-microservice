// abstract.repository.interface.ts

import { FindManyOptions, FindOneOptions, FindOptionsWhere } from 'typeorm';

export interface IAbstractRepository<T> {
  create(entity: T): Promise<T>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  findOne(options: FindOneOptions<T>): Promise<T | null>;
  findBy(options: FindOptionsWhere<T>): Promise<T[]>;
}
