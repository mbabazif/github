export class Users {
  constructor(
    public name: string,
    public location: string,
    public email: string,
    public public_repos: number,
    public followers: number,
    public following: number,
    public memberSince: Date
  ) {}
}
