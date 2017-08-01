import {Pipe, PipeTransform} from '@angular/core';
import {Consumer} from "./consumer";
import {StatusConsumer} from "./status-consumer.enum";

@Pipe({
  name: 'consumerStatus'
})
export class ConsumerStatusPipe implements PipeTransform {

  private map = {
    INATIVO: {name: 'Invativo', color: 'orange', description: 'Cliente está inativo'},
    ATIVO: {name: 'Ativo', color: 'green', description: 'Cliente está ativo'},
    CANCELADO: {name: 'Cancelado', color: 'red', description: ', "Cliente foi cancelado'}
  };

  transform(status: StatusConsumer, tipo = 'name'): any {
    if (!status) return null;
    return this.map[status][tipo];
  }

}
