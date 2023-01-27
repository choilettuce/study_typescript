// 타입 분기처리!!
type userType = "admin" | "manager" | "user";
interface IAdmin {
    type : userType;
    post : any;
    info : any;
    detail : any;
}

interface IManager {
    type : userType;
    post : any;
    info : any;
}

interface IUser {
    type : userType;
    post : any
}

function getLogic(p: IAdmin | IManager | IUser) {
    switch(p.type) {
        case "admin": console.log("모두 불러오기" ,(p as IAdmin).post);
            break;
        case "manager" : console.log("info만 추가해서 불러오기")
            break;
        case "user": console.log("post만");
            break;
    }
    
    // console.log("가져오는 로직 발동!!", p.info)
    // admin manageer user
    // 누가 가져오느냐에 따라 보여주는 것을 다르게 구현
}