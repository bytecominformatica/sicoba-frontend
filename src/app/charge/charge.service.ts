import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Observable} from 'rxjs/Observable';
import {Charge} from './charge';

@Injectable()
export class ChargeService extends CrudService<Charge> {
  private url = '/charges';

  getPath(): string {
    return this.url;
  }

  overdue(): Observable<Charge[]> {
    return this.get('overdue');
  }

}
