console.log("hello world!");

//타입 주석
const a: number = 1;
const b:string = "hi ts";
const c:boolean = true;


//any - 어떤것이든 다들어감 - 결국 잘 안쓰게된다
//number - int Long(big int)
//string - 문자열 "" `` ''
//boolean - ture, false
//object - {}  -> object랑 any 타입은 타입스크립트에서 잘 안쓰인다.
 
Number("1") // => number로 형변환
String(123) // => 문자열로 형변환
