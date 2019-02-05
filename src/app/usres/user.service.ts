import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Users } from '../users';

import {Repos} from '../repos';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string;

  constructor(private _http: HttpClient){
    console.log('Userservice')
    this.username =""
  }
  getUser(){
    return this._http.get('https://api.github.com/users/' + this.username)
    .data(result => result);
  }
  updateUser(username:string){
this.username = username;
  }

}

