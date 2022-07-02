function countSmileys(arr) {
  const smileys = {
    ":)": true,
    ";)": true,
    ":D": true,
    ";D": true,
    ":-D": true,
    ":~D": true,
    ":-)": true,
    ":~)": true,
    ";~D": true,
    ";~)": true,
    ";-D": true,
    ";-)": true,
  };
  return arr.filter((numberOfChar) => smileys[numberOfChar]).length;
}

console.log(countSmileys([':)', ';(', ';}', ':-D'])) ;       //return 2
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));      //return 3
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));  //return 1

