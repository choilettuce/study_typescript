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
//튜플 - 배열의 길이 length 와 안에 원소를 바꿀 수 없는 구조
// 불변성유지를 위해서 사용한다
// 각각 원소에 매칭해주면 된다
const arr6 = [1, "hi", {}, []];
