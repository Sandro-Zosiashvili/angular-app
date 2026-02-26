import {Component, computed, EventEmitter, input, Input, Output, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
// import {Task} from '../task/task';
import {Dummy_Tasks} from '../Dummy_Tasks';
import {Task} from '../task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
  standalone: true
})
export class Tasks {
  @Input() name?: string;
  @Input({required: true}) userId!: string;
  @Input({required: true}) value!: string;
  tasks = Dummy_Tasks;

  onCLickTask = signal(false);

  openTaskAdder() {
    this.onCLickTask.set(!this.onCLickTask())

  }
  onInput(e: Event) {
     this.value  = (e.target as HTMLInputElement).value;
    console.log(this.value);
  }
  addTask(input: HTMLInputElement) {
    this.tasks.push({
      id: Date.now().toString(),
      userId: this.userId,
      title: 'New Task',
      summary: this.value,
      dueDate: '2021-01-01'
    })
    this.value = '';
    input.value = '';
  }

   CompleteTask (id: string) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }


  get filterTasks() {
    return this.tasks.filter(t => t.userId === this.userId);
  }
}
