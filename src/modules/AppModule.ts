/** @format */

import { Module } from '@nestjs/common';

import { BargeModule } from '@modules/BargeModule';
import { TugboatModule } from '@modules/TugboatModule';
import { DatabaseModule } from '@modules/DatabaseModule';

@Module({
	imports: [BargeModule, TugboatModule, DatabaseModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
