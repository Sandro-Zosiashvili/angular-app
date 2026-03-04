import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Dummy_Tasks} from '../../Dummy_Tasks';
import {NewTaskType} from './new-task.modal';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
  standalone: false,
})
export class NewTask {
  constructor(private tasksService: TasksService) {}

  @Output() close = new EventEmitter();
  @Input() userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';



  onClose() {
    this.close.emit();
  }

  onSubmit() {
    console.log(this.userId)
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId)
    this.close.emit();
  }

}
