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

    const prepend = (val) => {
        const newNode = Node(val)

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

    const append = (val) => {
        let newNode = Node(val)

        if(tail == null) {
            head = newNode
            tail = newNode
            return 
        }

        newNode.prevNode = tail
        tail.nextNode = newNode
        tail = newNode
        size++
    }

    const traverse = () => {
        let res = []
        let current = head
        while(current.nextNode) {
            res.push(current.value)
            current = current.nextNode
        }
        res.push(current.value)
        return res.join(', ')
    }

    const removeTail = () => {
        tail = tail.prevNode
        tail.nextNode = null
        size--
    }

    return {
        append,
        prepend,
        traverse,
        removeTail
    }
})()

DoublyLinkedList.append(1)
DoublyLinkedList.append(2)
DoublyLinkedList.append(3)
console.log(`OUPUT: ${DoublyLinkedList.traverse()}`)
DoublyLinkedList.prepend(78)
console.log(`UPDATED OUPUT: ${DoublyLinkedList.traverse()}`)
DoublyLinkedList.removeTail()
console.log(`UPDATED OUPUT: ${DoublyLinkedList.traverse()}`)