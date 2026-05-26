import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';

import { Event } from './event.schema';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name)
    private eventModel: Model<Event>,
  ) {}

  async handleWebhook(body: any) {
    let retries = 0;
    let success = false;

    while (retries < 3 && !success) {
      try {
        await axios.post(
          'https://httpbin.org/post',
          body,
        );

        success = true;
      } catch (err) {
        retries++;
      }
    }

    return this.eventModel.create({
      eventType: body.eventType,
      payload: body,
      status: success
        ? 'success'
        : 'failed',
      retryCount: retries,
    });
  }

  async findAll() {
    return this.eventModel.find();
  }
}
