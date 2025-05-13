import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { TugboatRepositoryImpl } from '@repositories/TugboatRepositoryImpl';
import { TugboatController } from '@controllers/TugboatController';
import { TugboatServiceImpl } from '@services/TugboatServiceImpl';
import { Tugboat } from '@entities/Tugboat';

@Module({
	imports: [TypeOrmModule.forFeature([Tugboat])],
	controllers: [TugboatController],
	providers: [TugboatServiceImpl, TugboatRepositoryImpl],
})
export class TugboatModule {}
