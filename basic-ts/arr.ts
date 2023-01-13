const arr1:number[] = [1,2,3] 
const arr2:Array<number> = [1,2,3] // generic type
// 배열타입을 쓸때는 주로 arr1 형식으로 타입을 준다.

const arr3:string[] = ["hi", "hello", "world"];
const arr4:Array<string> = ["hi", "hello", "world"];

// const arr5 = [1, true, false, "hah", {}];
// 설계가 잘못된 배열

interface IPerson {
    name : string;
    age : number;
    city? : string; // ?붙이면 넘어올수도 있고 안나올 수도 있다!!
}

const arr5: IPerson[] = [
    {
        name : "lettuce",
        age : 25,
        city : "seoul"
    },
    {
        name : "lettuce",
        age : 25,
        city : "incheon"
    },
    {
        name : "lettuce",
        age : 25,
        city : "suwon"
    },
    {
        name : "lettuce",
        age : 25,
        city : "seoul"
    },
    {
        name : "lettuce",
        age : 25,
        city : "seoul"
    },
]

arr5.forEach((e: IPerson) =>console.log(e?.city ?? "default"))


//튜플 - 배열의 길이 length 와 안에 원소를 바꿀 수 없는 구조
// 불변성유지를 위해서 사용한다
// 각각 원소에 매칭해주면 된다
const arr6: [number, string, object, any[]] = [1, "hi", {}, []]
