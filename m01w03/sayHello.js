// require('./another-file');

const sayHello = (name) => {
  // console.log(`hello there ${name}`);
  return `hello there ${name}`;
};

const phrase = 'this is great!';

console.log('does this show up?');

// module.exports.sayHello = sayHello;


module.exports = sayHello;
// module.exports = [sayHello, phrase];
// module.exports = {
//   sayHello: sayHello,
//   phrase: phrase
// }

// console.log('exports', module.exports);
