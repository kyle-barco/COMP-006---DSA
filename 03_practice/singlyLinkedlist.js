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

        if (!head) {
            head = newNode
            tail = newNode
        } else {
            tail.nextNode = newNode
            tail = newNode
        }
        size++
    }

    const delLastNode = () => {
        if(!head) return null        

        let deletedVal = tail.value
        if(head == tail) {
            head = null
            tail == null
            size--
            return deletedVal
        } 
        let current = head
        while (current.nextNode !== tail) {
            current = current.nextNode
        }
        current.nextNode = null
        tail = current
        size--
        return deletedVal
    }

    const toPrint = () => {
        if(!head) return "null"

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
        delLastNode,
        toPrint
    }

})()

SinglyLinkedList.append(34)
SinglyLinkedList.append(9)
SinglyLinkedList.append(24)
SinglyLinkedList.append(90)
console.log(`OUTPUT: ${SinglyLinkedList.toPrint()}`)
SinglyLinkedList.delLastNode()
console.log(`UPDATED OUTPUT: ${SinglyLinkedList.toPrint()}`)