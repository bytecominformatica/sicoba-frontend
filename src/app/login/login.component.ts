import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {AuthService} from './auth.service';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  user: User = new User();
  remember: boolean;
  submitted = false;

  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  attemptLogin() {
    this.submitted = true;
    this.loginService.attemptLogin(this.user.username, this.user.password)
      .subscribe((user) => {
        this.authService.setCurrentUser(user);
        this.router.navigate(['/']);
      }, (error) => {
        this.authService.cleanCredentials();
      });
  }
}
