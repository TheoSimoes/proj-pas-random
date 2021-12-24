export class Level {
  private level: number;

  constructor(level = 1){
    this.level = level;
  }

  levelUp(){
    this.level++;
  }
}