import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Order' })
export class Order {
	@PrimaryColumn({ name: 'ID', type: 'varchar', primary: true })
	public id: string;

	@Column({ name: 'TYPE', type: 'enum', enum: ['import', 'export'] })
	public type: 'import' | 'export';

	@Column({ name: 'START POINT' })
	public from: string;

	@Column({ name: 'DES POINT' })
	public dest: string;

	@Column({ name: 'PRODUCT NAME' })
	public product: string;

	@Column({ name: 'DEMAND' })
	public demand: string;

	@Column({ name: 'START DATETIME', type: 'timestamp' })
	public startDateTime: Date;

	@Column({ name: 'DUE DATETIME', type: 'timestamp' })
	public DueDateTime: Date;

	/**
	 * ULD unit load device
	 */
	@Column({ name: 'LD+ULD RATE', type: 'float' })
	public loadingRate: number;

	@Column({ name: 'CRANE RATE1', type: 'float' })
	public craneRate1: number;

	@Column({ name: 'CRANE RATE2', type: 'float' })
	public craneRate2: number;

	@Column({ name: 'CRANE RATE3', type: 'float' })
	public craneRate3: number;

	@Column({ name: 'CRANE RATE4', type: 'float' })
	public craneRate4: number;

	@Column({ name: 'CRANE RATE5', type: 'float' })
	public craneRate5: number;

	@Column({ name: 'CRANE RATE6', type: 'float' })
	public craneRate6: number;

	@Column({ name: 'CRANE RATE7', type: 'float' })
	public craneRate7: number;

	@Column({ name: 'TIME READY CR1', type: 'float' })
	public timeReadyCR1: number;

	@Column({ name: 'TIME READY CR2', type: 'float' })
	public timeReadyCR2: number;

	@Column({ name: 'TIME READY CR3', type: 'float' })
	public timeReadyCR3: number;

	@Column({ name: 'TIME READY CR4', type: 'float' })
	public timeReadyCR4: number;

	@Column({ name: 'TIME READY CR5', type: 'float' })
	public timeReadyCR5: number;

	@Column({ name: 'TIME READY CR6', type: 'float' })
	public timeReadyCR6: number;

	@Column({ name: 'TIME READY CR7', type: 'float' })
	public timeReadyCR7: number;
}
