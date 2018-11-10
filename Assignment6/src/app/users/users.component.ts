import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {TodoList} from '../TodoList';
import {TODOLISTS} from '../mock-List';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  todoList: Array<TodoList> = [TODOLISTS[0], TODOLISTS[1], TODOLISTS[2]];
  user: User = {
    name : 'ZY',
    list : this.todoList,
  };
  newList: TodoList = {
    title: '',
    todo: ['default'],
    author: '',
    date: '11/11/2018',
    tempNewTodo: '',
  };

  constructor() { }

  ngOnInit() {
  }
  addNewList(): void {
    this.todoList.push(this.newList);
    this.newList.title = '';
    this.newList.author = '';
  }
  addNewItem(list: TodoList): void {
    list.todo.push(list.tempNewTodo);
    list.tempNewTodo = '';
  }
  delete(list: TodoList, item: string): void {
    const i: number = list.todo.indexOf(item);
    list.todo.splice(i, 1);
  }
}
