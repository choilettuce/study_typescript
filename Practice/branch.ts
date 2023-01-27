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
        case "admin": 
            console.log("post 불러오기" ,(p as IAdmin).post);
            console.log("info 불러오기" ,(p as IAdmin).info);
            console.log("detail 불러오기" ,(p as IAdmin).detail);
            break;
        case "manager" : 
        console.log("post 불러오기" ,(p as IAdmin).post);
        console.log("info 불러오기" ,(p as IAdmin).info);
            break;
        case "user": console.log("post만",p.post);
            break;
    }
    
    // console.log("가져오는 로직 발동!!", p.info)
    // admin manageer user
    // 누가 가져오느냐에 따라 보여주는 것을 다르게 구현
}

getLogic({type: "manager",
 post: "post 불러오는 로직 발동!", 
 info: "info 불러오는 로직 발동!"})