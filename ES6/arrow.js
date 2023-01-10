function add (a,b) {
    return a+b;
}

// arrow func 기본형

const add2 = (a,b) => {
    return a + b;
};

// 예를들어 return이 한줄일때,
const add3 =  (a, b) => a+b;

//param 1개 일때

const add4 = a => a + 4;

// 객체 반환
const add5 = (a) => {
    return {hello : "world"}
}

const add6 = (a) => ({hello : "world"});

