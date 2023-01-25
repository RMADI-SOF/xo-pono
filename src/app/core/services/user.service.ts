import { Injectable } from '@angular/core';
import { LocalService } from './local.service';

@Injectable()
export class UserService {

  private username: string;
  private password: string;
  private connected : boolean = false;
  constructor(private local: LocalService) { }

  isConnected() : boolean {
    return this.connected;
  }

  async connect(username: string, password: string): Promise<void>{
    this.local.saveData('username', username);
    this.local.saveData('password', password);
    this.connected = true;
  }

  async disconnect() : Promise<void>{
    await this.local.removeData("username");
    await this.local.removeData("password");
    this.connected = false;
  }

  get getUsername(){
    return this.username;
  }
}
