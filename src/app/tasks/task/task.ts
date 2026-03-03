import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskType} from './task.model';
import {Cardd} from '../../shared/cardd/cardd';
import {pipe} from 'rxjs';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [
    Cardd,
    DatePipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.scss',
  standalone: true,
})
export class Task {
  @Input() tasks!: TaskType;
  constructor(private tasksService: TasksService) {}

  completeTask() {
    this.tasksService.removeTask(this.tasks.id);
  }


  protected readonly pipe = pipe;
}
