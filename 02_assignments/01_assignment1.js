const Node = (data = null, next = null, prev = null) => {
  return {
    value: data,
    nextNode: next,
    prevNode: prev
  }
}

// ***** SINGLY LINKEDLIST *****
const SinglyLinkedList = (() => {
  let head = null
  let tail = null
  let size = 0

  const prepend = (value) => {
    head = Node(value, head) 
    size++
  }

  const append = (value) => {
    let newNode = Node(value)

    if(!head) {
      head = newNode
      tail = newNode
    } else {
      let current = head
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode

      // tail.nextNode = newNode
      // tail = newNode
    }
    size++
  }

  const toString = () =>{
    if (!head) return "null"

    let str = ""
    let current = head

    while (current) {
        str += `(${current.value}) -> `
        if(!current.nextNode) {
          str += `null`
        }
      current = current.nextNode
    }
    return str
  }

  return {
    prepend,
    append,
    toString
  }
})()

SinglyLinkedList.append(1)
SinglyLinkedList.append(2)
SinglyLinkedList.append(3)
SinglyLinkedList.append(4)
// console.log(`SinglyLinkedList Output: ${SinglyLinkedList.toString()}`)


// ***** DOUBLY LINKEDLIST *****
const DoublyLinkedList = (() => {
  let head = null
  let tail = null
  let size = 0

  const prepend = (value) => {
    head = Node(value, head) 
    size++
  }

  const append = (value) => {
    let newNode = Node(value)

    if(!head) {
      head = newNode
      tail = newNode
    } else {
      let current = head
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode

    }
    size++
  }

  const insertAt = (value, index) => {
    if(index > size && index > 0) return
    if (index === 0) {
      prepend(value)
      return 
    }
    
    let newNode = Node(value)
    let current = head
    let prev
    let count = 0

    while (count < index) {
      prev = current
      count++
      current = current.nextNode
    }
    newNode.nextNode = current
    prev.nextNode = newNode
    size++
  }

  const toString = () =>{
    if (!head) return "null"

    let str = ""
    let current = head
    while (current) {
        str += `(${current.value}) -> `
        if(!current.nextNode) {
          str += `null`
        }
      current = current.nextNode
    }
    return str
  }

  return {
    prepend,
    append,
    insertAt,
    toString
  }
})()

DoublyLinkedList.append(1)
DoublyLinkedList.append(2)
DoublyLinkedList.append(3)
DoublyLinkedList.insertAt(22, 0)
DoublyLinkedList.append(4)
DoublyLinkedList.insertAt("kyle", 1)
// console.log(`Doubly LinkedList Output: ${DoublyLinkedList.toString()}`)


// ***** CIRCULAR LINKEDLIST *****
const CircularLinkedList = (() => {
  let head = null
  let tail = null
  let size = 0

  const getHead = () => {
    if (!head) return null
    return head.value
  }

  const prepend = (value) => {
    let newNode = Node(value)

    if(!head) {
      head = newNode
      tail = newNode
      newNode = head
    } else {
      newNode.nextNode = head
      newNode.prevNode = tail
      head.prevNode = newNode
      tail.nextNode = newNode
      head = newNode

    }
    size++
  }

  const append = (value) => {
    let newNode = Node(value)

    if(!head) {
      head = newNode
      tail = newNode
      newNode.prevNode = head
    } else {
      newNode.prevNode = tail
      newNode.nextNode = head
      tail.nextNode = newNode
      head.prevNode = newNode
      tail = newNode
    }
    size++
  }

  const insertAt = (value, index) => {
    if(index > size && index > 0) return
    if (index === 0) {
      prepend(value)
      return 
    }
    
    let newNode = Node(value)
    let current = head
    let prev
    let count = 0

    while (count < index) {
      prev = current
      count++
      current = current.nextNode
    }
    newNode.nextNode = current
    newNode.prevNode = prev
    prev.nextNode = newNode
    current.prevNode = newNode
    size++
  }


  const traverseForward = () => {
    if (!head) return "null"
    let str = ""
    let current = head

    do {
      str += `${current.value} <-> ` 
      current = current.nextNode
    } while (current !== head)
      current = current.nextNode
      str += `(back to head) -> ${getHead()}`
    return str
  }

  const traverseBackward = () => {
    if (!head) return "null"
    let str = ""
    let current = tail

    str += current.value
    current = current.prevNode
    
    while (current !== tail) {
      str += ` <-> ${current.value}` 
      current = current.prevNode
    }
      str += ` <-> (back to head) -> ${getHead()}`
    return str
  }

  return {
    prepend,
    append,
    insertAt,
    traverseForward,
    traverseBackward
  }
})()


CircularLinkedList.append(1)
CircularLinkedList.append(2)
CircularLinkedList.append(3)
CircularLinkedList.insertAt(22, 1)
console.log(`CircularLinkedList Output: ${CircularLinkedList.traverseForward()}`)
console.log(`CircularLinkedList Output: ${CircularLinkedList.traverseBackward()}`)

// thank you so much po maam Godbless po!
