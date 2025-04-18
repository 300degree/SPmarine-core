/** @format */

import { Column, PrimaryColumn } from "typeorm";

export abstract class BaseEntity {

        @PrimaryColumn({ type: "varchar", primary: true })
        public id: string | number;

        @Column({ type: "varchar" })
        public name: string;

}

