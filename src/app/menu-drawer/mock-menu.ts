import {MenuItem} from './menu-item';

export const MENU_ITENS: MenuItem[] = [
  {
    name: 'Dashboard',
    icon: 'fa fa-dashboard fa-fw',
    url: '/'
  },
  {
    name: 'Comercial',
    icon: 'fa fa-group fa-fw',
    url: '',
    itens: [
      {
        name: 'Clientes',
        icon: 'fa fa-user fa-fw',
        url: '/consumers'
      },
      {
        name: 'Planos',
        icon: 'fa fa-cloud',
        url: '/planos'
      }
    ]
  },
  {
    name: 'Financeiro',
    icon: 'fa fa-dollar',
    url: '',
    itens: [
      {
        name: 'Enviar Retorno',
        icon: 'fa fa-upload',
        url: '/retorno'
      },
      {
        name: 'Cedentes',
        icon: 'fa fa-upload',
        url: '/cedentes'
      },
      {
        name: 'Contas Gerencianet',
        icon: 'fa fa-credit-card',
        url: '/gerencianet/accounts'
      },
      {
        name: 'Relatório de títulos',
        icon: 'fa fa-files-o',
        url: '/titulos/relatorio'
      },
      {
        name: 'Relatório de cobranças',
        icon: 'fa fa-files-o',
        url: '/charge/report'
      }
    ]
  },
  {
    name: 'Estoque',
    icon: 'fa fa-dropbox',
    url: '',
    itens: [
      {
        name: 'Equipamentos',
        icon: 'fa fa-wrench',
        url: '/equipamentos'
      }
    ]
  },
  {
    name: 'Provedor',
    icon: 'fa fa-linux',
    url: '',
    itens: [
      {
        name: 'Mikrotik',
        icon: 'fa fa-maxcdn',
        url: '/mikrotiks'
      }
    ]
  }
];
