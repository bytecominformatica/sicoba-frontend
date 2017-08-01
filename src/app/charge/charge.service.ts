import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Observable} from 'rxjs/Observable';
import {Charge} from './charge';

@Injectable()
export class ChargeService extends CrudService<Charge> {
  getPath(): string {
    return '/charges';
  }

  overdue(): Observable<Charge[]> {
    return this.query(null, 'overdue');
  }

}
