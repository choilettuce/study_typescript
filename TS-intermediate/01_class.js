// 접근 제한자 public protected private
var UserInfo = /** @class */ (function () {
    function UserInfo(name, age, city) {
        this.age = 20; // = 20 기본값 설정 // 접근get 설정set -> 2개가 자기 자신한테만 허용 + 자신을 상속받은 자식한테도 허용
        // 속성 할당
        this.name = name;
        this.age = age;
        this._city = city;
    }
    UserInfo.prototype.bark = function () {
        console.log("".concat(this.name));
    };
    Object.defineProperty(UserInfo.prototype, "city", {
        get: function () {
            return this._city;
        },
        // 세터는 속력, 넓이, 나이 등은 음수를 쓸 수 없는데
        // 
        set: function (newcity) {
            this._city = newcity;
        },
        enumerable: false,
        configurable: true
    });
    return UserInfo;
}());
var user = new UserInfo("용수", 25, "seoul");
// user.age = 27;
// console.log(user.name, user.age, user.city)
user.city = "incheon";
console.log(user.name, user.age, user.city);
user.bark();
