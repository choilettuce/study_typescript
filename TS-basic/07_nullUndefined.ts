// 1. null undefined 
const un : undefined = undefined;

// 2. undefined 2개가 있다.

// 3. 모든타입의 최하위계층 undefined

interface IMan {
    name : string;
}

function printName(params : IMan)  {
    console.log("printName on!");
    console.log(params?.name ?? "default value" );
}

// printName({name : "lettuce"});
// printName(undefined);