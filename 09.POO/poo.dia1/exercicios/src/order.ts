import Client from './cliente';
import Item from './item';

export default class Order {
  private _customer: Client;
  private _itens: Item[] = [];
  private _payment: string;
  private _discount: number = 0;

  constructor(customer: Client, itens: Item[], payment: string, discount: number = 0) {
    this._customer = customer;
    this._itens = itens;
    this._payment = payment;
    this._discount = discount;
  }

  get customer(): Client { return this._customer }

  set customer(value: Client) {
    this._customer = value;
  }

  get itens():Item[] { return this._itens }

  set itens(value: Item[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._itens = value;
  }

  get paymentMethod(): string {
    return this._payment;
  }

  set paymentMethod(value: string) {
    this._payment = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._discount = value;
  }

  total(): number {
    const total = this.itens.reduce((acc, curr) => acc + curr.price, 0);
    return total;
  }

  totalWithDiscount() {
    const total = this.total();
    return total * (1 - this.discount);
  }
}