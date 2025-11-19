const Node = (data = null, next = null) => {
  return {
    value: data,
    nextNode: next
  }
}

const SinglyLinkedList = (() => {
  let head = null
  let tail = null
  let size = 0

  const append = (value) => {
    let newNode = Node(value)

    if(!head) {
      head = newNode
      tail = newNode
    } else {
      tail.nextNode = newNode
      tail = newNode
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
    append,
    toString
  }
})()

SinglyLinkedList.append(1)
SinglyLinkedList.append(2)
SinglyLinkedList.append(3)
SinglyLinkedList.append(4)
// console.log(`Output: ${SinglyLinkedList.toString()}`)


const DoublyLinkedList = (() => {
  let head = null
  let tail = null
  let size = 0

  const append = (value) => {
    let newNode = Node(value)

    if(!head) {
      head = newNode
      tail = newNode
    } else {
      tail.nextNode = newNode
      tail = newNode
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
    append,
    toString
  }
})()




