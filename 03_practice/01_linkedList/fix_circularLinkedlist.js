const Node = (data = null, next = null) => ({
    value: data,
    nextNode: next
});

const CircularLinkedList = (() => {
    let head = null;
    let tail = null;

    const prepend = (value) => {
        const newNode = Node(value);

        if (head === null) {
            head = newNode;
            tail = newNode;
            tail.nextNode = head;    
            return;
        }

        newNode.nextNode = head;
        head = newNode;
        tail.nextNode = head;        
    };

    const append = (value) => {
        const newNode = Node(value);

        if (tail === null) {
            head = newNode;
            tail = newNode;
            tail.nextNode = head;
            return;
        }

        tail.nextNode = newNode;
        tail = newNode;
        tail.nextNode = head;        
    };

    const insertAtMid = (value) => {
        if (head === null) {
            append(value);
            return;
        }

        let current = head;
        let len = 0;
        do {
            len++;
            current = current.nextNode;
        } while (current !== head);

        let pos = Math.floor(len / 2);
        current = head;
        while (pos-- > 0) {
            current = current.nextNode;
        }

        const newNode = Node(value);
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;

        if (current === tail) {
            tail = newNode;
        }
    };

    const traverse = () => {
        const res = [];
        let current = head;

        do {
            res.push(current.value);
            current = current.nextNode;
        } while (current !== head);

        return res.join(", ") + `, ${head.value}`;
    };

    return {
        prepend,
        append,
        insertAtMid,
        traverse
    };
})();

CircularLinkedList.append(34);
CircularLinkedList.append(9);
CircularLinkedList.append(24);
CircularLinkedList.append(90);
console.log("OUPUT: ", CircularLinkedList.traverse());;
CircularLinkedList.insertAtMid(77);
console.log("UPDATE OUTPUT: ", CircularLinkedList.traverse());
CircularLinkedList.prepend(99);
console.log("UPDATE OUTPUT: ", CircularLinkedList.traverse());