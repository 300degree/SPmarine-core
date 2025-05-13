import { Injectable } from '@nestjs/common';

import { BargeRepositoryImpl } from '@repositories/BargeRepositoryImpl';
import { BargeRepository } from '@interfaces/Repository';
import { BargeService } from '@interfaces/Service';
import { Barge } from '@entities/Barge';

@Injectable()
export class BargeServiceImpl implements BargeService {
	constructor(private readonly repository: BargeRepositoryImpl) {}

	public async getAll(): Promise<ReturnType<BargeRepositoryImpl['getAll']>> {
		return await this.repository.getAll();
	}

	public async createNewBarge(params: Partial<Barge>): Promise<ReturnType<BargeRepository['createNewBarge']>> {
		return await this.repository.createNewBarge(params);
	}

	public async removeBarge(id: string | number): Promise<ReturnType<BargeRepository['removeBarge']>> {
		return await this.repository.removeBarge(id);
	}

	public async test(): Promise<ReturnType<BargeRepositoryImpl['test']>> {
		return await this.repository.test();
	}
}
