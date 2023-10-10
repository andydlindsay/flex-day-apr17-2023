"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myFunc = (age) => {
    return age;
};
const returnVal = myFunc(42);
const returningPromise = (message, age = 100) => {
    return new Promise((resolve) => {
        resolve(message);
    });
};
returningPromise('hello', 42)
    .then((data) => { });
const higherOrderFunc = (age, callback) => { };
