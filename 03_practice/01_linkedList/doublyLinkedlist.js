const Node = (data = null, next = null, prev = null) => {
    return {
        value: data,
        nextNode: next,
        prevNode: prev
    }
}

const DoublyLinkedList = (() => {
    let head = null
    let tail = null
    let size = 0

    const prepend = (value) => {
        const newNode = Node(value)

        if(head == null) {
            tail = newNode
            head = newNode
            return 
        }

        newNode.nextNode = head
        head.prevNode = newNode
        head = newNode
        size++

    }


    return {
        prepend,
        append,
        insertAtMid,
        traverse
    }
})()

DoublyLinkedList.append(1)
DoublyLinkedList.append(2)
DoublyLinkedList.append(3)
console.log(`OUPUT: ${DoublyLinkedList.traverse()}`)
DoublyLinkedList.prepend(9)
console.log(`UPDATED OUPUT: ${DoublyLinkedList.traverse()}`)
DoublyLinkedList.insertAtMid(76)
console.log(`UPDATED OUPUT: ${DoublyLinkedList.traverse()}`)