import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import modules from './modules';

@Module({
  imports: [
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
