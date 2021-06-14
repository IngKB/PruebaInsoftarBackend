import { NestFactory } from '@nestjs/core';
import { initSwagger } from 'app.swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  await app.listen(3000);
}
bootstrap();
