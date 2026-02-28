import {Dummy_Tasks} from '../Dummy_Tasks';
import {NewTaskType} from './new-task/new-task.modal';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = Dummy_Tasks;

  getTasks() {
    return this.tasks;
  }
  getTask(id: string) {
    return this.tasks.find(t => t.id === id);
  }


  addTask(newTask: NewTaskType, userId: string) {
    this.tasks.unshift({
        id: Date.now().toString(),
        userId: userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
      }
    )
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }


}
