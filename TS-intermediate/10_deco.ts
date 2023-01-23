// 1. 데코레이터는 함수다
function InitClass(params:any) {
    console.log("InitClass :", params);
}

// 2. 데코레이터는 무조건 class와 같이 쓴다
@InitClass
class ExampleClass {
    constructor() {  
    }
    getReq() {}
    postReq() {}
}

// 3. 런타임에 클래스에 붙어서 실행되는 함수 
// = 데코레이터 -> @ -> new Class() 없이, 즉 인스턴스화 없이 실행 
// new ExampleClass();


// 4. 데코레이터 함수 안에서 데이터를 조작 할 수 있다.