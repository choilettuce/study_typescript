// 주로 성별, 부서or 직책코드, 카테고리 ...

enum categoryEnum {
home = "home",
kitchen = "kichen",
sports = "sports"
}
// 각각 키에 대한 기본값은 인덱스 번호로 지정되어 있음
// ex > home = 1, kitchen = 2....

const category: categoryEnum = categoryEnum.home;

//웹 앱
//경계선 //
//서버 

function cate(category :any) {
    if(category === "home") {
        console.log("5%할인")
    } else if (category === "kitchen") {
        console.log("10% 할인");
    } else if (category ==="sports") {
        console.log("80% 할인")
    } else {
        console.log("서버 멈춤");
    }
}

cate(category);