import {Injectable} from '@angular/core';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {User} from '../login/user';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';

import {AuthService} from '../login/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isServerRequest(req) && !this.isLoginRequest(req)) {
      const currentUser = this.authService.getCurrentUser();
      if (currentUser && currentUser.token) {
        req = req.clone({setHeaders: {Authorization: currentUser.token}});
      }
    }

    return next.handle(req)
      .catch((err) => {
        if (err.status === 401 && !err.url.endsWith('/api/login')) {
          this.authService.cleanCredentials();
          this.router.navigate(['/login']);
        }
        throw err;
      });
  }

  private isLoginRequest(req: HttpRequest<any>) {
    return req.url.endsWith('/login');
  }

  private isServerRequest(req: HttpRequest<any>) {
    return req.url.startsWith(environment.apiRoot);
  }
}
