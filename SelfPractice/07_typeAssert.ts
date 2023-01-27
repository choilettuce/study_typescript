// as 를 활용한 type assert
let str : unknown = "String";
let strLength : number = (str as string).length;
console.log(strLength)

// <>를 활용한 type assertion
let something : unknown = "this is string!"
let strLength2: number = (<string>something).length 
console.log(strLength2)
