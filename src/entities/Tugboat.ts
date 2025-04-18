/** @format */

import { Entity, Column, ChildEntity } from 'typeorm';

import { BaseEntity } from '@entities/BaseEntity';
import { StatusType, TugboatType } from '@types';

@Entity({ name: "Tugboats" })
@ChildEntity()
export class Tugboat extends BaseEntity {

        @Column({ type: 'smallint', default: 0 })
	public maxCap: number;

	@Column({ type: 'int8', default: 0 })
	public maxBarge: number;

	@Column({ type: 'integer', default: 0 })
	public maxFuelCon: number;

	@Column({ type: 'enum', enum: TugboatType, default: TugboatType.SEA })
	public type: TugboatType;

	@Column({ type: 'float8', default: 0 })
	public minSpeed: number;

	@Column({ type: 'float8', default: 0 })
	public maxSpeed: number;

	@Column({ type: 'smallint', default: 0 })
	public rpm: number;

	@Column({ type: 'smallint', default: 0 })
	public hp: number;

	@Column({ type: 'float8', default: 0.0 })
	public last: number;

	@Column({ type: 'float8', default: 0.0 })
	public long: number;

	@Column({ type: 'enum', enum: StatusType, default: StatusType.SEA })
	public status: StatusType;

	@Column({ type: 'smallint' })
	public kilo: number;

	@Column({ type: 'date' })
	public readyDateTime: Date;

}
