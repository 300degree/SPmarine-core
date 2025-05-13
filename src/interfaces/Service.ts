import {
	CustomerRepository,
	TugboatRepository,
	StationRepository,
	CarrierRepository,
	BargeRepository,
	OrderRepository,
} from '@interfaces/Repository';
import { Customer } from '@entities/Customer';
import { Station } from '@entities/Station';
import { Carrier } from '@entities/Carrier';
import { Tugboat } from '@entities/Tugboat';
import { Barge } from '@entities/Barge';
import { Order } from '@entities/Order';

export interface StationService {
	getAll(): Promise<ReturnType<StationRepository['getAll']>>;
	createNewStation(params: Partial<Station>): Promise<ReturnType<StationRepository['createNewStation']>>;
	test(): Promise<ReturnType<BargeRepository['test']>>;
}

export interface CarrierService {
	getAll(): Promise<ReturnType<CarrierRepository['getAll']>>;
	createNewCarrier(params: Partial<Carrier>): Promise<ReturnType<CarrierRepository['createNewCarrier']>>;
	test(): Promise<ReturnType<CarrierRepository['test']>>;
}

export interface BargeService {
	getAll(): Promise<ReturnType<BargeRepository['getAll']>>;
	createNewBarge(params: Partial<Barge>): Promise<ReturnType<BargeRepository['createNewBarge']>>;
	removeBarge(id: string | number): Promise<ReturnType<BargeRepository['removeBarge']>>;
	test(): Promise<ReturnType<BargeRepository['test']>>;
}

export interface TugboatService {
	getAll(): Promise<ReturnType<TugboatRepository['getAll']>>;
	createNewTugboat(params: Partial<Tugboat>): Promise<ReturnType<TugboatRepository['createNewTugboat']>>;
	test(): ReturnType<TugboatRepository['test']>;
}

export interface OrderService {
	getAll(): Promise<ReturnType<OrderRepository['getAll']>>;
	createNewOrder(params: Partial<Order>): Promise<ReturnType<OrderRepository['createNewOrder']>>;
	test(): Promise<ReturnType<OrderRepository['test']>>;
}

export interface CustomerService {
	getAll(): Promise<ReturnType<CustomerRepository['getAll']>>;
	createNewCustomer(params: Partial<Customer>): Promise<ReturnType<CustomerRepository['createNewCustomer']>>;
	test(): Promise<ReturnType<CustomerRepository['test']>>;
}
