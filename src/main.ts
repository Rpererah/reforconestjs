import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { EntityNotFoundInterceptor } from './interceptor/entity_not_found.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //interceptor
  app.useGlobalInterceptors(new EntityNotFoundInterceptor());

  await app.listen(3000);
}
bootstrap();
