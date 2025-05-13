import { Controller, HttpException, HttpStatus, Get, Post, Body } from '@nestjs/common';

import { CustomerServiceImpl } from '@services/CustomerServiceImpl';
import { CustomerRequestDTO } from '@dto/Request';

@Controller({ path: '/v1' })
export class CustomerController {
	constructor(private readonly service: CustomerServiceImpl) {}

	/**
	 * @brief
	 *
	 * @returns
	 */
	@Get('/customers')
	public async getAll(): Promise<ReturnType<CustomerServiceImpl['getAll']>> {
		try {
			return await this.service.getAll();
		} catch (e) {
			console.error(e.message);
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					response: e.message ?? 'Unknown error',
				},
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	/**
	 * @brief
	 *
	 * @returns
	 */
	@Post('/customers')
	public async createNewCustomer(@Body() params: CustomerRequestDTO) {
		try {
			return await this.service.createNewCustomer(params);
		} catch (e) {
			console.error(e.message);
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					response: e.message ?? 'Unknown error',
				},
				HttpStatus.BAD_REQUEST,
			);
		}
	}
}
