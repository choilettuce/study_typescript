// interface IName {
//     name : string;
// }

// interface ISchool {
//     school : string;
// }

// interface ICity {
//     city : string;
// }

// 위에 인터페이스를 한번에 표현
interface ISuperKey {
    [key: string]: string;
}

function prt2(params: ISuperKey) {
    if ("name" in params) console.log(params.name);
    else if ("school" in params) console.log(params.school);
    else if ("city" in params) console.log(params.city);
    else console.log("error 500")
}
prt2({name : "lettuce"})