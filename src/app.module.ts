import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LucianoController } from './luciano/luciano.controller';

@Module({
  imports: [],
  controllers: [AppController, LucianoController],
  providers: [AppService],
})
export class AppModule {}
