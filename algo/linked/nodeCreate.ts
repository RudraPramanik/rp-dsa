class node<T> {
  element: T;
  next: node<T> | null;
  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

class list<T> {
  head: node<T>;
  constructor() {
    this.head = new node<T>('head' as unknown as T); //initialize with head node
  }
  //find a node

  find(element: T): node<T> | null {
    let currentNode = this.head;
    while (currentNode !== currentNode.next && currentNode.element == element) {
      currentNode = currentNode.next!;
    }
    return currentNode;
  }
}
