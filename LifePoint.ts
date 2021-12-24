import { Level } from "./Level";

export class LifePoint {
  private lifePoint: number;
  public zeroLifePoint: LifePoint = new LifePoint(0);
  
  constructor(lifePoint = 1000){
    this.lifePoint = lifePoint;
  }


  recoverLifePoint(): LifePoint{
    if(this.lifePoint + 100 > 1000){
      this.lifePoint = 1000;
      return new LifePoint();
    }
    this.lifePoint += 100;
    return new LifePoint(this.lifePoint);
  }

  loseLifePoint(): LifePoint{
    if(this.lifePoint - 100 < 0){
      this.lifePoint = 0;
      return new LifePoint(0);
    }
    this.lifePoint -= 100;
    return new LifePoint(this.lifePoint);
  }
}