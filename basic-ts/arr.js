"use strict";
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3]; // generic type
// 배열타입을 쓸때는 주로 arr1 형식으로 타입을 준다.
const arr3 = ["hi", "hello", "world"];
const arr4 = ["hi", "hello", "world"];
const arr5 = [
    {
        name: "lettuce",
        age: 25,
        city: "seoul"
    },
    {
        name: "lettuce",
        age: 25,
        city: "incheon"
    },
    {
        name: "lettuce",
        age: 25,
        city: "suwon"
    },
    {
        name: "lettuce",
        age: 25,
        city: "seoul"
    },
    {
        name: "lettuce",
        age: 25,
        city: "seoul"
    },
];
arr5.forEach((e) => { var _a; return console.log((_a = e === null || e === void 0 ? void 0 : e.city) !== null && _a !== void 0 ? _a : "default"); });
