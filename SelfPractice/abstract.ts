abstract class Project {

    public project_name:string|null = null;
    private budget:number = 2000000000; // 예산
  
    // 추상 메서드 정의
    public abstract changeProjectName(name:string): void;
  
    // 실제 메서드 정의
    public calcBudget(): number {
      return this.budget * 2;
    }
  
  }
  
  // [오류]
  // [ts] 추상 클래스의 인스턴스를 만들 수 없습니다.
  // constructor Project(): Project
//   let new_project = new Project();