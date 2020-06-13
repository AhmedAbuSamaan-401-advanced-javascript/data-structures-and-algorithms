'use strict';

class AnimalShelter{
  constructor(){
    this.cats = [];
    this.dogs = [];
  }
  enqueue(animal){
    if( animal.type === 'cat' )
      this.cats.push(animal);
    else 
      this.dogs.push(animal);
    
  }
  dequeue(pref){
    if(pref === 'cat'){
      let cat = this.cats.shift();
      return cat;
    } else if(pref === 'dog'){
      let dog = this.dogs.shift();
      return dog;
    } else {
      return null;
    }
  }

} 
module.exports = AnimalShelter;