import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Define CORS options
   const corsOptions: CorsOptions = {
    origin: [
      'http://localhost:3001',
      'http://localhost:3000'
    ], // or specify your frontend URL(s) here
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  };
  // Enable CORS with options
  app.enableCors(corsOptions);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
