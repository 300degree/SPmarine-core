import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from '@modules/AppModule';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: {
			origin: [`${process.env.CLIENT_ENDPOINT ?? 'http://localhost:18000'}`],
			methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
			allowedHeaders: 'Content-Type, Authorization',
			maxAge: 86400,
		},
	});
	app.useGlobalPipes(new ValidationPipe({ transform: true }));
	await app.listen(process.env.PORT ?? 18001);
}
bootstrap();
