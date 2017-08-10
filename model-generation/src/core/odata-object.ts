import { Queuerable } from "./queuerables/queuerable";

export interface IOdataObject<TValue = any, TQuerable = Queuerable> {
    value: TValue;
    asQueuerable(): TQuerable;
}