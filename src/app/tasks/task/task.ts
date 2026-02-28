import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskType} from './task.model';
import {Cardd} from '../../shared/cardd/cardd';
import {pipe} from 'rxjs';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [
    Cardd,
    DatePipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input() tasks!: TaskType;
  @Output() complete = new EventEmitter();

  completeTask() {
    this.complete.emit(this.tasks.id);
  }


  protected readonly pipe = pipe;
}
