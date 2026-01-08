const Node = (data = null, next = null) => {
    return {
        value: data,
        nextNode: next
    }
}

const SinglyLinkedList  = (() => {
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
        head = newNode
        size++
    }

    const append =(value) => {
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

    const insertAtMid = (x) => {
        if(head == null) {
            return Node(x)
        } else {
            let newNode = Node(x)
            let current = head
            let len = 0

            while(current !== null) {
                len++
                current = current.nextNode
            }

            let mid = (len % 2 === 0) ? len / 2 : (len + 1) / 2

            current = head

            while (mid-- > 1) {
                current = current.nextNode
            }

            newNode.nextNode = current.nextNode
            current.nextNode = newNode
            return head
        }
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


    // const delLastNode = () => {
    //     if (!head) return null

    //     const deletedVal = tail.value
    //     if (head === tail) {
    //         head = null
    //         tail = null
    //         size--
    //         return deletedVal
    //     }
    //     let current = head
    //     while (current.nextNode !== tail) {
    //         current = current.nextNode
    //     }
    //     current.nextNode = null
    //     tail = current
    //     size--
    //     return deletedVal
    // }

    return {
        prepend,
        append,
        insertAtMid,
        traverse
        // delLastNode,
    }
})()

SinglyLinkedList.append(34)
SinglyLinkedList.append(9)
SinglyLinkedList.append(24)
SinglyLinkedList.append(90)
SinglyLinkedList.append(22)
console.log(`OUTPUT: ${SinglyLinkedList.traverse()}`)
SinglyLinkedList.insertAtMid(45)
console.log(`Updated OUTPUT: ${SinglyLinkedList.traverse()}`)
SinglyLinkedList.prepend(33)
console.log(`Updated OUTPUT: ${SinglyLinkedList.traverse()}`)