import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { BaseEntity } from '@entities/BaseEntity';
import { Customer } from '@entities/Customer';
import { Carrier } from '@entities/Carrier';
import { Tugboat } from '@entities/Tugboat';
import { Station } from '@entities/Station';
import { Order } from '@entities/Order';
import { Barge } from '@entities/Barge';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST || 'localhost',
			port: Number(process.env.DB_PORT) || 3306,
			username: process.env.DB_USERNAME || 'maria',
			password: process.env.DB_PASSWORD || 'password',
			database: process.env.DB_NAME || 'examples',
			entities: [BaseEntity, Barge, Customer, Carrier, Tugboat, Order, Station],
			// synchronize: true,
		}),
	],
})
export class DatabaseModule {}
