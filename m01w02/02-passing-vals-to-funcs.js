// when you pass a primitive to a function, a copy is made
// when you pass an object to a function, it gets the actual object

const changeMyNumber = function(num) {
  num = 10;
  console.log('inside the function', num); // 10
};

const myNum = 5;
myNum = 15;

console.log('before', myNum); // 5
changeMyNumber(myNum);
console.log('after', myNum); // 5 or 10?

const changeMyObj = function(obj) {
  obj.username = 'Bob';
  console.log('inside the function', obj); // { username: 'Bob' }
};

const nums = [];
nums.push(1);
nums.pop();

const myObj = {
  age: 42,
  password: '1234',
  username: 'Alice',
};

console.log('before', myObj); // { username: 'Alice' }
changeMyObj(myObj);
console.log('after', myObj); // 'Alice' or 'Bob'
