export class User {
  name: string;
  list: TodoList[];
}
class TodoList {
  title: string;
  todo: string[];
  author: string;
  date: string;
}
