import { Injectable } from '@nestjs/common';

import { StationRepositoryImpl } from '@repositories/StationRepositoryImpl';
import { StationRepository } from '@interfaces/Repository';
import { StationService } from '@interfaces/Service';
import { Station } from '@entities/Station';

@Injectable()
export class StationServiceImpl implements StationService {
	constructor(private readonly repository: StationRepositoryImpl) {}

	public async createNewStation(
		params: Partial<Station>,
	): Promise<ReturnType<StationRepository['createNewStation']>> {
		return await this.repository.createNewStation(params);
	}

	public async getAll(): Promise<ReturnType<StationRepository['getAll']>> {
		return await this.repository.getAll();
	}

	public async test(): Promise<ReturnType<StationRepository['test']>> {
		return await this.repository.test();
	}
}
