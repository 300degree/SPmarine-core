import { Expose } from 'class-transformer';

export class TugboatResponseDto {
	@Expose({ name: 'ID' })
	public id: string;

	@Expose({ name: 'NAME' })
	public name: string;

	@Expose({ name: 'MAX CAP' })
	public maxCap: number;

	@Expose({ name: 'MAX BARGE' })
	public maxBarge: number;

	@Expose({ name: 'MAX FUEL CON' })
	public maxFuelCon: number;

	@Expose({ name: 'TYPE' })
	public type: 'SEA' | 'RIVER';

	@Expose({ name: 'MIN SPEED' })
	public minSpeed: number;

	@Expose({ name: 'RPM' })
	public maxSpeed: number;

	@Expose({ name: 'HP' })
	public rpm: number;

	@Expose({ name: 'MAX SPEED' })
	public hp: number;

	@Expose({ name: 'LAT' })
	public last: number;

	@Expose({ name: 'LNG' })
	public long: number;

	@Expose({ name: 'STATUS' })
	public status: 'SEA' | 'RIVER';

	@Expose({ name: 'KM' })
	public kilo: number;

	@Expose({ name: 'READY DATETIME' })
	public readyDateTime: Date;
}

export class BargeResponseDto {
	@Expose({ name: 'ID' })
	public id: string;

	@Expose({ name: 'NAME' })
	public name: string;

	@Expose({ name: 'WEIGHT' })
	public weight: number;

	@Expose({ name: 'CAP' })
	public cap: number;

	@Expose({ name: 'LAT' })
	public last: number;

	@Expose({ name: 'LNG' })
	public long: number;

	@Expose({ name: 'WATER STATUS' })
	public waterStatus: 'SEA' | 'RIVER';

	@Expose({ name: 'STATION' })
	public station: string;

	@Expose({ name: 'KM' })
	public kilometer: number;

	@Expose({ name: 'SETUP TIME' })
	public setupTime: number;

	@Expose({ name: 'READY DATETIME' })
	public readyDateTime: Date;
}

export class StationResponseDTO {
}

export class CarrierResponseDTO {
}

export class OrderResponseDTO {
}

export class CustomerResponseDTO {
}

export class TugboatResponseDTO {
}
