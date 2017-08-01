import {Injectable} from '@angular/core';
import {User} from "./user";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

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

  cleanCredentials() {
    localStorage.removeItem(environment.currentUserKey);
  }

  setCurrentUser(user: User) {
    localStorage.setItem(environment.currentUserKey, JSON.stringify(user));
  }
}
