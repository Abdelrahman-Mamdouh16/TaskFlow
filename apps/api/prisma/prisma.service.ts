import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../src/generated/prisma/client.js';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Connected to the database successfully.');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }
  async onModuleDestroy() {
    try {
      await this.$disconnect();
      console.log('Disconnected from the database successfully.');
    } catch (error) {
      console.error('Error disconnecting from the database:', error);
    }
  }
}