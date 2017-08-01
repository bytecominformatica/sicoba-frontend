import {Injectable} from '@angular/core';
import {Consumer} from './consumer';
import 'rxjs/add/operator/toPromise';
import {CrudService} from "../generic/crud.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ConsumerService extends CrudService<Consumer> {
  getPath(): string {
    return '/consumers'
  }

  lastChanged(): Observable<Consumer[]> {
    return this.query(null, 'last_changed');
  }

}
