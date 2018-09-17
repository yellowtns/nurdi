const myDog = {
  name: 'Tadpole',
  breed: 'mutt',
  color: 'tan',
  weight: 32
}

let {name} = myDog;

//Using ES6's destructured assignment, we can use this syntax to create a variable name with a value of myDog's .name property

console.log(name);
//"Tadpole"
