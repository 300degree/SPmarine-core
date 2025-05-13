import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity({ name: 'Carrier' })
export class Carrier extends BaseEntity {
	// @Column()
	// public orderId: string;

	@Column({ name: 'LAT', type: 'float' })
	public last: number;

	@Column({ name: 'LNG', type: 'float' })
	public long: number;
}
