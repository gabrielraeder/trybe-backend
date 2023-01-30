export default class Student {
  private _name: string;
  private _registration: string;
  private _testScores?: number[];
  private _jobScores?: number[];

  constructor(name: string, registration: string, test: number[], job: number[]) {
    this._name = name;
    this._registration = registration;
    this.testScores = test;
    this.jobScores = job;
  }

  set testScores(newValue: number[]) {
    if (newValue.length === 4) {
      this._testScores = newValue;
    } else {
      console.log('ERROR');
    }
  }

  set jobScores(newValue: number[]) {
    if (newValue.length === 2) {
      this._jobScores = newValue;
    } else {
      console.log('ERROR');
    }
  }

  get name(): string { return this._name }
  get registration(): string { return this._registration }
  get testScores(): number[] { return this._testScores || [] }
  get jobScores(): number[] { return this._jobScores || [] }

  scoresSum() {
    const testSum = this.testScores.reduce((acc, curr) => acc + curr, 0);
    const jobSum = this.jobScores.reduce((acc, curr) => acc + curr, 0);
    return testSum + jobSum;
  }

  average() {
    const sum = this.scoresSum();
    const average = sum / (this.testScores.length + this.jobScores.length);
    return average.toFixed(2);
  }
}