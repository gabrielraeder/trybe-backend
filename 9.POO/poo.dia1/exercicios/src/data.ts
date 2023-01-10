export default class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month:number, year:number) {
    const dateStr = `${year}-${month}-${day}`;
    if (new Date(dateStr).getDate() !== day) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  get day():number { return this._day };

  set day(value: number) {
    if (value > 0 && value <= 31){
      this._day = value
    } else {
      throw new Error('Dia inválido!')
    }
  }

  get month():number { return this._month }

  set month(value: number) {
    if (value > 0 && value < 13){
      this._month = value
    } else {
      throw new Error('Mês inválido!')
    }
  }

  get year():number { return this._year }

  set year(value: number) {
    if (value > 0){
      this.year = value
    } else {
      throw new Error('Ano inválido!')
    }
  }

  getMonthName(): string {
    switch (this.month) {
      case 1:
        return 'Janeiro';
      case 2:
        return 'Fevereiro';
      case 3:
        return 'Março';
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
      case 6:
        return 'Junho';
      case 7:
        return 'Julho';
      case 8:
        return 'Agosto';
      case 9:
        return 'Setembro';
      case 10:
        return 'Outubro';
      case 11:
        return 'Novembro';
      default:
        return 'Dezembro';
    }
  }

  isLeapYear(): boolean {
    return this._year % 4 === 0;
  }

  compare(data: Data): number {
    const currentDateStr = `${this.year}-${this.month}-${this.day}`;
    const dateStr = `${data.year}-${data.month}-${data.day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }

  format(form: string): string {
    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 
      ? this.month.toString() 
      : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatting = form
      .replace('dd', day).replace('mm', month)
      .replace('M', this.getMonthName()).replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }
}