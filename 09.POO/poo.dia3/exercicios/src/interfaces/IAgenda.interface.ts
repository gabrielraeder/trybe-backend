export default interface IAgenda<T> {
  protocol: string;
  data: Date;
  rules: T;
}