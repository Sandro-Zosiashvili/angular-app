import {Component, computed, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-users';
import {Tasks} from './tasks/tasks';
import {Dummy_Tasks} from './Dummy_Tasks';
import {Task} from './task/task';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  users = DUMMY_USERS;
  userId?: string;
  get selectedUser() {
    return this.users.find(u => u.id === this.userId);
  }

  selectUser(id: string) {
    this.userId = id
  }

  protected readonly title = signal('Sandro');
}
