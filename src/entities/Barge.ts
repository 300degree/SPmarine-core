/** @format */

import { Entity, Column } from 'typeorm';

import { BaseEntity } from '@entities/BaseEntity';
import { WaterStatusType } from '@types';

@Entity()
export class Barge extends BaseEntity {
	@Column()
	public weight: number;

	@Column()
	public cap: number;

	@Column()
	public last: number;

	@Column()
	public long: number;

	@Column({
		type: 'enum',
		enum: WaterStatusType,
		default: WaterStatusType.SEA,
	})
	public waterStatus: WaterStatusType;
}
