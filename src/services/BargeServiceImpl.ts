/** @format */

import { Injectable } from '@nestjs/common';

import { BargeRepositoryImpl } from '@repositories/BargeRepositoryImpl';
import { BargeService } from '@interfaces/BargeService';
import { Barge } from '@entities/Barge';

@Injectable()
export class BargeServiceImpl implements BargeService {
	constructor(private readonly repository: BargeRepositoryImpl) {}

	public async test(): Promise<ReturnType<BargeRepositoryImpl['test']>> {
		return await this.repository.test();
	}
}
