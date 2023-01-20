const obj = {
    red: 'apple',
    yellow: 'banana',
    green: 'cucumber',
 };
  
 // 위의 객체를 타입으로 변환하여 사용하고 싶을때
 type Fruit = typeof obj;

//  type Fruit = {
//      red: string;
//      yellow: string;
//      green: string;
//  }
// 위의 객체에서 red, yellow, green 부분만 꺼내와 타입으로서 사용하고 싶을때

 let obj2: Fruit = {
    red: 'pepper',
    yellow: 'orange',
    green: 'pinnut',
 };