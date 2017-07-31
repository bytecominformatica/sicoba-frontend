import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {ClienteService} from '../cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.clienteService.getCliente(+params.get('id')))
      .subscribe(clientes => {
        this.clientes = clientes;
      });
  }

  private getCliente(id: number): Promise<number> {
    return Promise.resolve(id);
  }
}
