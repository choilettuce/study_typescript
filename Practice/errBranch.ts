type errorCode = 404 | 500;
interface I_NOT_FOUND {
   code: errorCode;
   notFoundFunc: any;
}
interface I_INTER_ERROR {
   code : errorCode;
   interError : any;
}


function errorHandler(p: I_NOT_FOUND | I_INTER_ERROR) {
   switch (p.code) {
       case 404 :
           console.log((p as I_NOT_FOUND).notFoundFunc);
           break;
       case 500 :
           console.log((p as I_INTER_ERROR).interError);
           break;
   }
}

errorHandler({code: 404, notFoundFunc: "404 not found 에러분기 코드 발동"});
errorHandler({code: 500, interError: "서버 분기후 재가동!"});