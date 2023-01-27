class Singleton {
    private static _instane = new Singleton();

    private constructor() {
        console.log("싱글턴 생성!!")
    }

    public static getInstance() {
        // if (this._instane) {
        //     return this._instane;
        // }
        return this._instane;
    }
}
// private을 붙이면 new 키워드를 쓰지 못한다.

const Single : Singleton = Singleton.getInstance();
const Single2 : Singleton = Singleton.getInstance();
const Single3 : Singleton = Singleton.getInstance();
const Single4 : Singleton = Singleton.getInstance();
const Single5 : Singleton = Singleton.getInstance();

// 인스턴스를 많이 생성해도 한번밖에 호출이 안된다!!