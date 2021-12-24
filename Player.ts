import { LifePoint } from "./LifePoint";
import { Level } from "./Level";

export class Player {
  lifePoint: LifePoint;
  level: Level;

  constructor(){
    this.lifePoint = new LifePoint();
    this.level = new Level();
  }

  atk(player: Player){
    const playerLifePoint = player.lifePoint;
    if (playerLifePoint === this.lifePoint.zeroLifePoint || this === player){
      return;
    }
    playerLifePoint.loseLifePoint();
    if(playerLifePoint === this.lifePoint.zeroLifePoint){
      this.level.levelUp();
      this.lifePoint.recoverLifePoint();
    }    
  }

  heal(player: Player){
    const playerLifePoint = player.lifePoint;
    if (playerLifePoint === this.lifePoint.zeroLifePoint || this === player){
      return;
    }
    playerLifePoint.recoverLifePoint();
  }
}