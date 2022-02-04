// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
  let a = numbers[0];
  let b = numbers[1];
  let c = numbers[2];
  let d = numbers[3];
  let e = numbers[4];
  let f = numbers[5];
  let g = numbers[6];
  let h = numbers[7];
  let i = numbers[8];
  let j = numbers[9];

  let mtn = `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;

  numbers = mtn;

  return numbers;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
