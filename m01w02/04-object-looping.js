// array looping
// for..of => element
// for..in => index
// c-style loop => index
// forEach => higher order function / callback

// const arr = [1,2,3];

// for (const element of arr) {
//   console.log(element); // 1
// }

// for (const index in arr) {
//   console.log(arr[index]);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// object looping 
// for..in => loop through keys

const myObj = {
  a: 5,
  b: 10,
  c: 15
};

// if (key in myObj) {} // `in` operator

for (const key in myObj) { // `for..in` loop
  console.log('key', key);
  console.log('value', myObj[key]);
}
