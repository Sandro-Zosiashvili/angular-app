import {NgModule} from '@angular/core';
import {App} from './app';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {User} from './user/user';
import {Tasks} from './tasks/tasks';
import {BrowserModule} from '@angular/platform-browser';
import {Cardd} from './shared/cardd/cardd';
import {Task} from './tasks/task/task';
import {NewTask} from './tasks/new-task/new-task';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {TasksModule} from './tasks/tasks.module';


@NgModule({
  declarations: [App, HeaderComponent, User],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule,RouterOutlet, TasksModule],


})
export class AppModule {
}
