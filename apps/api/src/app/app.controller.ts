import {
  All,
  Controller,
  Get,
  Header,
  NotFoundException,
} from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getWelcomeMessage(): string {
    return this.appService.getWelcomeMessage();
  }

  @All('*')
  handleNotFound(): string {
    throw new NotFoundException('Route not found.');
  }
}
