import { Model } from 'mongoose';
import { Event } from './event.schema';
export declare class EventsService {
    private eventModel;
    constructor(eventModel: Model<Event>);
    handleWebhook(body: any): Promise<import("mongoose").Document<unknown, {}, Event, {}, import("mongoose").DefaultSchemaOptions> & Event & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Event, {}, import("mongoose").DefaultSchemaOptions> & Event & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
