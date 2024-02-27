var countTrue = function (array) {
  var i_true = 0;
  for (let i in array) {
    if (array[i] == true) {
      i_true++;
    }
  }
  return i_true;
};

console.log(countTrue([true, true, false]));
