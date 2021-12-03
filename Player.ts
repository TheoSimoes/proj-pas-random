import { LifePoint } from "./LifePoint";
import { Level } from "./Level";

export class Player {
  lifePoint: LifePoint;
  level: Level;

  constructor(lifePoint = new LifePoint(1000), level = new Level(1)){
    this.lifePoint = lifePoint;
    this.level = level;
  }

  atk(player: Player){
    const playerLifePoint = player.lifePoint;
    if (playerLifePoint === new LifePoint(0) || this === player){
      return;
    }
    playerLifePoint.loseLifePoint(new LifePoint(100));
    if(playerLifePoint === new LifePoint(0)){
      this.level.levelUp();
      this.lifePoint.recoverLifePoint(new LifePoint(100));
    }    
  }

  heal(player: Player){
    const playerLifePoint = player.lifePoint;
    if (playerLifePoint === new LifePoint(0) || this === player){
      return;
    }
    playerLifePoint.recoverLifePoint(new LifePoint(100));
  }
}