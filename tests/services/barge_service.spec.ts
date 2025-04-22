import { Test, TestingModule } from '@nestjs/testing';

import { BargeRepositoryImpl } from '@repositories/BargeRepositoryImpl';
import { BargeServiceImpl } from '@services/BargeServiceImpl';

import { mockBarges, mockBargesForNotEqual } from '../mock/barge';

describe('BargeServiceImpl', () => {
	let repository: BargeRepositoryImpl;
	let service: BargeServiceImpl;

	beforeAll(async () => {
		let module: TestingModule = await Test.createTestingModule({
			providers: [
				BargeServiceImpl,
				{
					provide: BargeRepositoryImpl,
					useValue: {
						test: jest.fn().mockResolvedValue('hello world'),
						getAll: jest.fn().mockResolvedValue(mockBarges)
					},
				},
			],
		}).compile();

		service = module.get(BargeServiceImpl);
		repository = module.get(BargeRepositoryImpl)
	});

	beforeEach(async () => {
		jest.clearAllMocks();
	});

	it('service should be defined', () => {
		expect(service).toBeDefined();
	});

	it('repository should be defined', () => {
		expect(repository).toBeDefined();
	});

	it('should return hello world', async () => {
		expect(await service.test()).toBe('hello world');
	});

	it('should return not equal', async () => {
		expect(await service.getAll()).not.toEqual(mockBargesForNotEqual);
		expect(repository.getAll).toHaveBeenCalledTimes(1);
	});

	it('should return all barges', async () => {
		expect(await service.getAll()).toEqual(mockBarges);
		expect(repository.getAll).toHaveBeenCalledTimes(1);
	});

});
