import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: ['http://localhost:3000'], // Orígenes permitidos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Encabezados permitidos
    credentials: true,
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
