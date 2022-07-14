

const mirror = (obj) => {
  obj = { ...obj };
  for (let property in obj) {
    obj[property] = property.split("").reverse().join("");
  }
  return obj;
  
};

