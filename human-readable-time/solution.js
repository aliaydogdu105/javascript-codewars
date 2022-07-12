function humanReadable(seconds) {
  let hour = Math.trunc(seconds / 3600);
  let minute = Math.trunc((seconds / 3600 - hour) * 60);
  let second = Math.round(((seconds / 3600 - hour) * 60 - minute) * 60);
  if (second == 60) {
    second = 00;
    minute = minute + 1;
  }
  hour < 10 ? (hour = "0" + hour) : hour;
  minute < 10 ? (minute = "0" + minute) : minute;
  second < 10 ? (second = "0" + second) : second;
  return hour + ":" + minute + ":" + second;
}

console.log(humanReadable(100)); // 00:01:40
console.log(humanReadable(5695)); // 01:34:55
