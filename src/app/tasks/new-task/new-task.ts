import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Dummy_Tasks} from '../../Dummy_Tasks';
import {NewTaskType} from './new-task.modal';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<NewTaskType>();
  @Input() userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';


  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    })
  }

}
