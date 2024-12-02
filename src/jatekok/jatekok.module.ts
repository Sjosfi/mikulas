import { Module } from '@nestjs/common';
import { JatekokService } from './jatekok.service';
import { JatekokController } from './jatekok.controller';

@Module({
  controllers: [JatekokController],
  providers: [JatekokService],
})
export class JatekokModule {}
