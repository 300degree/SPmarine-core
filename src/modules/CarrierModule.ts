import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { CarrierRepositoryImpl } from '@repositories/CarrierRepositoryImpl';
import { CarrierController } from '@controllers/CarrierController';
import { CarrierServiceImpl } from '@services/CarrierServiceImpl';
import { Carrier } from '@entities/Carrier';

@Module({
	imports: [TypeOrmModule.forFeature([Carrier])],
	controllers: [CarrierController],
	providers: [CarrierServiceImpl, CarrierRepositoryImpl],
})
export class CarrierModule {}
