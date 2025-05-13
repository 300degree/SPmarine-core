import { Column, Entity } from 'typeorm';

import { BaseEntity } from './BaseEntity';
import { Station } from './Station';

@Entity({ name: 'Customer' })
export class Customer extends BaseEntity {
	@Column({ name: 'STATION ID', type: 'varchar' })
	public station: string;
}
