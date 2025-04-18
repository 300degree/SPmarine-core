/** @format */

import { Injectable } from '@nestjs/common';

import { TugboatRepositoryImpl } from '@repositories/TugboatRepositoryImpl';
import { TugboatService } from '@interfaces/TugboatService';
import { Tugboat } from '@entities/Tugboat';

@Injectable()
export class TugboatServiceImpl implements TugboatService {
	constructor(private readonly repository: TugboatRepositoryImpl) {}

	public async test(): Promise<
		ReturnType<TugboatRepositoryImpl['test']>
	> {
		return await this.repository.test();
	}
}
