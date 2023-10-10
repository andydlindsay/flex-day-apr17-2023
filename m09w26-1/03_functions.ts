import { Dog } from './02_objects';

const myFunc = (age: number): string | number => {
  return age;
};

const returnVal = myFunc(42);

const returningPromise = (message: string, age: number = 100): Promise<string> => {
  return new Promise((resolve) => {
    resolve(message);
  });
};

returningPromise('hello', 42)
  .then((data) => {})

const higherOrderFunc = (age: number, callback: (message: string) => number) => {};
