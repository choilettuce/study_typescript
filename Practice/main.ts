import { CalculatorImpl } from "./CalImpliment";
import { ICalculator } from "./Cal";

const cal:ICalculator = new CalculatorImpl();
console.log(cal.add(1,2));

// 인터페이스로 타입을 명시 