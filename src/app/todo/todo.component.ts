import { Component, OnInit } from '@angular/core';
import { Todo } from './../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        task: 'fold clothes',
        completed: false,
      },
      {
        id: 2,
        task: 'put clothes in dresser',
        completed: false,
      },
      {
        id: 3,
        task: 'relax',
        completed: false,
      },
      {
        id: 4,
        task: 'try to pet cat',
        completed: true,
      },
      {
        id: 5,
        task: 'pet dog',
        completed: false,
      },
      {
        id: 6,
        task: 'be awesome',
        completed: false,
      },
    ];
  }
}
