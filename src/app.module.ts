import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import modules from './modules';
import entities from '../entities/index';
import 'reflect-metadata';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'dev' ? 'config/.dev.env' : 'config/.prod.env',
    }),
    // TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmModule.forRoot(
      process.env.NODE_ENV !== 'dev'
        ? {
            type: 'mysql',
            host: process.env.DB_HOST,
            port: 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities,
            synchronize: true,
          }
        : {
            type: 'mysql',
            host: process.env.DB_HOST,
            port: 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities,
            synchronize: true,
          },
    ),
    ...modules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
