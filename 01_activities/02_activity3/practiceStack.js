class MyStack {
  constructor() {
    this.cap = 4;
    this.arr = new Array(this.cap);
    this.capacity = this.cap
    this.top = -1
  }

  // isFull
  isFull(){
    if(this.top == this.capacity - 1) {
      return true
    } else {
      return false
    }
  }

  // isEmpty
  isEmpty(){
    if(this.top === -1) {
      return true
    } else {
      return false
    }
  }

  // push
  push(val){
    if(this.isFull()) {
      console.log("Stack Overflow!")
    }
    this.top++
    this.arr[this.top] = val

  }

  // pop
  pop(){
    if(this.isEmpty()){
      console.log("Stack Underflow")
    } 
    this.top--
  }

  // peek
  peek(){
    if(this.isEmpty()){
      console.log("Stack Underflow")
    } 
    return this.arr[this.top] 
  } 

  // size
  size(){
    if(this.isEmpty()){
      console.log("Stack Underflow")
    } 
    return this.top + 1
  } 

  display(){
    return this.arr.slice(0, this.top + 1)
    // return this.arr
  }

}

let stackVar = new MyStack()
stackVar.push(1)
stackVar.push(2)
stackVar.push(23)
stackVar.push(3)
stackVar.push("kyle")
console.log(`OUTPUT: ${stackVar.display()}`)
stackVar.pop()
console.log(`OUTPUT: ${stackVar.display()}`)
console.log(`PEEK: ${stackVar.peek()}`)
console.log(`size: ${stackVar.size()}`)


