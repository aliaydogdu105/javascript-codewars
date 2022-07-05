function cleanString(s) {
  let result = [];
  s.split("").map((e) => {
    if (e === "#") {
      result.pop();
    } else {
      result.push(e);
    }
  });
  return result.join("");
}

let doTest = "abc#d##c";
let dosTest2 = "abc##d######";

console.log(cleanString(doTest)); // "ac"

console.log(cleanString(dosTest2)); // ""
