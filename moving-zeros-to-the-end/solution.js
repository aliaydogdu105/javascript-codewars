function moveZeros(arr) {
  const zeros = arr.filter((x) => x === 0).length;
  const result = arr.filter((x) => x !== 0);

  for (let i = 0; i < zeros; i += 1) {
    result.push(0);
  }

  return result;
}

//doTest

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns [false,1,1,2,1,3,"a",0,0]
