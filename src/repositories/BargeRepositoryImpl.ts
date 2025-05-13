import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BargeRepository } from '@interfaces/Repository';
import { Barge } from '@entities/Barge';

@Injectable()
export class BargeRepositoryImpl implements BargeRepository {
	constructor(
		@InjectRepository(Barge)
		private readonly entity: Repository<Barge>,
	) {}

	public async getAll(): Promise<Barge[]> {
		const query = `
		SELECT * FROM \`Barge\`;
		`;

		try {
			// return this.entity.query(query);
			return this.entity.find();
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	public async createNewBarge(params: Partial<Barge>): Promise<Barge> {
		// const query = `
		// INSERT INTO \`Barge\` ()
		// VALUES ();
		// `;

		try {
			// return await this.entity.query(query);
			return await this.entity.save(this.entity.create(params));
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	public async removeBarge(id: string | number): Promise<boolean> {
		// const query = `
		// DELETE FROM \`Barge\` WHERE id = ${id}
		// `;

		try {
			// return (await this.entity.query(query)) ? true : false;
			const result = await this.entity.delete(id);
			return !!result.affected && result.affected > 0;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	public async test(): Promise<string> {
		try {
			return 'hello world';
		} catch (e) {
			return e.message;
		}
	}
}
