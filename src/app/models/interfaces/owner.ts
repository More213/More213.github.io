export class Owner {
  constructor(
    public firstName: string,
    public lastName: string,
    public endDate: string,
    public profits: number,
    public losses: number,
    public phone: number,
    public id: number,
  ) { }
}
export interface Owners {
  owners: Owner[];
}
