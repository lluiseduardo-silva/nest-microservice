import { InternalServerErrorException } from '@nestjs/common';
import {
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
  UpdateResult,
} from 'typeorm';
import { AbstractSchema } from '@app/common/abstract.schema';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class AbstractRepository<T extends AbstractSchema> {
  protected repository: Repository<T>;
  protected constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async create(entity: T): Promise<T> {
    try {
      const newEntity = this.repository.create(entity);
      return await this.repository.save(newEntity);
    } catch (e) {
      throw new InternalServerErrorException('Error creating entity');
    }
  }

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    try {
      return await this.repository.find(options);
    } catch (e) {
      throw new InternalServerErrorException('Error finding all entities');
    }
  }

  async findOne(options: FindOneOptions<T>): Promise<T | null> {
    try {
      return await this.repository.findOne(options);
    } catch (e) {
      throw new InternalServerErrorException('Error finding entity');
    }
  }

  async findBy(options: FindOptionsWhere<T>): Promise<T[]> {
    try {
      return await this.repository.findBy(options);
    } catch (e) {
      throw new InternalServerErrorException('Error finding entity by options');
    }
  }

  async update(
    criteria: FindOptionsWhere<T>,
    entity: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    return await this.repository.update(criteria, entity);
  }

  async delete(criteria: FindOptionsWhere<T>): Promise<DeleteResult> {
    return await this.repository.delete(criteria);
  }
}
