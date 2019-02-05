import { Component, OnInit } from "@angular/core";

import { UserService } from "../usres/user.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  submitSearch(name) {
    this.userService.getProfileInfo(name.target.value);
    this.repoService.getRepoInfo(name.target.value);
    this.userService.getProfileInfo(name.target.value);
    this.userService.getProfileInfo(name.target.value);
    this.userService.getProfileInfo(name.target.value);
  }
  constructor(
    private userService: UserService,
    private repoService: UserService
  ) {}
  ngOnInit() {}
}
