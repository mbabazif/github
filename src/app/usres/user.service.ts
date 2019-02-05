import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "../users";

import { environment } from "../../environments/environment";
import { Repos } from "../repos";
import { NumberSymbol } from "@angular/common";

@Injectable({
  providedIn: "root" //we declare that this service should be created by the root application injector.
})
export class UserService {
  repos: Repos;
  users: Users;

  private username: string;
  items;
  constructor(private http: HttpClient) {
    this.username = "Florence";
    this.users = new Users(" ", " ", " ", 0, 0, new Date());
    this.repos = new Repos(" ");
  }
  getProfileInfo(username) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      email: string;
      location: string;
      public_repos: number;
      html_url: string;
      followers: number;
      following: number;
      memberSince: Date;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl + username + environment.apikey)
        .toPromise()
        .then(profile => {
          this.users.name = profile.name;
          this.users.location = profile.location;
          this.users.email = profile.email;
          this.users.followers = profile.followers;
          this.users.following = profile.following;

          this.users.memberSince = profile.memberSince;

          console.log(profile);
          resolve();
        });
    });
    return promise;
  }
  getRepoInfo(username) {
    interface ApiResponse {
      name: string;
      homepage: string;
      description: string;
      html_url: string;
      clone_url: string;
    }
    this.http
      .get<ApiResponse>(environment.apiUrl + username + environment.apiRepokey)
      .subscribe(response => {
        this.items = response;
      });
  }
}
