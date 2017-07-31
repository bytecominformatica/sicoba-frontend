declare var Materialize: any;

export default class Toast {

  show(message: string) {
    Materialize.toast(message, 4000);
  }
}
