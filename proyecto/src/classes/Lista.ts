import { stringify } from "querystring";

class Nodo<T> {

  data: T;
  next: Nodo<T>;

  constructor(data?: T) {
    this.data = data;
  }

}

class Lista<T> {

  head: Nodo<T>;
  size: number;

  constructor() {
    this.size = 0;
  }

  add(data: T): void {

    if(!this.head) {
      this.head = new Nodo<T>(data);
      this.size++;
      return;
    }

    let current: Nodo<T> = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = new Nodo(data);
    this.size++;
  }

  delete(cb: (data: T) => boolean): void {

    if(!this.head) return;

    if(cb(this.head.data)) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current: Nodo<T> = this.head;
    while(current.next) {
      if(cb(current.next.data)) {
        current.next = current.next.next;
        this.size--
        return;
      }
      current = current.next;
    }
  }
}