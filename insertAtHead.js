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
  insertAtHead(value){
    const newNode= new Node(value)
    newNode.next=this.head;
     this.head = newNode;

  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}
const list = new linkList();
console.log(list)
list.insertAtHead(10);
list.insertAtHead(20);
list.insertAtHead(30);

list.printList();
