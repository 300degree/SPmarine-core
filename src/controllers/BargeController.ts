/** @format */

import { Controller, HttpException, HttpStatus, Get } from '@nestjs/common';

import { BargeServiceImpl } from '@services/BargeServiceImpl';

@Controller()
export class BargeController {
	constructor(private readonly service: BargeServiceImpl) {}

	/**
	 * name
	 */
	@Get()
	public async name(): Promise<ReturnType<BargeServiceImpl['test']>> {
		try {
			return await this.service.test();
		} catch (error) {
			throw new HttpException(error, HttpStatus.BAD_REQUEST);
		}
	}
}
