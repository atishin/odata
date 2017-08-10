import { IOdataObject } from "../core/odata-object";
import { Queuerable } from "../core/queuerables/queuerable";

export class IProductOdataObject implements IOdataObject {

    value: any;

    asQueuerable(): Queuerable<any, any, any, any> {
        return null;
    }

}