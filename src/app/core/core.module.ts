import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  exports:[],
  imports: [
    CommonModule
  ],
  providers: [UserService]
})
export class CoreModule { }
