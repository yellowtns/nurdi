/*
Closure

The ability to treat functions as values, combined with the fact that local bindings are 
re-created every time a function is called, brings up an interesting question. 
What happens to local bindings when the function call that created them is no longer active?

The following code shows an example of this. It defines a function, wrapValue, 
that creates a local binding. It then returns a function that accesses and returns this local binding.

*/

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
