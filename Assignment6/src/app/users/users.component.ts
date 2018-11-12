import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {TodoList} from '../TodoList';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  todoList:  TodoList[];
  json: any;
  user: User;
  newList: TodoList = {
    title: '',
    todo: ['default'],
    author: '',
    date: '11/11/2018',
    tempNewTodo: '',
  };
  usernewList: TodoList = {
    title: '',
    todo: ['default'],
    author: '',
    date: '11/11/2018',
    tempNewTodo: '',
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getList();
    this.user = {
      name : 'ZY',
      list : this.todoList,
    };
  }
  addNewList(): void {
    const newuserList: TodoList = new TodoList();
    newuserList.title = this.newList.title.valueOf();
    newuserList.author = this.newList.author.valueOf();
    newuserList.date = '11/20/2018';
    newuserList.tempNewTodo = '';
    newuserList.todo = this.newList.todo;
    this.user.list.push(newuserList);
  }
  addNewItem(list: TodoList): void {
    list.todo.push(list.tempNewTodo);
    list.tempNewTodo = '';
  }
  delete(list: TodoList, item: string): void {
    const i: number = list.todo.indexOf(item);
    list.todo.splice(i, 1);
  }
  getList(): void {
    this.userService.fetchUsersFromJson().subscribe(todoList => this.user.list = todoList);
    // this.userService.getList().subscribe(tosoList => this.todoList = tosoList);
  }
}
