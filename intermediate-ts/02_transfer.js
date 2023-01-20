// 서버에서 다른 서버로 정보 보내주기때 활용
// 프론트에서 서버로부터 받을 때 -> jason object
var LoginDatatransfer = /** @class */ (function () {
    function LoginDatatransfer(ID, PW) {
        if (PW === void 0) { PW = "default password"; }
        this.ID = ID;
        if (PW)
            this._PW = PW;
    }
    return LoginDatatransfer;
}());
var LoginDTO = new LoginDatatransfer("hi", "1234");
// LoginDTO.ID = "set";s
console.log(LoginDTO);
