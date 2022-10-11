// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here// also can use parseInt
  let base;
  let chars ='0123456789abcdef'
  if (str.startsWith('0b')) base = 2;
  if (str.startsWith('0x')) base = 16;
  let sum = 0;
  for (let i = str.length - 1;  i >= 0 + 2; i--) {
    let exp = str.length - 1 - i;
    let els = str[i];
    let el = Number(chars.indexOf(els));
    sum += el*(base**exp)
  }
  return sum;
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914