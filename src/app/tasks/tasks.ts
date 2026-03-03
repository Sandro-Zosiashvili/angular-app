import {Component, computed, EventEmitter, input, Input, Output, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
// import {Task} from '../task/task';
import {Dummy_Tasks} from '../Dummy_Tasks';
import {NewTaskType} from './new-task/new-task.modal';
import {TasksService} from './tasks.service';
import {Task} from './task/task';
import {NewTask} from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
  standalone: true,
})
export class Tasks {
  constructor(private tasksService: TasksService) {}

  @Input() name?: string;
  @Input({required: true}) userId!: string;
  @Input({required: true}) value!: string;

  isAdding = signal(false);

  openTaskAdder() {
    this.isAdding.set(!this.isAdding())
  }
  get tasks() {
    return this.tasksService.getTasks();
  }

  onClickClose() {
    this.isAdding.set(false)
  }

  get filterTasks() {
    return this.tasksService.filterTasks(this.userId);
  }
}
