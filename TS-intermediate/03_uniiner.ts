//1. union - 합집합 |(or)
let nameOrAge : string | number;
nameOrAge = "lettuce"
nameOrAge = 31;

interface IName {
    name : string;
}
interface IAge {
    age : number;
}

function prtUnion(params : any) {
    // name 정보가 들어왔을때 로직
    if ("name" in params) {
        console.log(params.name);
    }
    // age 정보가 들어왔을때 로직
    if ("age" in params) {
        console.log(params.age);
    }
}

prtUnion({name : "lettuce"})
//2. intersection - 교집합 &(And)
interface IIName {
    name : string;
}
interface IIAge {
    age : number;
}
// const nameAndAge : IName & IAge = {
//     name : "lettuce"

// }