"use strict";
// enum이 재사용 가능하기 때문에 enum을 많이 활용한다.
// 
var sexEnum;
(function (sexEnum) {
    sexEnum["MALE"] = "MALE";
    sexEnum["FEMALE"] = "FEMALE";
    sexEnum["ETC"] = "ETC";
})(sexEnum || (sexEnum = {}));
const sex = "MALE";
const sex2 = sexEnum.MALE;
