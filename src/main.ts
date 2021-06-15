import { NestFactory } from '@nestjs/core';
import { initSwagger } from 'app.swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  initSwagger(app);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    optionsSuccessStatus: 204,
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
