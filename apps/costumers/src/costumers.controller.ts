import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CostumersService } from './costumers.service';
import { Costumer } from '@app/common/entities/costumer.entity';

@Controller('costumer')
export class CostumersController {
  constructor(private readonly costumersService: CostumersService) {}

  @Post()
  create(@Body() body: Costumer): Promise<Costumer> {
    return this.costumersService.createCostumer(body);
  }

  @Get()
  getAll(): Promise<Costumer[]> {
    return this.costumersService.getAllCostumers();
  }

  @Get(':id')
  getCostumer(@Param('id') id: string): Promise<Costumer> {
    return this.costumersService.getCostumer(id);
  }

  @Put(':id')
  updateCostumer(
    @Param('id') id: string,
    @Body() body: Costumer,
  ): Promise<any> {
    return this.costumersService.updateCostumer(id, body);
  }

  @Delete(':id')
  deleteCostumer(@Param('id') id: string): Promise<any> {
    return this.costumersService.deleteCostumer(id);
  }
}
