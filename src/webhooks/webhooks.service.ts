import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Webhook } from './webhook.schema';

@Injectable()
export class WebhooksService {
  constructor(
    @InjectModel(Webhook.name)
    private webhookModel: Model<Webhook>,
  ) {}

  async create(body: any) {
    return this.webhookModel.create(body);
  }

  async findAll() {
    return this.webhookModel.find();
  }

  async cancel(id: string) {
    return this.webhookModel.findByIdAndUpdate(
      id,
      {
        status: 'cancelled',
      },
      { new: true },
    );
  }
}