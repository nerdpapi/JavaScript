function main() {
  var num = parseInt(readLine());
  console.log(checkNumber(num));
}
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}