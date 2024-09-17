class node<T> {
  element: T;
  next: node<T> | null;
  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

class list {
  constructor() {
    this.head = new node('head'); //initialize with head node
  }
  //find a node
  find(element) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}
