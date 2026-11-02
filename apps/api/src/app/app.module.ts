import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { PrismaService } from '../infrastructure/prisma.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
