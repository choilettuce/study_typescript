// enum이 재사용 가능하기 때문에 enum을 많이 활용한다.
// 

enum sexEnum {
MALE = "MALE",
FEMALE = "FEMALE",
ETC = "ETC",
}

const sex: "MALE" | "FEMALE " | "ETC" = "MALE"; // literal
const sex2 : sexEnum = sexEnum.MALE;
