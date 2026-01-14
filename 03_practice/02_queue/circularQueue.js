class Queue {
    constructor(){
        this.cap = 4
        this.limit = this.cap
        this.array = new Array(this.cap)
        this.front = -1 
        this.rear = -1
    }

    isEmpty(){
        if(this.front == -1 && this.rear == -1){
            return true
        } else {
            return false
        }
    }

    isFull(){
        if((this.rear + 1) % this.cap == this.front){
            return true
        } else {
            return false
        }
    }

    enqueue(value){
        if(this.isFull()){
            console.log("full queue");
        } else if(this.isEmpty()){
            this.front = 0
            this.rear = 0
            this.array[this.rear] = value
        } else {
            this.rear = (this.rear + 1) % this.cap
            this.array[this.rear] = value
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("empty equeue");
            return
        }
        this.array[this.front] = "None"
        this.front = (this.front + 1) % this.cap

        if(this.front = (this.front + 1) % this.cap){
            this.front = -1
            this.rear = -1
        } 
    }

    peak(){
        return this.array[this.front]
    }

}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.dequeue();
myQueue.dequeue();
myQueue.enqueue(5);

console.log(`Array: ${myQueue.array}`);
console.log(`isEmpty: ${myQueue.isEmpty()}`);
console.log(`isFull: ${myQueue.isFull()}`);
console.log(`peek: ${myQueue.peak()}`);