import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserType} from './user.model';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
  standalone: true
})
export class User {
  @Input({required: true}) users!: UserType;
  @Input({required: true}) selected?: boolean;
  @Output() select = new EventEmitter();
  @Output() hello = new EventEmitter();


  get imagePath() {
    return `assets/images/${this.users.avatar}`;
  }


  onClick() {
    this.select.emit(this.users.id);
  }

  protected readonly onsubmit = onsubmit;
}
