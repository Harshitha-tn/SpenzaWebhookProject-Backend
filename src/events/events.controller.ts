import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(
    private eventService: EventsService,
  ) {}

  @Post('webhook')
  handleWebhook(@Body() body: any) {
    return this.eventService.handleWebhook(body);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }
}
