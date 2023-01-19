import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private username: String;
  private password: String;
  private connected : boolean = false;
  constructor() { }

  isConnected() : boolean {
    return this.connected;
  }

  connect(username: String, password: String){
    this.username = username;
    this.password = password;
    this.connected = true;
  }

  disconnect(){
    this.username = "";
    this.password = "";
    this.connected = false;
  }

  get getUsername(){
    return this.username;
  }
}
