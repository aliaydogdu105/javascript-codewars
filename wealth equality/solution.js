function redistributeWealth(wealth) {
  const average = wealth.reduce((a, b) => a + b) / wealth.length;

  wealth.forEach((citizen, i) => (wealth[i] = average));
}

let doTest = [5, 6, 7];

redistributeWealth(doTest);
console.log(doTest); // [6, 6, 6]
