import {StatusConsumer} from "./status-consumer.enum";
import {BaseModel} from "../generic/base-model";

export class Consumer extends BaseModel {
  name: string;
  rg: string;
  status: StatusConsumer;
  cpfCnpj: string;
  birthday: number;
  email: string;
  foneTitular: string;
  contato: string;
  foneContato: string;
  // endereco: Endereco;
}
