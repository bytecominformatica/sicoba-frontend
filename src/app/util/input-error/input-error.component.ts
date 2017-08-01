import {Component, Input, OnInit} from '@angular/core';

const messages = {
  required: 'Campo obrigatório',
  minlength: (error) => {
    console.log(error);
    return `O tamanho mínimo ${error.actualLength}/${error.requiredLength}`;
  }
};

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css']
})
export class InputErrorComponent implements OnInit {
  @Input() input: any;

  constructor() {
  }

  ngOnInit() {
  }

  getMessages(): any[] {
    const errors = this.input.errors;
    if (!errors) return null;
    const getMessage = this.getMessage;
    return Object.keys(errors).map(key => getMessage(key, errors[key]));
  }

  getMessage(name, error): string {
    let message = messages[name];
    if (typeof message === 'function') {
      message = message(error);
    }
    return message ? message: 'Error desconhecido';
  }
}
