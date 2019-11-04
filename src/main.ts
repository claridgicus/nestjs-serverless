import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: process.env.UI_URL,
	});
	app.use(compression());
	await app.listen(process.env.EXPRESS_PORT);
}
bootstrap();
