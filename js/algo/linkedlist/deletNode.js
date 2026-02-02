// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to delete the given node
function deleteNode(node) {
  if (node === null || node.next === null) {
    throw new Error('The node to be deleted cannot be null or the last node.');
  }

  // Copy the data from the next node to the current node
  node.data = node.next.data;

  // Delete the next node by skipping it in the list
  node.next = node.next.next;
}

// Helper function to print the linked list
function printList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

// Example usage
const head = new Node(4);
head.next = new Node(5);
head.next.next = new Node(1);
head.next.next.next = new Node(9);

console.log('List before deletion:');
printList(head); // Output: 4, 5, 1, 9

// Assume we want to delete the node with value 5
deleteNode(head.next);

console.log('List after deletion:');
printList(head); // Output: 4, 1, 9
