import { Customer } from '@entities/Customer';
import { Station } from '@entities/Station';
import { Tugboat } from '@entities/Tugboat';
import { Carrier } from '@entities/Carrier';
import { Order } from '@entities/Order';
import { Barge } from '@entities/Barge';

export interface BargeRepository {
	getAll(): Promise<Barge[]>;
	createNewBarge(params: Partial<Barge>): Promise<Barge>;
	removeBarge(id: string | number): Promise<boolean>;
	test(): Promise<string>;
}

export interface TugboatRepository {
	getAll(): Promise<Tugboat[]>;
	createNewTugboat(params: Partial<Tugboat>): Promise<Tugboat>;
	test(): Promise<string>;
}

export interface OrderRepository {
	getAll(): Promise<Order[]>;
	createNewOrder(params: Partial<Order>): Promise<Order>;
	test(): Promise<string>;
}

export interface CarrierRepository {
	getAll(): Promise<Carrier[]>;
	createNewCarrier(params: Partial<Carrier>): Promise<Carrier>;
	test(): Promise<string>;
}

export interface CustomerRepository {
	getAll(): Promise<Customer[]>;
	createNewCustomer(params: Partial<Customer>): Promise<Customer>;
	test(): Promise<string>;
}

export interface StationRepository {
	getAll(): Promise<Station[]>;
	createNewStation(params: Partial<Station>): Promise<Station>;
	test(): Promise<string>;
}
