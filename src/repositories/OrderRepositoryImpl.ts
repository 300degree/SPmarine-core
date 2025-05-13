import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { OrderRepository } from '@interfaces/Repository';
import { Order } from '@entities/Order';

@Injectable()
export class OrderRepositoryImpl implements OrderRepository {
	constructor(
		@InjectRepository(Order)
		private readonly entity: Repository<Order>,
	) {}

	public async getAll(): Promise<Order[]> {
		// const query = `
		// SELECT * FROM \`Order\` LIMIT 10;
		// `;

		try {
			// return await this.entity.query(query);
			return await this.entity.find();
		} catch (e) {
			throw new Error(e.message);
		}
	}

	public async createNewOrder(params: Partial<Order>): Promise<Order> {
		// return await this.entity.save(this.entity.create(params));
		const query = `
		INSERT INTO \`Order\` (\`ID\`, \`TYPE\`, \`START POINT\`, \`DES POINT\`, \`PRODUCT NAME\`, \`DEMAND\`,
							   \`START DATETIME\`, \`DUE DATETIME\`, \`LD+ULD RATE\`, \`CRANE RATE1\`, \`CRANE RATE2\`,
							   \`CRANE RATE3\`, \`CRANE RATE4\`, \`CRANE RATE5\`, \`CRANE RATE6\`, \`CRANE RATE7\`,
							   \`TIME READY CR1\`, \`TIME READY CR2\`, \`TIME READY CR3\`, \`TIME READY CR4\`,
							   \`TIME READY CR5\`, \`TIME READY CR6\`, \`TIME READY CR7\`)
		VALUES ('${params.id}', '${params.type}', '${params.from}', '${params.dest}', '${params.product}',
				'${params.demand}', '${params.startDateTime}', '${params.DueDateTime}', '${params.loadingRate}',
				'${params.craneRate1}', '${params.craneRate2}', '${params.craneRate3}', '${params.craneRate4}',
			    '${params.craneRate5}', '${params.craneRate6}','${params.craneRate7}', '${params.timeReadyCR1}',
				'${params.timeReadyCR2}', '${params.timeReadyCR3}', '${params.timeReadyCR4}', '${params.timeReadyCR5}',
			    '${params.timeReadyCR6}', '${params.timeReadyCR7}');
		`;

		try {
			return await this.entity.query(query);
		} catch (e) {
			throw new Error(e.message);
		}
	}

	public async test(): Promise<string> {
		return 'hello world';
	}
}
