import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'config/typeorm.config';
import modules from './modules';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'dev' ? 'config/.dev.env' : 'config/.prod.env',
    }),
    ...modules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
