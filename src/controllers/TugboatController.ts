/** @format */

import { Controller, HttpException, HttpStatus, Get } from '@nestjs/common';

import { TugboatServiceImpl } from '@services/TugboatServiceImpl';

@Controller()
export class TugboatController {
	constructor(private readonly service: TugboatServiceImpl) {}

	/**
	 * name
	 */
	@Get()
	public async test(): Promise<ReturnType<TugboatServiceImpl['test']>> {
		try {
			return await this.service.test();
		} catch (error) {
			throw new HttpException(error, HttpStatus.BAD_REQUEST);
		}
	}
}
