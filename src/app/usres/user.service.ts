import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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


}

