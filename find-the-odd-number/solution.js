function findOdd(A) {
  let counts = A.reduce((p, n) => ((p[n] = ++p[n] || 1), p), {});
  return +Object.keys(counts).find((k) => counts[k] % 2) || undefined;
}
