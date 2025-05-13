import { Injectable } from '@nestjs/common';

import { OrderRepositoryImpl } from '@repositories/OrderRepositoryImpl';
import { OrderRepository } from '@interfaces/Repository';
import { OrderService } from '@interfaces/Service';
import { Order } from '@entities/Order';

@Injectable()
export class OrderServiceImpl implements OrderService {
	constructor(private readonly repository: OrderRepositoryImpl) {}

	public async getAll(): Promise<ReturnType<OrderRepository['getAll']>> {
		return await this.repository.getAll();
	}

	public async createNewOrder(params: Partial<Order>): Promise<ReturnType<OrderRepository['createNewOrder']>> {
		return await this.repository.createNewOrder(params);
	}

	public async test(): Promise<ReturnType<OrderRepository['test']>> {
		return await this.repository.test();
	}
}
