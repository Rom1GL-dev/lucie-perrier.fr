import { Module } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module';
import { FaqsService } from './faqs.service';
import { FaqsController } from './faqs.controller';
import { LogsModule } from '../logs/logs.module';

@Module({
  imports: [SharedModule, LogsModule],
  providers: [FaqsService],
  controllers: [FaqsController],
  exports: [],
})
export class FaqsModule {}
