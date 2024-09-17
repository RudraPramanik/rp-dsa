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
    let currentElement = this.head;
    while (currentElement !== null && currentElement.element !== element) {
      currentElement = currentElement.next!;
    }
    return currentElement;
  }
  //method to insert new node
  insert(newElement: T, afterElement: T): void {
    const newNode = new node(newElement);
    const current = new node(afterElement);
    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    } else {
      console.log(`not found`);
    }
  }
}
