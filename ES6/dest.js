//1. 생략 - 키와 밸류가 같으면 생략가능
const register = (ID, PW) => ({ID, PW});

console.log(register("lettuce",0000));

// 2. 객체
const {name, age, sex} = {
    name :"lettuce",
    age : 30,
    sex : "male"
};
console.log(name, age, sex);

// 3. 배열
const [first, second, third] = [true, false, "hi"];
console.log(first, second, third);

// spread 연산자 ...
const [first2, ...rest] = [true, false, "hi"];
console.log(first2, rest); 

const arr = [1, 2, 3];
const arr2 =  [...arr, 4, 5];
console.log(arr2);