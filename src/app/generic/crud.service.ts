import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BaseModel} from './base-model';

@Injectable()
export abstract class CrudService<T extends BaseModel> {
  constructor(protected http: HttpClient) {
  }

  get(id: any): Observable<T> {
    return this.http.get(this.getPathId(id));
  }

  query(params?: any, action?: any): Observable<T[]> {
    return this.http.get(this.getPathIdOptional(action), {params: this.createHttpParams(params)});
  }

  save(model: T) {
    return this.http.post(this.getPathIdOptional(model.id), model);
  }

  delete(model: T) {
    return this.http.delete(this.getPathId(model.id));
  }

  protected createHttpParams(params: any): HttpParams {
    let httpParams;
    if (params) {
      httpParams = new HttpParams();
      for (const k in  params) {
        if (params.hasOwnProperty(k)) {
          httpParams = new HttpParams().set(k, params[k]);
        }
      }
    }
    return httpParams;
  }

  private getPathId(id: number): string {
    return this.getPath() + '/' + id;
  }

  private getPathIdOptional(id: number): string {
    return id ? this.getPath() + '/' + id : this.getPath();
  }

  abstract getPath(): string;
}
