import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {TodoList} from './TodoList';
import { HttpClient } from '@angular/common/http';
import {TODOLISTS} from './mock-List';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  listJsonObservable: Observable<TodoList[]>;

  getList(): Observable<TodoList[]> {
    return of(TODOLISTS);
  }
  fetchUsersFromJson(): Observable<TodoList[]> {
    this.listJsonObservable = this.http.get<TodoList[]>('./assets/defaultList.json');
    return this.listJsonObservable;
  }
}
