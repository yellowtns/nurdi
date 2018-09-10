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


const goat = {
  dietType: 'herbivore',
  makeSound(){
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType)
  }
};

goat.diet(); // Prints undefined #Arrow Function and This
