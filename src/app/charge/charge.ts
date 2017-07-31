import {BaseModel} from '../generic/base-model';

export class Charge extends BaseModel {
  value?: number;
  paidValue?: number;
  discount?: number;
  parcel?: number;
  tokenNotification?: string;
  lastNotification?: number;
  url?: string;
  paymentUrl?: string;
  barcode?: string;
  message?: string;
  description?: string;
  manualPayment?: boolean;
  chargeId?: number;
  // status?: StatusCharge;
  expireAt?: Date;
  paidAt?: Date;
  // payment?: PaymentType;
  // cliente?: Cliente;
  // carnet?: Carnet;
}
