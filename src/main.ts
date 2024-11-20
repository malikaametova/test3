import 'reflect-metadata'; // Импортируйте reflect-metadata
import express from 'express'; // Используйте ES6 импорт
import { AppModule } from './app.module'; 
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap() 