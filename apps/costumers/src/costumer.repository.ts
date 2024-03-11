import { Injectable } from '@nestjs/common';
import { Costumer } from '@app/common/entities/costumer.entity';
import { AbstractRepository } from '@app/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CostumerRepository extends AbstractRepository<Costumer> {
  constructor(
    @InjectRepository(Costumer)
    repository: Repository<Costumer>,
  ) {
    super(repository);
  }
}
