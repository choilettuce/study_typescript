// 서버에서 다른 서버로 정보 보내주기때 활용
// 프론트에서 서버로부터 받을 때 -> jason object

class LoginDatatransfer{
    public readonly ID;
    public readonly _PW?;

    constructor(ID :string, PW:string = "default password") {
        this.ID = ID;
        if (PW) this._PW = PW;
    }
    // set PW(newPW : string) {
    //     this.PW = newPW;
    // }
}



const LoginDTO = new LoginDatatransfer("hi", "1234")
// LoginDTO.ID = "set";
console.log(LoginDTO)
