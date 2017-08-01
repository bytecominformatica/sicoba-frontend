import {Component, OnInit} from '@angular/core';

import {MenuService} from './menu.service';
import {MenuItem} from './menu-item';
import {User} from '../login/user';
import {AuthService} from '../login/auth.service';

declare var $: any;

@Component({
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.css'],
  providers: [MenuService]
})
export class MenuDrawerComponent implements OnInit {
  itens: MenuItem[];
  selectedItem: MenuItem;
  currentUser: User = new User();

  constructor(private menuService: MenuService, private loginService: AuthService) {
    this.currentUser = loginService.getCurrentUser();
  }

  ngOnInit() {
    $('.button-collapse').sideNav({closeOnClick: false});
    this.getItens();
  }

  getItens(): void {
    this.menuService.getMenus().then(itens => {
      this.itens = itens;
      this.selectedItem = this.itens.find(item => item.url === location.pathname);
    });
  }

  onSelect(selectedItem: MenuItem) {
    this.selectedItem = selectedItem;
    $('.button-collapse').sideNav('hide');
  }

  isMenu(item: MenuItem) {
    return item.itens && item.itens.length;
  }
}
