/** @format */

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { TugboatRepository } from '@interfaces/TugboatRepository';
import { Tugboat } from '@entities/Tugboat';

@Injectable()
export class TugboatRepositoryImpl implements TugboatRepository {
	constructor(
		@InjectRepository(Tugboat)
		private readonly repository: Repository<Tugboat>,
	) {}

	public async test(): Promise<void> {
	}
}
