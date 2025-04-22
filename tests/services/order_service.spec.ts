import { Test, TestingModule } from '@nestjs/testing';

import { OrderRepository } from '@interfaces/Repository';
import { OrderService } from '@interfaces/Service';

import { OrderRepositoryImpl } from '@repositories/OrderRepositoryImpl';
import { OrderServiceImpl } from '@services/OrderServiceImpl';

describe('OrderServiceImpl', () => {
	let repository: OrderRepository;
	let service: OrderService;

	beforeAll(async () => {
		let module: TestingModule = await Test.createTestingModule({
			providers: [
				OrderServiceImpl,
				{
					provide: OrderRepositoryImpl,
					useValue: {
						test: jest.fn().mockResolvedValue('hello world'),
					},
				},
			],
		}).compile();

		service = module.get(OrderServiceImpl);
		repository = module.get(OrderRepositoryImpl)
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
});
