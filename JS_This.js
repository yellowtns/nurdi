  // THIS 
  const goat = {
    dietType: 'herbivore',
    makeSound(){
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType)
    }
  };

  goat.diet(); // Print Herbivore
/*
The this keyword references the calling object which provides access to the calling object's properties.
In the example above, the calling object is goat and by using this we're accessing the goat object itself,
and then the dietType property of goat by using property dot notation. 
*/


const goat = {
  dietType: 'herbivore',
  makeSound(){
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType)
  }
};

goat.diet(); // Prints undefined
/* 
Arrow functions inherently bind, or tie, an already defined this value to the function itself
that is NOT the calling object. In the code snippet above, the value of this is the global object,
or an object that exists in the global scope, which doesn't have a dietType property and therefore returns undefined
*/
