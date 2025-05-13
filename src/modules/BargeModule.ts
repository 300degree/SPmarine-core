import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { BargeRepositoryImpl } from '@repositories/BargeRepositoryImpl';
import { BargeController } from '@controllers/BargeController';
import { BargeServiceImpl } from '@services/BargeServiceImpl';
import { Barge } from '@entities/Barge';

@Module({
	imports: [TypeOrmModule.forFeature([Barge])],
	controllers: [BargeController],
	providers: [BargeServiceImpl, BargeRepositoryImpl],
})
export class BargeModule {}
