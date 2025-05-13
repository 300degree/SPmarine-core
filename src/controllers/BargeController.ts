import { Controller, HttpException, HttpStatus, Get, Post, Delete, Body } from '@nestjs/common';

import { BargeServiceImpl } from '@services/BargeServiceImpl';
import { BargeRequestDTO } from '@dto/Request';
import { BargeResponseDto } from '@dto/Response';

@Controller({ path: '/v1' })
export class BargeController {
	constructor(private readonly service: BargeServiceImpl) {}

	/**
	 * @brief Get all barges from the service layer
	 *
	 * @returns List of all barges
	 */
	@Get('/barges')
	public async getAllBarges(): Promise<BargeRequestDTO[]> {
		try {
			return this.service.getAll();
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
	@Post('/barges')
	public async createNewBarge(@Body() params: BargeRequestDTO): Promise<BargeResponseDto> {
		try {
			return await this.service.createNewBarge(params);
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
	@Delete('/barges')
	public async removeBarge(@Body() id: string | number): Promise<{ response: string; status: number }> {
		const res = { response: '', status: HttpStatus.NO_CONTENT };

		try {
			if (!(await this.service.removeBarge(id))) {
				res.response = 'Barge not found or could not be deleted!';
				res.status = HttpStatus.NOT_FOUND;
			}

			return res;
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
