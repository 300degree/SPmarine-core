import { Controller, HttpException, HttpStatus, Get, Post, Body } from '@nestjs/common';

import { CarrierServiceImpl } from '@services/CarrierServiceImpl';
import { CarrierService } from '@interfaces/Service';
import { CarrierRequestDTO } from '@dto/Request';

@Controller({ path: '/v1' })
export class CarrierController {
	constructor(private readonly service: CarrierServiceImpl) {}

	/**
	 * @brief
	 *
	 * @returns
	 */
	@Get('/carriers')
	public async getAll(): Promise<ReturnType<CarrierService['getAll']>> {
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

	@Post('/carriers')
	public async createNewCarrier(@Body() params: CarrierRequestDTO) {
		return this.service.createNewCarrier(params);
	}
}
