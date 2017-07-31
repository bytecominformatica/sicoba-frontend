import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./user";
import {environment} from "../../environments/environment";

@Injectable()
export class LoginService {
  private url = '/login';

  constructor(protected http: HttpClient) {
  }

  attemptLogin(username: string, password: string) {
    const token = btoa(`${username}:${password}`);
    const authorization = `Basic ${token}`;
    const headers = new HttpHeaders({'Authorization': authorization});
    return this.http.post(this.url, null, {headers: headers});
  }

  getCurrentUser(): User {
    let currentUser: User;
    const user = localStorage.getItem(environment.currentUserKey);
    if (user) {
      currentUser = JSON.parse(user) as User;
    } else {
      currentUser = new User();
      currentUser.username = 'sac';
      currentUser.name = 'Bytecom Informática';
    }

    return currentUser;
  }
}
