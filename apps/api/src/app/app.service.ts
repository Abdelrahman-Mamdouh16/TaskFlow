import { Injectable } from '@nestjs/common';
import { startingPage } from './partials/startingPage.js';

@Injectable()
export class AppService {
  getWelcomeMessage(): string {
    return startingPage();
  }
}
