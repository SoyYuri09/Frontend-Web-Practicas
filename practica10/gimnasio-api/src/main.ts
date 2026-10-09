import 'dotenv/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './comun/interceptores/logging.interceptor';
import { DominioExceptionFilter } from './comun/filtros/dominio.filter';
import { SobreInterceptor } from './comun/interceptores/sobre.interceptor';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173'],
    exposedHeaders: ['Location', 'X-Request-Id'],
  });

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true}),
  )
  app.useGlobalFilters(new DominioExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor(), new SobreInterceptor());

  const reflector = app.get(Reflector); 
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
