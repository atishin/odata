import { IOdataObject } from "./../odata-object";
import { Observable } from 'rxjs/Observable';

export class Queuerable<
    TKey = any,
    TSelectables = any,
    TFilterables = any,
    TExpandables = any,
    TObject = any
    > {

    get(): Queuerable<any, any, any, any> {
        throw new Error("Method not implemented.");
    }

    single(key: TKey): Queuerable.SingleObjectQueuerable<TKey, TSelectables, TFilterables, TExpandables, TObject> {
        return new Queuerable.SingleObjectQueuerable(this, key);
    }

}

export namespace Queuerable {
    export class SingleObjectQueuerable<
        TKey = any,
        TSelectables = any,
        TFilterables = any,
        TExpandables = any,
        TObject = any
        > extends Queuerable<TKey, TSelectables, TFilterables, TExpandables, TObject> {

        constructor(
            querable: Queuerable<TKey, TSelectables, TFilterables, TExpandables, TObject>,
            private key: TKey
        ) {
            super();
        }

        execute(): Observable<IOdataObject<TObject>> {
            return null;
        }
    }
}

