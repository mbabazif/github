export class Users {
  constructor(
    public name: string,
    public location: string,
    public email: string,
    public followers: number,
    public following: number,
    public memberSince: Date
  ) {}
}
