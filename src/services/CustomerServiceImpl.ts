import { Injectable } from '@nestjs/common';

import { CustomerReposioryImpl } from '@repositories/CustomerRepositoryImpl';
import { CustomerRepository } from '@interfaces/Repository';
import { CustomerService } from '@interfaces/Service';
import { Customer } from '@entities/Customer';

@Injectable()
export class CustomerServiceImpl implements CustomerService {
	constructor(private readonly repository: CustomerReposioryImpl) {}

	public async getAll(): Promise<ReturnType<CustomerRepository['getAll']>> {
		return await this.repository.getAll();
	}

	public async createNewCustomer(
		params: Partial<Customer>,
	): Promise<ReturnType<CustomerRepository['createNewCustomer']>> {
		return await this.repository.createNewCustomer(params);
	}

	public async test(): Promise<ReturnType<CustomerRepository['test']>> {
		return await this.repository.test();
	}
}
