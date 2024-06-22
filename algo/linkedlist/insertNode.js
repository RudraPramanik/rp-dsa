// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to insert a node at the beginning
  insertAtBeginning(data) {
    // Create a new node with the given data
    // Make the new node's next pointer point to the current head
    // Make the new node the head of the linked list

    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Method to print the linked list
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage
const list = new LinkedList();
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);

list.printList(); // Output: 30, 20, 10
