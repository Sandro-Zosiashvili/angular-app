import {Dummy_Tasks} from '../Dummy_Tasks';
import {NewTaskType} from './new-task/new-task.modal';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = Dummy_Tasks;

  constructor() {
    const tasks  =  localStorage.getItem('tasks')
    if(tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

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
    this.saveTasks()
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks()
  }

  filterTasks(userId: string) {
    return this.tasks.filter(t => t.userId === userId);
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }


}
