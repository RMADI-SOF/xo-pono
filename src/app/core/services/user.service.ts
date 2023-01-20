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

  async connect(username: String, password: String): Promise<void>{
    this.username = username;
    this.password = password;
    this.connected = true;
  }

  async disconnect() : Promise<void>{
    this.username = "";
    this.password = "";
    this.connected = false;
  }

  get getUsername(){
    return this.username;
  }
}
