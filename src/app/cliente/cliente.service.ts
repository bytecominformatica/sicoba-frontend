import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Cliente} from './cliente';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClienteService {

  private dataUrl = 'https://api.github.com/users/clairtonluz';

  constructor(private http: Http) {
  }

  getClientes(): any {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then(response => response.json() as Cliente[])
      .catch(this.handleError);

  }

  getCliente(id: number): any {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Cliente[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
