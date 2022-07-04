function removeNb(n) {
  let sum = (n * (n + 1)) / 2;
  let result = [];
  for (let a = 1; a < n; a++) {
    if ((sum - a) % (a + 1) === 0) {
      let b = (sum - a) / (a + 1);
      if (b < n) result.push([a, b]);
    }
  }
  return result;
}

console.log(removeNb(26)); //return [[15, 21], [21, 15]]
