export class Owner {
  constructor(
    public firstName: string,
    public lastName: string,
    public endDate: string,
    public profits: string,
    public losses: string,
    public phone: string,
    public id: number,
  ) { }
}
export interface Owners {
  owners: Owner[];
}
