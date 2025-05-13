import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { OrderRepositoryImpl } from '@repositories/OrderRepositoryImpl';
import { OrderController } from '@controllers/OrderController';
import { OrderServiceImpl } from '@services/OrderServiceImpl';
import { Order } from '@entities/Order';

@Module({
	imports: [TypeOrmModule.forFeature([Order])],
	controllers: [OrderController],
	providers: [OrderServiceImpl, OrderRepositoryImpl],
})
export class OrderModuel {}
