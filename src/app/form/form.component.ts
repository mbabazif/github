import { Component, OnInit } from "@angular/core";
import { UserService } from "../usres/user.service";
import 'rxjs/add/operator/map';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  user: any = [];
  repos: any = [];
  username: string;
  constructor(private _userservice: UserService) {
    this._userservice.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this._userservice.getRepos().subscribe(repos => {
      
      this.repos = repos;
    });
  }
  ngOnInit() {}
  searchUser() {
    this._userservice.updateUser(this.username);
    this._userservice.getUser().subscribe(user => {
      this.user = user;
    });
    
    this._userservice.getRepos().subscribe(repos => {
      
      this.repos = repos;
    });
  }
}
