class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class linkList {
  constructor() {
    this.head = null;
  }
  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  sum() {
    let current = this.head;
    let result = 0;
    while (current) {
      result += current.value;
      current = current.next;
    }
    console.log("the sum =",result);
  }
}
const list = new linkList();
list.insertAtHead(10);
list.insertAtHead(20);
list.insertAtHead(30);
list.sum();
