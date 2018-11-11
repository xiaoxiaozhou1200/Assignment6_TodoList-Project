import { Injectable } from '@angular/core';
import { TODOLISTS } from './mock-List';
import {Observable, of} from 'rxjs';
import {TodoList} from './TodoList';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getList(): Observable<TodoList[]> {
    return of(TODOLISTS);
  }
}
