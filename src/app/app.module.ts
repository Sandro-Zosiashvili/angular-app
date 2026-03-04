import {NgModule} from '@angular/core';
import {App} from './app';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {User} from './user/user';
import {Tasks} from './tasks/tasks';
import {BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [BrowserModule, RouterOutlet, HeaderComponent, User, Tasks],

})
export class AppModule { }
