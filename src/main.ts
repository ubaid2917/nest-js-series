import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiKeyGuard } from './guards/auth/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  

  const reflector = app.get(Reflector);

  app.useGlobalPipes(
    new ValidationPipe({
      transform:false,
      whitelist:true,
      forbidNonWhitelisted:true,
    })
  );
  app.useGlobalGuards(
    new AuthGuard(reflector),
    new ApiKeyGuard(),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
