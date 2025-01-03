import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //transforma o tipo do dado para o tipo especificado no DTO
      whitelist: true, //remove os campos que não estão no DTO
      forbidNonWhitelisted: true //retorna um erro caso o campo não esteja no DTO
    })
  )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
