"use strict";
console.log("hello world!");
//타입 주석
const a = 1;
const b = "hi ts";
const c = true;
//any - 어떤것이든 다들어감 - 결국 잘 안쓰게된다
//number - int Long(big int)
//string - 문자열 "" `` ''
//boolean - ture, false
//object - {}  -> object랑 any 타입은 타입스크립트에서 잘 안쓰인다.
Number("1"); // => number로 형변환
String(123); // => 문자열로 형변환
