/*
Create a function that takes an
array of numbers and return "Boom!"
if the digit 7 appears in the array. 
Otherwise, return "there is no 7 in 
the array".
 */

//sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

var sevenBoom = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 7) {
      var has7 = true;
    }
  }
  return has7 ? "Boom" : "there is no 7 in the array";
};

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
