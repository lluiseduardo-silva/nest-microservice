import { Module } from '@nestjs/common';
import { CostumersController } from './costumers.controller';
import { CostumersService } from './costumers.service';
import { DatabaseModule } from '@app/common';
import { Costumer } from '@app/common/entities/costumer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostumerRepository } from './costumer.repository';
import { LoggerModule } from 'nestjs-pino';

@Module({
  controllers: [CostumersController],
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    DatabaseModule,
    TypeOrmModule.forFeature([Costumer]),
  ],
  providers: [CostumersService, CostumerRepository],
})
export class CostumersModule {}
