//명세, 타입, 클래스를 만들때
interface IPerson {
    name : string;
    age : number;
    city? : string; // ?붙이면 넘어올수도 있고 안나올 수도 있다!!
}

const man : {name : string; age: number; city? : string} ={
    name : "lettuce",
    age : 25,
    city : "seoul"
};

// 웹 앱
// 경계선 //
// 서버

function prt (params: IPerson) {
    console.log(params?.city ?? "default city");
}

prt(man);
