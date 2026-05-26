import { Model } from 'mongoose';
import { Webhook } from './webhook.schema';
export declare class WebhooksService {
    private webhookModel;
    constructor(webhookModel: Model<Webhook>);
    create(body: any): Promise<import("mongoose").Document<unknown, {}, Webhook, {}, import("mongoose").DefaultSchemaOptions> & Webhook & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Webhook, {}, import("mongoose").DefaultSchemaOptions> & Webhook & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    cancel(id: string): Promise<(import("mongoose").Document<unknown, {}, Webhook, {}, import("mongoose").DefaultSchemaOptions> & Webhook & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
