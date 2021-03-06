import { Injectable } from '@angular/core';
import { IUser } from "./user-model";

@Injectable()
export class AuthService {

  constructor() { }

  currentUser : IUser
  loginUser(userName : string, password : string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: userName,
      lastName: password
    }
  }

  isAuthenticated(){
    return !!this.currentUser
  }

  updateCurrentUser(firstName: string, lastName:string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

}
