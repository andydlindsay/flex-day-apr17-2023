let username: string | number | boolean = 'Alice';

console.log('hello world');

username = 42;
username = true;

let numbers: (number | string)[] = [];

numbers.push(42);
numbers.push('hello');
// numbers.push(true);

const myVar = numbers.pop();
