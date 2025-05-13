import { Controller, HttpException, HttpStatus, Get, Post, Body } from '@nestjs/common';

import { OrderServiceImpl } from '@services/OrderServiceImpl';
import { OrderRequestDTO } from '@dto/Request';

@Controller({ path: '/v1' })
export class OrderController {
	constructor(private readonly service: OrderServiceImpl) {}

	/**
	 * @brief
	 *
	 * @returns
	 */
	@Get('/orders')
	public async getAll() {
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

	@Post('/orders')
	public async createNewOrder(@Body() params: OrderRequestDTO) {
		try {
			return await this.service.createNewOrder(params)
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
