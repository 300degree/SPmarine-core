import { Injectable } from '@nestjs/common';

import { TugboatRepositoryImpl } from '@repositories/TugboatRepositoryImpl';
import { TugboatRepository } from '@interfaces/Repository';
import { TugboatService } from '@interfaces/Service';
import { Tugboat } from '@entities/Tugboat';

@Injectable()
export class TugboatServiceImpl implements TugboatService {
	constructor(private readonly repository: TugboatRepositoryImpl) {}

	public async getAll(): Promise<ReturnType<TugboatRepositoryImpl['getAll']>> {
		return await this.repository.getAll();
	}

	public async createNewTugboat(
		params: Partial<Tugboat>,
	): Promise<ReturnType<TugboatRepository['createNewTugboat']>> {
		return await this.repository.createNewTugboat(params);
	}

	public test(): ReturnType<TugboatRepositoryImpl['test']> {
		return this.repository.test();
	}
}
