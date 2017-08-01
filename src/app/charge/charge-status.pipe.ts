import {Pipe, PipeTransform} from '@angular/core';
import {Charge} from "./charge";
import {StatusCharge} from "./status-charge.enum";

@Pipe({
  name: 'chargeStatus'
})
export class ChargeStatusPipe implements PipeTransform {

  private map = {
    NEW: {name: 'Novo', color: 'grey', description: 'Cobrança gerada, aguardando definição da forma de pagamento.'},
    WAITING: {
      name: 'Aguardando',
      color: 'blue',
      description: 'Forma de pagamento selecionada, aguardando a confirmação do pagamento.'
    },
    PAID: {name: 'Pago', color: 'green', description: 'Pagamento confirmado.'},
    MANUAL_PAYMENT: {
      name: 'Pago na empresa',
      color: 'green',
      description: 'Pagamento efetuado diretamente na empresa.'
    },
    UNPAID: {name: 'Não ', color: 'orange', description: ', "Boleto não foi pago até o momento.'},
    REFUNDED: {
      name: 'Devolvido',
      color: 'red',
      description: 'Pagamento devolvido pelo lojista ou pelo intermediador Gerencianet.'
    },
    CONTESTED: {name: 'Contestado', color: 'red', description: 'Pagamento em processo de contestação.'},
    CANCELED: {name: 'Cancelado', color: 'red', description: 'Cobrança cancelada pelo vendedor ou pelo pagador.'},
    LINK: {name: 'Link', color: 'cyan', description: 'Cobrança associada a um link de pagamento.'}
  };

  transform(charge: Charge, tipo = 'name'): any {
    if (!charge || !charge.status) return null;

    return charge.manualPayment ? this.map.MANUAL_PAYMENT[tipo] : this.map[charge.status][tipo];
  }

}
