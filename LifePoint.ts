export class LifePoint {
  lifePoint: number;
  constructor(lifePoint = 1000){
    this.lifePoint = lifePoint;
  }

  recoverLifePoint(lifePointRecovered: LifePoint): LifePoint{
    if(this.lifePoint + lifePointRecovered.lifePoint > 1000){
      this.lifePoint = 1000;
      return new LifePoint(1000);
    }
    this.lifePoint += lifePointRecovered.lifePoint;
    return new LifePoint(this.lifePoint);
  }

  loseLifePoint(lifePointLost: LifePoint): LifePoint{
    if(this.lifePoint - lifePointLost.lifePoint < 0){
      this.lifePoint = 0;
      return new LifePoint(0);
    }
    this.lifePoint -= lifePointLost.lifePoint;
    return new LifePoint(this.lifePoint);
  }
}