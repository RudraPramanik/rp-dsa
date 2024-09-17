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
    const current = this.find(afterElement);
    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    } else console.log('node note found');
  }
  //Method to find the previous node
  findPrevious(element: T): node<T> {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}
