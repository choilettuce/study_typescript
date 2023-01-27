export interface ICalculator {
    add(a: number, b: number): number;

    minus(a: number, b: number) : number;

    multiple(a: number, b: number) : number;
}

// 인터페이스로 명세와 설계
// 결합도를 낮추기위해 해당 아키텍쳐를 이용