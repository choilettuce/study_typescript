// number 타입의 매개변수를 return하는 함수
function NumberReturnFunc(arg: number): number {
    return arg;
  }
  
  // string 타입의 매개변수를 return하는 함수
  function StringReturnFunc(arg: string): string {
    return arg;
  }
  
  // boolean 타입의 매개변수를 return하는 함수
  function BooleanReturnFunc(arg: boolean): boolean {
    return arg;
  }

  // 위의 함수들을 제네릭 기법을 사용하여 한개의 함수로 구현 가능
  function GenericReturnFunc<T>(arg: T): T {
    return arg;
  }

  let numVar = GenericReturnFunc<number>(123);
  let strVar = GenericReturnFunc<string>('ABC');