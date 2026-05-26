import { Document } from 'mongoose';
export declare class Webhook extends Document {
    sourceUrl: string;
    callbackUrl: string;
    status: string;
}
export declare const WebhookSchema: import("mongoose").Schema<Webhook, import("mongoose").Model<Webhook, any, any, any, any, any, Webhook>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Webhook, Document<unknown, {}, Webhook, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Webhook & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Webhook, Document<unknown, {}, Webhook, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Webhook & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sourceUrl?: import("mongoose").SchemaDefinitionProperty<string, Webhook, Document<unknown, {}, Webhook, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Webhook & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    callbackUrl?: import("mongoose").SchemaDefinitionProperty<string, Webhook, Document<unknown, {}, Webhook, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Webhook & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Webhook, Document<unknown, {}, Webhook, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Webhook & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Webhook>;
