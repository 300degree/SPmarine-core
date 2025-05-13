import { Module } from '@nestjs/common';

import { DatabaseModule } from '@modules/DatabaseModule';
import { CustomerModule } from '@modules/CustomerModule';
import { TugboatModule } from '@modules/TugboatModule';
import { StationModule } from '@modules/StationModule';
import { CarrierModule } from '@modules/CarrierModule';
import { BargeModule } from '@modules/BargeModule';
import { OrderModuel } from '@modules/OrderModule';

@Module({
	imports: [DatabaseModule, CustomerModule, TugboatModule, StationModule, CarrierModule, BargeModule, OrderModuel],
	controllers: [],
	providers: [],
})
export class AppModule {}
