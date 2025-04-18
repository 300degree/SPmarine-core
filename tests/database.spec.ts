import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

describe('DataBaseConnection', () => {
	let app: TestingModule;
	let conn: DataSource;

	beforeAll(async () => {
		app = await Test.createTestingModule({
			imports: [
				TypeOrmModule.forRoot({
					type: 'postgres',
					host:
						process.env.DB_HOST ||
						'localhost',
					port:
						Number(process.env.DB_PORT) ||
						5432,
					username:
						process.env.DB_USERNAME ||
						'postgres',
					password:
						process.env.DB_PASSWORD ||
						'password',
					database:
						process.env.DB_NAME ||
						'examples',
					entities: [],
					synchronize: true,
				}),
				TypeOrmModule.forFeature(),
			],
			providers: [],
		}).compile();

		conn = app.get(DataSource);
	});

	beforeEach(async () => {
		jest.clearAllMocks();
	});

	it('should be connected', () => {
		expect(conn.isInitialized).toBe(true);
	});

	afterAll(async () => {
		await conn.destroy();
	});
});
