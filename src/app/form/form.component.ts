import { Component, OnInit } from "@angular/core";
import { UserService } from "../usres/user.service";
import { HttpClient } from "@angular/common/http";

// import "rxjs/add/operator/map";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  user: any = [];
  repos: any = [];
  username: string;
  constructor(private _userservice: UserService, private _http: HttpClient) {
    // this._userservice.getUser().subscribe(user => {
    //   console.log(user);
    //   this.user = user;
    // });
    this._http
      .get("https://api.github.com/users/" + this.username)
      .subscribe(repos => {
        this.repos = repos;
      });
  }
  ngOnInit() {}
  // searchUser() {
  //   this._userservice.updateUser(this.username);
  //   this._userservice.getUser().subscribe(user => {
  //     this.user = user;
  //   });

  // this._userservice.getRepos().subscribe(repos => {

  //   this.repos = repos;
  // });
  // }
  submitGoal(){
    this.addgithub.emit(this.newgithub);
}
}
