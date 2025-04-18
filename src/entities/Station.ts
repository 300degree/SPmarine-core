/** @format */

import { Entity, Column } from 'typeorm';

import { BaseEntity } from '@entities/BaseEntity';

@Entity({ name: "Stations" })
export class Station extends BaseEntity {

        @Column()
	public type: string;

}
