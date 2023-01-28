class Node {
    constructor(ele, next, prev) {
        this.ele = ele;
        this.next = (next === undefined ? null : next);
        this.prev = (prev === undefined ? null : prev);
    }
}

class SingleLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.size = 1;
    }
    insertAt(ele, index) {
        if (index < 0 || index > this.size) {
            return console.log9('Please enter a valid index');
        }
        else {
            var node = new Node(ele);
            var curr, prev;
            curr = this.head;
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                curr = this.head;
                var it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
        }
        this.size++;
    }
    removeElement(toFind) {
        var current = this.head;
        var prev = null;
        while (current != null) {
            if (current.ele == toFind) {
                if (prev == null) {
                    this.head = current.next;
                }
                else {
                    prev.next = current.next;
                }
                this.size--;
                return current.ele;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    isEmpty() {
        return this.size == 0;
    }
    searchEle(toFind) {
        var current = this.head;
        while (current !== null) {
            if (current.ele == toFind) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    length() {
        return this.size;
    }
    printList() {
        let array = ["head"];
        let currentList = this.head;
        while (currentList !== null) {
            array.push(currentList.ele);
            currentList = currentList.next;
        }
        array.push("null");
        console.log(array.join("-->"));
        return
    }
    append(ele) {
        const newNode = new Node(ele);
        var current;
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    print() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.ele);
            temp = temp.next;
        }
    }
    getElementIndex() {

    }
}

const list = new SingleLinkedList(5);

list.append(10)
list.append(20)
list.append(40)
list.insertAt(30, 3)
list.printList()
// console.log(list.removeElement(5));
list.printList()
console.log(list.searchEle(200))