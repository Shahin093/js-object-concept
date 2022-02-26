const bottle = { color: 'yellow', hold: 'water', price: 50, isClean: true };
// getting all properties name 
const keys = Object.keys(bottle);
// console.log(keys);
// geting all values 
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
delete bottle.isClean;
console.log(bottle);
