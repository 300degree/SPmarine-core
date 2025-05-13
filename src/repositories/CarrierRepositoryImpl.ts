import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CarrierRepository } from '@interfaces/Repository';
import { Carrier } from '@entities/Carrier';

@Injectable()
export class CarrierRepositoryImpl implements CarrierRepository {
	constructor(
		@InjectRepository(Carrier)
		private readonly entity: Repository<Carrier>,
	) {}

	public async getAll(): Promise<Carrier[]> {
		return await this.entity.find();
	}

	public async createNewCarrier(params: Partial<Carrier>): Promise<Carrier> {
		return await this.entity.save(this.entity.create(params));
	}

	public async test(): Promise<string> {
		return 'hello world';
	}
}
