import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:8081',
    credentials: true,
  });

  await app.listen(3030);
  console.log(`http://localhost:${3030}`);
}
bootstrap();
