import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  protected retrieveToken(): string {
    const storedToken: string = localStorage.getItem(environment.currentUserKey);
    if (!storedToken) {
      throw new Error('no token found');
    }
    return storedToken;
  }
}
