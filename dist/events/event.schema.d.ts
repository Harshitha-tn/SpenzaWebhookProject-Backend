import { Document } from 'mongoose';
export declare class Event extends Document {
    eventType: string;
    payload: any;
    status: string;
    retryCount: number;
}
export declare const EventSchema: import("mongoose").Schema<Event, import("mongoose").Model<Event, any, any, any, any, any, Event>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Event, Document<unknown, {}, Event, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Event & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    eventType?: import("mongoose").SchemaDefinitionProperty<string, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    payload?: import("mongoose").SchemaDefinitionProperty<any, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    retryCount?: import("mongoose").SchemaDefinitionProperty<number, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Event & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Event>;
