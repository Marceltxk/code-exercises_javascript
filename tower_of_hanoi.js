// Tower Hanoi
/*
Create a function that takes a number discs 
as an argument and returns the minimum amount
of steps needed to complete the game.
*/

function towerHanoi(n) {
  array_t1 = [];
  array_t2 = [];
  array_t3 = [];
  for (i = n; i > 0; i--) {
    array_t1.push(i);
  }
  array_t2.push(array_t1.pop());
  array_t3.push(array_t1.pop());
  array_t3.push(array_t2.pop());
  array_t2.push(array_t1.pop());
  array_t1.push(array_t3.pop());
  array_t2.push(array_t3.pop());
  array_t1.push(array_t2.pop());
  array_t3.push(array_t2.pop());
  array_t1.push(array_t2.pop());
  array_t1.push(array_t3.pop());
  array_t3.push(array_t2.pop());
  array_t2.push(array_t1.pop());
  array_t3.push(array_t1.pop());
  array_t3.push(array_t2.pop());
  console.log(array_t3);
}

towerHanoi(3);
