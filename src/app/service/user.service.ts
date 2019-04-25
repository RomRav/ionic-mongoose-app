//Class userService stock les informations utilisateur loger
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = {
    userName: 'Anonymous',
    password: null,
    loggin: ''
  }
  constructor() { }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
}

