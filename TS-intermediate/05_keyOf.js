"use strict";
function prt(params, key) {
    console.log(params[key]);
} // key of를 쓰면 해당 key를 제한 할수 있다.
prt({ title: "TS배우기",
    publisher: "인프런",
    price: 29700,
    author: "조용수"
}, "title");
