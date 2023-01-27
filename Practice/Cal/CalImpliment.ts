import { ICalculator } from "./Cal";

export class CalculatorImpl implements ICalculator {
    add(a : number, b: number) : number {
        return a + b;
    }

    minus(a: number, b: number): number {
        return a - b;
    }

    multiple(a: number, b: number): number {
        return a * b;
    }
}

// 인터페이스로 구현한 클래스 구현
