'use strict';

class LinkedList {
    constructor() {
        this.head = null;
    }
    addEnd(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
module.exports = LinkedList;