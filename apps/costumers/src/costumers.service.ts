import { Injectable } from '@nestjs/common';
import { CostumerRepository } from './costumer.repository';
import { Costumer } from '@app/common/entities/costumer.entity';
import Joi from 'joi';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class CostumersService {
  constructor(private readonly costumerRepository: CostumerRepository) {}
  getHello(): string {
    return 'Hello World!';
  }

  createCostumer(costumer: Costumer): Promise<Costumer> {
    return this.costumerRepository.create(costumer);
  }

  getAllCostumers(): Promise<Costumer[]> {
    return this.costumerRepository.findAll();
  }

  getCostumer(id: string): Promise<Costumer> {
    console.log(id);
    return this.costumerRepository.findOne({
      where: {
        id,
      },
    });
  }

  updateCostumer(id: string, costumer: Costumer): Promise<UpdateResult> {
    return this.costumerRepository.update({ id }, costumer);
  }

  deleteCostumer(id: string): Promise<DeleteResult> {
    return this.costumerRepository.delete({ id });
  }
}
