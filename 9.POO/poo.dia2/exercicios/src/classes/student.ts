import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades?: number[];
  private _assignmentsGrades?: number[];

  constructor(name: string, test: number[], job: number[], date: Date) {
    super(name, date);
    this.enrollment = this.generateEnrollment();
    this.examsGrades = test;
    this.assignmentsGrades = job;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }

  set examsGrades(newValue: number[]) {
    if (newValue.length <= 4) {
      this._examsGrades = newValue;
    } else {
      console.log('ERROR');
    }
  }

  set assignmentsGrades(newValue: number[]) {
    if (newValue.length <= 2) {
      this._assignmentsGrades = newValue;
    } else {
      console.log('ERROR');
    }
  }

  get name(): string { return this.name }
  get enrollment(): string { return this._enrollment }
  get examsGrades(): number[] { return this._examsGrades || [] }
  get assignmentsGrades(): number[] { return this._assignmentsGrades || [] }

  scoresSum() {
    const testSum = this.examsGrades.reduce((acc, curr) => acc + curr, 0);
    const jobSum = this.assignmentsGrades.reduce((acc, curr) => acc + curr, 0);
    return testSum + jobSum;
  }

  average() {
    const sum = this.scoresSum();
    const average = sum / (this.examsGrades.length + this.assignmentsGrades.length);
    return average.toFixed(2);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}