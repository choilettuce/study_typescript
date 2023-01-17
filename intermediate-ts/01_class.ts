// 접근 제한자 public protected private

class UserInfo {
    public name :string; // 접근get 설정set -> 2개가 외부, 내부 자유로움
    public age : number; // 접근get 설정set -> 2개가 자기 자신한테만 허용 + 자신을 상속받은 자식한테도 허용
    private _city : string; // 접근get 설정set -> 2개가 자기 자신한테만 허용

    constructor(name : string, age:number, city:string) {
        this.name = name;
        this.age = age;
        this._city = city;
    }
    get city() :string{ // private에는 주로 밑줄 변수명으로 붙이는 관례
        return this._city;
    } 
    set city(newcity: string) {
        this._city = newcity;
    }

}

const user = new UserInfo("용수", 25, "seoul");
// user.age = 27;
// console.log(user.name, user.age, user.city)
user.city = "incheon" 
console.log(user.name, user.age, user.city);
