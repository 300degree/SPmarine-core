import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { TugboatRepository } from '@interfaces/Repository';
import { Tugboat } from '@entities/Tugboat';

@Injectable()
export class TugboatRepositoryImpl implements TugboatRepository {
	constructor(
		@InjectRepository(Tugboat)
		private readonly entity: Repository<Tugboat>,
	) {}

	public async getAll(): Promise<Tugboat[]> {
		return await this.entity.find();
	}

	public async createNewTugboat(params: Partial<Tugboat>): Promise<Tugboat> {
		return await this.entity.save(this.entity.create(params));
	}

	public async test(): Promise<string> {
		return 'hello world';
	}
}
