// 접근 제한자 public protected private
class UserInfo {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this._city = city;
    }
    get city() {
        return this._city;
    }
    set city(newcity) {
        this._city = newcity;
    }
}
const user = new UserInfo("용수", 25, "seoul");
// user.age = 27;
// console.log(user.name, user.age, user.city)
user.city = "incheon";
console.log(user.name, user.age, user.city);
