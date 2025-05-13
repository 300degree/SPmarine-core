import { Entity, Column } from 'typeorm';

import { BaseEntity } from '@entities/BaseEntity';

@Entity({ name: 'Station' })
export class Station extends BaseEntity {
	@Column({ name: 'TYPE' })
	public type: string;

	@Column({ name: 'LAT', type: 'float' })
	public last: number;

	@Column({ name: 'LNG', type: 'float' })
	public long: number;

	@Column({ name: 'KM', type: 'float' })
	public kilometer: number;

	@Column({ name: 'CUS' })
	public customer: string;
}
