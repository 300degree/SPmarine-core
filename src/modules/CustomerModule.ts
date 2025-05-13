import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { CustomerReposioryImpl } from '@repositories/CustomerRepositoryImpl';
import { CustomerController } from '@controllers/CustomerController';
import { CustomerServiceImpl } from '@services/CustomerServiceImpl';
import { Customer } from '@entities/Customer';

@Module({
	imports: [TypeOrmModule.forFeature([Customer])],
	controllers: [CustomerController],
	providers: [CustomerServiceImpl, CustomerReposioryImpl],
})
export class CustomerModule {}
