function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  let root = Math.sqrt(sq);
  if (Number.isInteger(root)) {
    return Math.pow(root + 1, 2);
  } else {
    return -1;
  }
}

// doTest
console.log(findNextSquare(121)); // 144
console.log(findNextSquare(114)); // -1
