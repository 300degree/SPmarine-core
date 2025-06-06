import { Controller, HttpException, HttpStatus, Get, Post, Body } from '@nestjs/common';

import { TugboatServiceImpl } from '@services/TugboatServiceImpl';
import { TugboatResponseDto } from '@dto/Response';
import { TugboatRequestDTO } from '@dto/Request';

@Controller({ path: '/v1' })
export class TugboatController {
	constructor(private readonly service: TugboatServiceImpl) {}

	/**
	 * @brief
	 *
	 * @returns
	 */
	@Get('/tugboats')
	public async getAll(): Promise<ReturnType<TugboatServiceImpl['getAll']>> {
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
	@Post('/tugboats')
	public async createNewTugboat(@Body() params: TugboatRequestDTO) {
		try {
			return await this.service.createNewTugboat(params);
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
