class node<T> {
  element: T; // Stores the data of the node
  next: node<T> | null; // Points to the next node in the list or null if it's the last node

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}
