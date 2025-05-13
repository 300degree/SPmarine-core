import { Entity, Column } from 'typeorm';

import { BaseEntity } from '@entities/BaseEntity';

@Entity({ name: 'Barge' })
export class Barge extends BaseEntity {
	@Column({ name: 'WEIGHT', type: 'integer' })
	public weight: number;

	@Column({ name: 'CAP', type: 'integer' })
	public cap: number;

	@Column({ name: 'LAT', type: 'float' })
	public last: number;

	@Column({ name: 'LNG', type: 'float' })
	public long: number;

	@Column({
		name: 'WATER STATUS',
		type: 'enum',
		enum: ['SEA', 'RIVER'],
		default: 'SEA',
	})
	public waterStatus: 'SEA' | 'RIVER';

	@Column({ name: 'STATION', type: 'varchar', default: '' })
	public station: string;

	@Column({ name: 'KM', type: 'float', default: 0 })
	public kilometer: number;

	@Column({ name: 'SETUP TIME', type: 'float', default: 0.0 })
	public setupTime: number;

	@Column({ name: 'READY DATETIME', type: 'timestamp' })
	public readyDateTime: Date;
}
