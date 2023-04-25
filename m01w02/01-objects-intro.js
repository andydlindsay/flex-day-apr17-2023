// data structures are collections of related data

const studentOneName = 'Alice';
// const studentOneCohort = 'Apr 17 2023';
const studentOneGrades = 80; // new Number(80)

const key = 'value'; 

const studentOne = ['Alice', 'Apr 17 2023', 80];
// const grades = studentOne[2];

const studentTwoName = 'Bob';


const studentFourHundredAndSeventyNineName = 'Carol';

// object is a collection of key/value pairs; hash, dictionary, associative array

const arr = [1,2,3]; // new Array()

// 'hello world'; new String('hello world')

arr[1] // 2
arr[1] = 4; // [1,4,3];

// arr.map()
// arr.filter()
// arr.forEach()

const myVal = 'value';
const myOtherVar = myVal;

const obj = {
  anything: myVal,
  username: 'alice',
  username: 'bob',
};

let a = 5;
a = 2;

console.log('obj:', obj);

// const key2 = 'myFuncInAnObj';

obj['username'] = 'Carol'
obj.username = 'Bob'

// obj['myFuncInAnObj']()
obj['anything'] // 'value'
obj['anything'] = 'something new';


console.log();
console['log']();

// user.friends[1].email
// user['friends'][1]['email']

// if you know the name of the key, use dot notation
// if the key is in a variable of some kind, use square bracket

const user = {
  username: 'alice',
  password: '1234'
};

const myKey = 'password';

user.myKey // won't work
user[myKey] // work
