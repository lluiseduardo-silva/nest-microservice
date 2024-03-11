import { Column, Entity } from 'typeorm';
import { AbstractSchema } from '@app/common/abstract.schema';
import { IsNotEmpty } from 'class-validator';
// import { AbstractSchema } from '../../../../libs/common/src/database/abstract.schema';

@Entity('Costumers')
export class Costumer extends AbstractSchema {
  @Column()
  @IsNotEmpty()
  name: string;
}
