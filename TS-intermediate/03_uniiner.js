"use strict";
//1. union - 합집합 |(or)
var nameOrAge;
nameOrAge = "lettuce";
nameOrAge = 31;
function prtUnion(params) {
    // name 정보가 들어왔을때 로직
    if ("name" in params) {
        console.log(params.name);
    }
    // age 정보가 들어왔을때 로직
    if ("age" in params) {
        console.log(params.age);
    }
}
prtUnion({ name: "lettuce" });
//2. intersection - 교집합 &(And)
// interface IName {
//     name : string;
// }
// interface IAge {
//     age : number;
// }
// const nameAndAge : IName & IAge = {
//     name : "lettuce"
// }
