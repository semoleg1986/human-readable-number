module.exports = function toReadable (number) {
  const basicNumtoStr = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  }
  let str = String(number)
  let res = ''

  const simpleNumber = (num) => {
    return basicNumtoStr[num]
  }

  const lessHundredNumber = (num) => {
    if (num[1]==0){
      return basicNumtoStr[num]
    }
    if (num < 21) {
      return simpleNumber(num);
    }
    return `${basicNumtoStr[num[0] + 0]} ${simpleNumber(num[1])}`
  }

  const moreHundredNumber = (num) => {
    if (num[1] == 0 && num[2] == 0){
      return `${simpleNumber(num[0])} hundred`
    }
    if (num[1] == 0){
      return `${simpleNumber(num[0])} hundred ${simpleNumber(num[2])}`
    }
    return `${simpleNumber(num[0])} hundred ${lessHundredNumber(num[1] + num[2])}`
  }

    if (number<21){
      res = simpleNumber(str)
    }
    else if (number<100){
      res = lessHundredNumber(str)
    }
    else {
      res = moreHundredNumber(str)
    }
  return res
}
