// 함수에 타입넣기
function add(a: number, b:number) :void {
    console.log("hello world")
    return;
}

add(1,2);

const minus : (a : number, b : number) => string = (
    a : number,
    b : number
) : string => String(a-b);

const multiple:(a : number, b:number) => () => number =(
    a : number,
    b : number
) : (() => number) => {
    return () => {
        return a * b * 2;
    };
};

type typeName = any;
type addFunc = (a: number, b:number) => string;
type multiFunc = () => number;
type subMultiFunc = () => number;
type mainMultiFunc = (a:number, b : number) => subMultiFunc;

// type 별칭

type MyString = string;
type YongsooNumber = number;
type SuperVoid = void;

// never

function sendError(): never {
    throw {errorCode : 500, message : "internal server error"}
}
const result = sendError();
console.log("result : ", result)


