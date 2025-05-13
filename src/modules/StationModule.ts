import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { StationRepositoryImpl } from '@repositories/StationRepositoryImpl';
import { StationServiceImpl } from '@services/StationServiceImpl';
import { StationController } from '@controllers/StationController';
import { Station } from '@entities/Station';

@Module({
	imports: [TypeOrmModule.forFeature([Station])],
	controllers: [StationController],
	providers: [StationServiceImpl, StationRepositoryImpl],
})
export class StationModule {}
