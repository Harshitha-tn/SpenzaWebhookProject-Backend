import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Webhook extends Document {
  @Prop({ required: true })
  sourceUrl: string;

  @Prop({ required: true })
  callbackUrl: string;

  @Prop({
    default: 'active',
  })
  status: string;
}

export const WebhookSchema =
  SchemaFactory.createForClass(Webhook);