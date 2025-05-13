import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { StationRepository } from '@interfaces/Repository';
import { Station } from '@entities/Station';

@Injectable()
export class StationRepositoryImpl implements StationRepository {
	constructor(
		@InjectRepository(Station)
		private readonly entity: Repository<Station>,
	) {}

	public async getAll(): Promise<Station[]> {
		return await this.entity.find();
	}

	public async createNewStation(params: Partial<Station>): Promise<Station> {
		try {
			const station = this.entity.create(params);
			return await this.entity.save(station);
		} catch (e) {
			throw new InternalServerErrorException(e.message || 'Failed to create new station');
		}
	}

	public async test(): Promise<string> {
		return 'hello world';
	}
}
