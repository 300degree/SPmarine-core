import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CustomerRepository } from '@interfaces/Repository';
import { Customer } from '@entities/Customer';

@Injectable()
export class CustomerReposioryImpl implements CustomerRepository {
	constructor(
		@InjectRepository(Customer)
		private readonly entity: Repository<Customer>,
	) {}

	public async getAll(): Promise<Customer[]> {
		return await this.entity.find();
	}

	public async createNewCustomer(params: Partial<Customer>): Promise<Customer> {
		return await this.entity.save(this.entity.create(params));
	}

	public async test(): Promise<string> {
		return 'hello world';
	}
}
