import {Component, OnInit} from '@angular/core';
import {ClienteService} from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: any;

  constructor(private clientService: ClienteService) {
  }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clientService.getClientes()
      .then(clientes => {
        console.log(clientes);
        this.clientes = clientes;
      });
  }

}
