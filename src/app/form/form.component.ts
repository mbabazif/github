import { Component, OnInit } from "@angular/core";

import { UserService } from "../usres/user.service";
import { Users } from "../users";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  username = "";
  users: Users;
  submitSearch(name) {
    console.log(this.username);
    this.userService.getProfileInfo(this.username);
    this.repoService.getRepoInfo(this.username);
    this.userService.getProfileInfo(this.username);
    this.userService.getProfileInfo(this.username);
    this.userService.getProfileInfo(this.username);
  }
  constructor(
    private userService: UserService,
    private repoService: UserService
  ) {
    this.users = this.userService.users;
  }
  ngOnInit() {
    console.log(this.users);
  }
}
