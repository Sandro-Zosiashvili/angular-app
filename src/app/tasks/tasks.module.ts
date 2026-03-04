import {NgModule} from '@angular/core';
import {Task} from './task/task';
import {NewTask} from './new-task/new-task';
import {Tasks} from './tasks';
import {SharedModule} from '../shared/shared.module';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [Task, NewTask, Tasks],
  exports: [Tasks],
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}
