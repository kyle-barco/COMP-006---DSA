class Queue {
  constructor(){
    this.cap = 4;
    this.limit = this.cap;
    this.array = new Array(this.cap);
    this.front = -1;
    this.rear = -1;
  }

  // isEmpty
  isEmpty(){
    if(this.rear == -1 && this.front == -1) {
      return true
    } else {
      return false
    }
  }

  // isFull
  isFull(){
    if(this.rear == this.limit - 1) {
      return true
    } else {
      return false
    }
  }

  // enqueue
  enqueue(value){
    // check if its full
    if (this.isFull()){
      console.log(`Full Queue`)
    }
    // check if its empty
    else if(this.isEmpty()){
      // set front and rear to 0
      this.front = 0;
      this.rear = 0;

      // assign the passed VALUE in index of the array using rear
      this.array[this.rear] = value
      console.log(`Enqueued Value: ${value}`);
    } else {
    // else increment rear
    this.rear += 1
    this.array[this.rear] = value
    console.log(`Enqueued Value: ${value}`);
    }


  }

  // dequeue
  dequeue(){
    // check if its empty then return 
    if(this.isEmpty()){
      console.log(`Empty Queue`)
      return 
    }

    // assign data using the array index of front
    let data = this.array[this.front]

    // set the dequeue array index to null
    this.array[this.front] = "None"

    // increment front to 1
    this.front += 1

    // if front is greater than rear, reset
    if(this.front > this.rear) {
      this.front = -1
      this.rear = -1
    }
    console.log(`Dequeued Value: ${data}`)
  }
  // peek
  peek(){
    // return the front of the array
    return this.array[this.front]
  }
}

let myQueue = new Queue()

myQueue.enqueue("K")
myQueue.enqueue("Y") 
myQueue.enqueue("L")
myQueue.enqueue("E")
myQueue.dequeue()
myQueue.enqueue("S")

console.log(`Array: ${myQueue.array}`)
console.log(`Is empty: ${myQueue.isEmpty()}`)
console.log(`Is Full: ${myQueue.isFull()}`)
console.log(`Peek Value: ${myQueue.peek()}`)

