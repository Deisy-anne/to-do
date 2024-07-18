export class Tasks {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly cohabitant: string,
    readonly housePlace: string,
    readonly date: Date,
  ) {}
}
