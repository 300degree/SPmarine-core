import { Controller, HttpException, HttpStatus, Get, Post, Body } from '@nestjs/common';

import { StationServiceImpl } from '@services/StationServiceImpl';
import { StationResponseDTO } from '@dto/Response';
import { StationRequestDTO } from '@dto/Request';

@Controller({ path: '/v1' })
export class StationController {
	constructor(private readonly service: StationServiceImpl) {}

	/**
	 * @brief
	 *
	 * @returns
	 */
	@Get('/stations')
	public async getAll(): Promise<ReturnType<StationServiceImpl['getAll']>> {
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

	@Post('/stations')
	public async createNewStation(@Body() params: StationRequestDTO): Promise<StationResponseDTO> {
		try {
			return await this.service.createNewStation({
				id: params.id,
				name: params.name,
				type: params.type,
				last: params.latitude,
				long: params.Longitude,
				kilometer: params.kilometer,
				customer: params.customer,
			});
		} catch (e) {
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					response: e.message ?? 'Unkown error',
				},
				HttpStatus.BAD_REQUEST,
			);
		}
	}
}
