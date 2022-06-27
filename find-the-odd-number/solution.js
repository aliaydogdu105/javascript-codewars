function findOdd(A) {
  let counts = A.reduce((p, n) => ((p[n] = ++p[n] || 1), p), {});
  return +Object.keys(counts).find((k) => counts[k] % 2) || undefined;
}

let doTest = (20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5);
console.log(doTest); // 5 is odd(3 pieces), others are even