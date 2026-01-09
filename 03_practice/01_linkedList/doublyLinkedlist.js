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
        let newNode = Node(value)

        if (head == null) {
            tail = newNode
            head = newNode
            return
        }
        newNode.nextNode = head
        head.prevNode = newNode
        head = newNode
        size++
    }

    const append = (value) => {
        let newNode = Node(value)

        if (tail == null) {
            head = newNode
            tail = newNode
            return
        }
        newNode.prevNode = tail
        tail.nextNode = newNode
        tail = newNode
        size++
    }

    const insertAtMid = (value) => {
        if(size === 0) {
            append(value)
            return
        } else {
            let newNode = Node(value)
            let current = head
            let len = 0
            let positionBforMid = Math.floor((size - 1) / 2)

            while(len < positionBforMid) {
                len++
                current = current.nextNode
            }

            const nextNode = current.nextNode
            newNode.nextNode = nextNode
            newNode.prevNode = current
            current.nextNode = newNode

            if(nextNode){
                nextNode.prevNode = newNode
            } else {
                tail = newNode
            }
            size++
        }
    }


    const traverse = () => {
        let res = []
        let current = head
        while (current.nextNode) {
            res.push(current.value)
            current = current.nextNode
        }
        res.push(current.value)
        return res.join(', ')
    }

    return {
        prepend,
        append,
        traverse,
        insertAtMid
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