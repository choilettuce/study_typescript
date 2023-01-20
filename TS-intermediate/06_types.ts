interface IUser {
    name : string;
    age : number;
}

interface IBook {
    title : string;
    price : number;
}

interface ICart {
    userName: string;
    bookName: string;
}

interface IUserCartService {
    user: IUser;
    book: IBook;
    cart: ICart;
} // 타입을 모아두는 역할

function login(params:IUserCartService["user"]) {
    //유저가 ... 로그인?
    console.log(params);
}
login({name :"lettuce", age:25})

function searchBook(params:IBook) {
    //책을 검색하는 로직
    console.log(params)
}

// searchBook({title: "lettuce's book", price:29700})

