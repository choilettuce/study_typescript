interface ICity {
    name : string;
}

interface ISchool {
    year : number;
}

// 마치 console.log(true ? "truevalue" : "FalseValue" )
type Conditional = ISchool extends ICity ? number : string;
// 상속받지 않고 있어서 string 타입이 된다.

const test:Conditional = "hi"; // string 값이 들어간다