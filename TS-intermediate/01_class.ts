// 접근 제한자 public protected private

class UserInfo {
    // 속성선언
    public name :string; // 접근get 설정set -> 2개가 외부, 내부 자유로움
    public age : number = 20;// = 20 기본값 설정 // 접근get 설정set -> 2개가 자기 자신한테만 허용 + 자신을 상속받은 자식한테도 허용
    private _city : string; // 접근get 설정set -> 2개가 자기 자신한테만 허용

    constructor(name : string, age:number, city:string) {
        // 속성 할당
        this.name = name;
        this.age = age;
        this._city = city;
    }

    bark() :void {
        console.log(`${this.name}`)
    }

    get city() :string{ // private에는 주로 밑줄 변수명으로 붙이는 관례
        return this._city;
    } 
    // 세터는 속력, 넓이, 나이 등은 음수를 쓸 수 없는데
    // 
    set city(newcity: string) {
        this._city = newcity;
    }

}

const user = new UserInfo("용수", 25, "seoul");
// user.age = 27;
// console.log(user.name, user.age, user.city)
user.city = "incheon" 
console.log(user.name, user.age, user.city);
user.bark()
