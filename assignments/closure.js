// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function smiteGame(gamemode, ranknumber) {
  const gametype = ['Ranked', 'Arena', 'Casuals', 'Clash', 'Smite Pro League'];

  //console.log(`Let's play some ${gametype[gamemode]}`)

  role(ranknumber);
  function role(ranknumber) {
    const roles = ['ADC', 'Support', 'Mid', 'Jungle', 'Solo']

    console.log(`I'll play ${roles[ranknumber]} in ${gametype[gamemode]}`)
  }
}

smiteGame(0, 1);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const counter = () => {
  let count = 0;
  return function () {
    count = count+1;
    return count;
  }
}

let newCounter = counter();
newCounter();
newCounter();
newCounter();

counter();
counter();
counter();

console.log(counter());
console.log(counter()());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
