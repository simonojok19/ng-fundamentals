import { Injectable } from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  isAuth = false;
  loginUser(userName: string, password: string) {
    this.isAuth = !this.isAuth
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'Simon',
      lastName: 'Peter'
    };
  }
  isAuthenticated() {
    return this.isAuth;
  }
}
