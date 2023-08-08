// const arr = [1, 2, 3];
// const another = [4, 5, 6];

// const copy = [
//   ...arr,
//   4
// ];

// // copy.push(4);

// // console.log(arr);
// console.log(copy);


// spread operator ... will always be on the right hand side of the equals sign
// rest operator ... will always be on the left hand side of the equals sign

const user = {
  username: 'alice',
  age: 42,
  hobbies: ['bowling', 'curling']
};

const copy = {
  ...user,
  username: 'bob',
  hobbies: [
    ...user.hobbies
  ]
};

copy.hobbies.push('coding');

// copy.username = 'bob';

console.log(user);
console.log(copy);
