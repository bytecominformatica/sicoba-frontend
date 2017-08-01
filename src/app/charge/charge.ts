import {BaseModel} from '../generic/base-model';
import {StatusCharge} from "./status-charge.enum";
import {Consumer} from "../consumer/consumer";

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
  status?: StatusCharge;
  expireAt?: Date;
  paidAt?: Date;
  consumer?: Consumer;
  // carnet?: Carnet;
}
