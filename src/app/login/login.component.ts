import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {LoginService} from './login.service';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  remember: boolean;
  submitted = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  attemptLogin() {
    this.submitted = true;
    this.loginService.attemptLogin(this.user.username, this.user.password)
      .subscribe((user) => {
        localStorage.setItem(environment.currentUserKey, JSON.stringify(user));
        this.router.navigate(['/']);
      }, (error) => {
        localStorage.removeItem(environment.currentUserKey);
      });
  }
}
