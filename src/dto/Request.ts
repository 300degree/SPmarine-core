import { IsNotEmpty, IsDate } from 'class-validator';

export class BargeRequestDTO {
	@IsNotEmpty()
	public id: string;
	@IsNotEmpty()
	public name: string;
	@IsNotEmpty()
	public weight: number;
	@IsNotEmpty()
	public cap: number;
	@IsNotEmpty()
	public last: number;
	@IsNotEmpty()
	public long: number;
	@IsNotEmpty()
	public waterStatus: 'SEA' | 'RIVER';
	@IsNotEmpty()
	public station: string;
	@IsNotEmpty()
	public kilometer: number;
	@IsNotEmpty()
	public setupTime: number;
	// @IsDate()
	public readyDateTime: Date;
}

export class CarrierRequestDTO {
}

export class OrderRequestDTO {
}

export class CustomerRequestDTO {
}

export class TugboatRequestDTO {
}

export class StationRequestDTO {
	@IsNotEmpty()
	public id: string;

	@IsNotEmpty()
	public type: 'SEA' | 'RIVER';

	@IsNotEmpty()
	public name: string;

	@IsNotEmpty()
	public latitude: number;

	@IsNotEmpty()
	public Longitude: number;

	@IsNotEmpty()
	public kilometer: number;

	@IsNotEmpty()
	public customer: string;
}
