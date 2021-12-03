export class Level {
  level: number;
  constructor(level = 1){
    this.level = level;
  }

  levelUp(){
    this.level++;
    return new Level(this.level);
  }
}