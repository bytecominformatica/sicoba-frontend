import {Injectable} from '@angular/core';
import {MenuItem} from './menu-item';
import {MENU_ITENS} from './mock-menu';

@Injectable()
export class MenuService {
  constructor() {
  }

  getMenus(): Promise<MenuItem[]> {
    return Promise.resolve(MENU_ITENS);
  }
}
