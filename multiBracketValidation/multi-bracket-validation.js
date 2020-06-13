class List {
    constructor() {
      this.length = 0;
    }
  
    push(thing) {
      this[this.length++] = thing;
      return this.length;
    }
  
    pop() {
      let lastThing = this[this.length -1];
      if(this.length === 0) {
        return undefined;
      } else {
        delete (this[this.length -1]);
        this.length --;
        return lastThing;
      }
    }
    peek() {
      return this[this.length -1];
    }
  }
  
  function multiBracketValidation(string) {
    const stack = new List;
    const openers = ['(','{', '['];
    const closers = {
      '(' : ')',
      '{' : '}',
      '[' : ']',
    };
  //console.log(string);
    for(let char of string){
      if(openers.includes(char)) {
        stack.push(char);
      } else if (Object.keys(closers).includes(char)) {
        console.log(closers.char);
        if(stack.length === 0) {
          return false;
        } else if (stack.peek() !== closers.char) {
          return stack.peek();
          return false;
        } else {
          console.log(stack);
          stack.pop();
        }
      }
      
    }
    if(stack.length === 0) {
      console.log(stack);
      return true;
    }
  };
  multiBracketValidation("{}[]");