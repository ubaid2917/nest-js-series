import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiKeyGuard } from './guards/auth/api-key.guard';
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const reflector = app.get(Reflector);

  // global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: false,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  // global guards
  app.useGlobalGuards(
    new AuthGuard(reflector),
    new ApiKeyGuard(),
  );
  // global exception filter 
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
