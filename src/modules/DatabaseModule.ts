/** @format */

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { BaseEntity } from '@entities/BaseEntity';
import { Barge } from '@entities/Barge';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST || 'localhost',
			port: Number(process.env.DB_PORT) || 5432,
			username: process.env.DB_USERNAME || 'postgres',
			password: process.env.DB_PASSWORD || 'password',
			database: process.env.DB_NAME || 'examples',
			entities: [BaseEntity, Barge],
			synchronize: true,
		}),
	],
})
export class DatabaseModule {}
