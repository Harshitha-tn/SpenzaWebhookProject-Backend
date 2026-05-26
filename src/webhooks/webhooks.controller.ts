import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { WebhooksService } from './webhooks.service';

@Controller('webhooks')
export class WebhooksController {
  constructor(
    private webhookService: WebhooksService,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.webhookService.create(body);
  }

  @Get()
  findAll() {
    return this.webhookService.findAll();
  }

  @Delete(':id')
  cancel(@Param('id') id: string) {
    return this.webhookService.cancel(id);
  }
}