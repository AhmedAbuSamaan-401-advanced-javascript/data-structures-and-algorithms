'use strict';

const LinkedList = require('./ll.js');
class Hashtable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size); 
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey; 
  }
  add(key, value) {
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.addEnd({ [key]: value });
      this.storage[hash] = ll; 
    } else {
      this.storage[hash].addEnd({ [key]: value });
    }
  }
//   get(key) {
//     let hash = this.hash(key);
//     if (this.storage[hash]) {
//       let ll = this.storage[hash].head;
//       if (ll.value[key]) {
//         return ll.value[key];
//     return null;
//   }

  contains(key) {
    let hash = this.hash(key);
    if (this.storage[hash]) {
      let ll = this.storage[hash].head;
      while (ll) {
        if (ll.value[key]) {
          return true;
        }
        ll = ll.next;
      }
    }
    return false;
  }
}
const hashtabl = new Hashtable(4000); 
hashtabl.add('name', 'Ahmed');
hashtabl.add('one', 'item');
hashtabl.add('eno', '1');
hashtabl.add('neo', '2');
hashtabl.add('this', 'empty');
console.log(hashtabl.hash('one'));
console.log(hashtabl.storage);
console.log(hashtabl.storage[3923].head,
     hashtabl.storage[2118].head.next);
module.exports = Hashtable;