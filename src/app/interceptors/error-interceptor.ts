import {Injectable} from '@angular/core';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import Toast from '../util/toast';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private _toast = new Toast();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .catch((err) => {
        if (err instanceof HttpErrorResponse) {
          let message;
          if (err.error && err.error.message) {
            message = err.error.message;
          } else {
            message = `Erro: ${err.status} - ${err.message}`;
          }
          this._toast.show(message);
        }
        throw err;
      });
  }
}
