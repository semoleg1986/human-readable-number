module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

return number < 20
? units[number]
: number < 100
    ? (number % 10 === 0) ? tens[Math.floor(number / 10)] : `${tens[Math.floor(number / 10)]} ${units[number % 10]}`
    : number < 1000
        ? (number % 100 === 0) ? `${units[Math.floor(number / 100)]} hundred` : `${units[Math.floor(number / 100)]} hundred ${toReadable(number % 100)}`
        : "Number out of range";
}
