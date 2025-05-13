import { Injectable } from '@nestjs/common';

import { CarrierRepositoryImpl } from '@repositories/CarrierRepositoryImpl';
import { CarrierRepository } from '@interfaces/Repository';
import { CarrierService } from '@interfaces/Service';
import { Carrier } from '@entities/Carrier';

@Injectable()
export class CarrierServiceImpl implements CarrierService {
	constructor(private readonly repository: CarrierRepositoryImpl) {}

	public async getAll(): Promise<ReturnType<CarrierRepository['getAll']>> {
		return await this.repository.getAll();
	}

	public async createNewCarrier(
		params: Partial<Carrier>,
	): Promise<ReturnType<CarrierRepository['createNewCarrier']>> {
		return await this.repository.createNewCarrier(params);
	}

	public async test(): Promise<ReturnType<CarrierRepository['test']>> {
		return await this.repository.test();
	}
}
