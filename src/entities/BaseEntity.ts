import { Column, PrimaryColumn } from 'typeorm';

export abstract class BaseEntity {
	@PrimaryColumn({ name: 'ID', type: 'varchar', primary: true })
	public id: string;

	@Column({ name: 'NAME', type: 'varchar' })
	public name: string;
}
