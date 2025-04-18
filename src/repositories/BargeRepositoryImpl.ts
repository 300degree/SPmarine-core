/** @format */

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { BargeRepository } from '@interfaces/BargeRepository';
import { Barge } from '@entities/Barge';

@Injectable()
export class BargeRepositoryImpl implements BargeRepository {
	constructor(
		@InjectRepository(Barge)
		private readonly barge: Repository<Barge>,
	) {}

	public async test(): Promise<Barge[]> {
		return this.barge.find();
	}
}
