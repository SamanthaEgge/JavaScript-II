// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Gum', 'Pencil', 'Notebook', 'yo-yo', 'Gum'];


/*
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/

//// Number 1
function getLength(arr, callback) {
  const lengthItems = arr.length;
  callback(lengthItems);
}

getLength(items, function(length) {
  console.log('Length', length);
})


//// Number 2
function last(arr, callback) {
  const lastItem = arr[arr.length -1];
  callback(lastItem);
}

last(items, function(last) {
  console.log('Last item is', last);
})


////Number 3
function sumNums(x, y, callback) {
  const addNumbers = x + y;
  callback(addNumbers);
}

sumNums(9, 4, function(add) {
  console.log('9 + 4 is', add)
})


////Number 4
function multiplyNums(x, y, callback) {
  const multiplyNums = x * y;
  callback(multiplyNums);
}

multiplyNums(7, 8, function(multiply) {
  console.log('7 times 8 is', multiply);
})


////Number 5
function contains(item, list, callback) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
    if (list.includes(item)) {
      return callback(true)
    }
    else {
      return callback(false)
    }
}

contains('Gum', items, function(thing){
  console.log('This is', thing)
})

/* STRETCH PROBLEM */

function removeDuplicates(array, callback) {
  let modifiedArray = [];
  let sortedArray = array.sort();
  for (i = 0; i < array.length; i++) {
    if (array[i] !== array[i-1]) {
      modifiedArray.push(array[i])
    }
    else continue
  }

  callback(modifiedArray);
}

function printCallback (modifiedArray) {
  console.log(modifiedArray);
}

removeDuplicates(items, printCallback);

//let sortedArray = items.sort();
// console.log(sortedArray);