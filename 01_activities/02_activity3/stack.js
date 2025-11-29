class MyStack {
  constructor() {
    this.cap = 4;
    this.arr = new Array(this.cap);
    this.capacity = this.cap;
    this.top = -1;
  }

  // isFull -> to check if the array is full
  isFull(){
    if(this.top === this.capacity - 1) {
      return true
    } else {
      return false
    }
  }

  // isEmpty -> checking if the array is empty
  isEmpty() {
    if(this.top === -1) {
      return true
    } else {
      return false
    }
  }

  // push -> adding value to array stack
  push(val){
    if(this.isFull()){
      console.log("StackOverflow!");
    }
    this.top++
    this.arr[this.top]= ` ${val}`
  }

  // pop -> removing the top value in the array/stack 
  pop(){
    if(this.isEmpty()) {
      console.log("Stack Underflow!")
    }
    const popVal = this.arr[this.top]
    this.arr[this.top] = undefined
    this.top--
    return popVal

  }

  // peek -> returning the top value in the array/stack
  peek(){
    if(this.isEmpty()) {
      console.log("Stack Underflow!")
    }
    return this.arr[this.top]
  }

  // size - checking the size of the array/stack
  size() {
    if(this.isEmpty()) {
      console.log("Stack Underflow!")
    }
    return this.top + 1
  }

  // displaying array values
  displayArr() {
    return this.arr.slice(0, this.top + 1)
  }

}

let stackVar = new MyStack();
stackVar.push(3)
stackVar.push(4)
stackVar.push(11)
stackVar.push(46)
console.log(`Array Output   : ${stackVar.displayArr()}`)
console.log(`Top Element    : ${stackVar.peek()}`)
console.log(`Array Size     : ${stackVar.size()}`)
console.log(`Is Full        : ${stackVar.isFull()}`)
console.log(`Is Empty       : ${stackVar.isEmpty()}`)
console.log(`Popped Element : ${stackVar.pop()}`)
console.log(`Array Output   : ${stackVar.displayArr()}`)
console.log(`Top Element    : ${stackVar.peek()}`)
console.log(`Array Size     : ${stackVar.size()}`)
