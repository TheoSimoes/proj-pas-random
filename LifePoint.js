"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifePoint = void 0;
class LifePoint {
    constructor(lifePoint = 1000) {
        this.lifePoint = lifePoint;
    }
    recoverLifePoint(lifePointRecovered) {
        if (this.lifePoint + lifePointRecovered.lifePoint > 1000) {
            this.lifePoint = 1000;
            return new LifePoint(1000);
        }
        this.lifePoint += lifePointRecovered.lifePoint;
        return new LifePoint(this.lifePoint);
    }
    loseLifePoint(lifePointLost) {
        if (this.lifePoint - lifePointLost.lifePoint < 0) {
            this.lifePoint = 0;
            return new LifePoint(0);
        }
        this.lifePoint -= lifePointLost.lifePoint;
        return new LifePoint(this.lifePoint);
    }
}
exports.LifePoint = LifePoint;
//# sourceMappingURL=LifePoint.js.map