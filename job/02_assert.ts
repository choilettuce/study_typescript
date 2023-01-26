// const testText1 = document.querySelector("#someText")!;
const testText1 = document.querySelector("#someText")as HTMLElement;
console.log(testText1?.id);

interface IExam {
    value: number;
}

const example:object = {value : 1};
// console.log(example.value);

// 1 as 
console.log(example as IExam);

// 2 <>



