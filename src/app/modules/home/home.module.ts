import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './pages/home/home.component';
import { DialogComponent } from 'src/app/modules/home/components/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeRoutingModule } from './home-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    DialogComponent,
    BoardComponent,
    RegisterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HomeRoutingModule
  ],schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeModule { }
