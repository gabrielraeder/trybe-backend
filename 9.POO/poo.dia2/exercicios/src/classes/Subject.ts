export default class Subject {
  constructor(
    private _name: string
  ) {}

  get name() { return this._name }

  set name(value:string) {
    if ( value.length < 3) {
      throw new Error('Nome de matéria invalido.')
    }
    this._name = value;
  }
}