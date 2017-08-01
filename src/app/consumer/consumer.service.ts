import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Consumer} from './consumer';
import 'rxjs/add/operator/toPromise';
import {CrudService} from "../generic/crud.service";

@Injectable()
export class ConsumerService extends CrudService<Consumer> {
  getPath(): string {
    return '/consumers'
  }

}
