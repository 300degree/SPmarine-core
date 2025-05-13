import { Entity, Column } from 'typeorm';

import { BaseEntity } from '@entities/BaseEntity';

@Entity({ name: 'Tugboat' })
export class Tugboat extends BaseEntity {
	@Column({ name: 'MAX CAP', type: 'integer', default: 0 })
	public maxCap: number;

	@Column({ name: 'MAX BARGE', type: 'integer', default: 0 })
	public maxBarge: number;

	@Column({ name: 'MAX FUEL CON', type: 'integer', default: 0 })
	public maxFuelCon: number;

	@Column({
		name: 'TYPE',
		type: 'enum',
		enum: ['SEA', 'RIVER'],
		default: 'SEA',
	})
	public type: 'SEA' | 'RIVER';

	@Column({
		name: 'MIN SPEED',
		type: 'float',
		default: 0,
	})
	public minSpeed: number;

	@Column({ name: 'MAX SPEED', type: 'float', default: 0 })
	public maxSpeed: number;

	@Column({ name: 'RPM', type: 'integer', default: 0 })
	public rpm: number;

	@Column({ name: 'HP', type: 'integer', default: 0 })
	public hp: number;

	@Column({ name: 'LAT', type: 'float', default: 0.0 })
	public last: number;

	@Column({ name: 'LNG', type: 'float', default: 0.0 })
	public long: number;

	@Column({
		name: 'STATUS',
		type: 'enum',
		enum: ['SEA', 'RIVER'],
		default: 'SEA',
	})
	public status: 'SEA' | 'RIVER';

	@Column({ name: 'KM', type: 'integer' })
	public kilometer: number;

	@Column({ name: 'READY DATETIME', type: 'timestamp' })
	public readyDateTime: Date;
}
