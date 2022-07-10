const snail = function (array) {
  const turn = [];

  while (array.length) {
    turn.push(...array.shift(), ...array.map((row) => row.pop()));

    array.reverse().map((row) => row.reverse());
  }

  return turn;
};

array = [
  [1, 2, 3,],
  [4, 5, 6,],
  [7, 8, 9,],
];

console.log(snail(array)); // snail(array) #=> [1,2,3,6,9,8,7,4,5]
