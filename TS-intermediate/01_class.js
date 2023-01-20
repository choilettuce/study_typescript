// 접근 제한자 public protected private
var UserInfo = /** @class */ (function () {
    function UserInfo(name, age, city) {
        this.name = name;
        this.age = age;
        this._city = city;
    }
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
