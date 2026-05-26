import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Event extends Document {
  @Prop()
  eventType: string;

  @Prop({ type: Object })
  payload: any;

  @Prop({
    default: 'success',
  })
  status: string;

  @Prop({
    default: 0,
  })
  retryCount: number;
}

export const EventSchema =
  SchemaFactory.createForClass(Event);