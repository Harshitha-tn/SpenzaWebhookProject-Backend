import { WebhooksService } from './webhooks.service';
export declare class WebhooksController {
    private webhookService;
    constructor(webhookService: WebhooksService);
    create(body: any): Promise<import("mongoose").Document<unknown, {}, import("./webhook.schema").Webhook, {}, import("mongoose").DefaultSchemaOptions> & import("./webhook.schema").Webhook & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./webhook.schema").Webhook, {}, import("mongoose").DefaultSchemaOptions> & import("./webhook.schema").Webhook & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    cancel(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./webhook.schema").Webhook, {}, import("mongoose").DefaultSchemaOptions> & import("./webhook.schema").Webhook & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
