class Queue {
  constructor(){
    this.cap = 4;
    this.limit = this.cap;
    this.array = new Array(this.cap);
    this.front = -1;
    this.rear = -1;
  }

  isEmpty(){
    if(this.rear == -1 && this.front == -1) {
      return true
    } else {
      return false
    }
  }

  isFull(){
    if(this.rear == this.limit - 1) {
      return true
    } else {
      return false
    }
  }

  enqueue(value){ 
    if (this.isFull()){
      console.log(`Full Queue`)
    }
    else if(this.isEmpty()){
      this.front = 0;
      this.rear = 0;

      this.array[this.rear] = value
      console.log(`Enqueued Value: ${value}`);
    } else {
    this.rear += 1
    this.array[this.rear] = value
    console.log(`Enqueued Value: ${value}`);
    }
  }

  dequeue(){
    if(this.isEmpty()){
      console.log(`Empty Queue`)
      return 
    }

    let data = this.array[this.front]
    this.array[this.front] = "None"
    this.front += 1

    if(this.front > this.rear) {
      this.front = -1
      this.rear = -1
    }
    console.log(`Dequeued Value: ${data}`)
  }

  peek(){
    return this.array[this.front]
  }
}

let myQueue = new Queue()
myQueue.enqueue("K")
myQueue.enqueue("Y") 
myQueue.enqueue("L")
myQueue.enqueue("E")
myQueue.dequeue()
// myQueue.enqueue("S")
console.log(`Array: ${myQueue.array}`)
console.log(`Is empty: ${myQueue.isEmpty()}`)
console.log(`Is Full: ${myQueue.isFull()}`)
console.log(`Peek Value: ${myQueue.peek()}`)

