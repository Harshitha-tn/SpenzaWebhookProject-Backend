import { EventsService } from './events.service';
export declare class EventsController {
    private eventService;
    constructor(eventService: EventsService);
    handleWebhook(body: any): Promise<import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./event.schema").Event, {}, import("mongoose").DefaultSchemaOptions> & import("./event.schema").Event & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
