"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const LifePoint_1 = require("./LifePoint");
const Level_1 = require("./Level");
class Player {
    constructor(lifePoint = new LifePoint_1.LifePoint(1000), level = new Level_1.Level(1)) {
        this.lifePoint = lifePoint;
        this.level = level;
    }
    atk(player) {
        const playerLifePoint = player.lifePoint;
        if (playerLifePoint === new LifePoint_1.LifePoint(0) || this === player) {
            return;
        }
        playerLifePoint.loseLifePoint(new LifePoint_1.LifePoint(100));
        if (playerLifePoint === new LifePoint_1.LifePoint(0)) {
            this.level.levelUp();
            this.lifePoint.recoverLifePoint(new LifePoint_1.LifePoint(100));
        }
    }
    heal(player) {
        const playerLifePoint = player.lifePoint;
        if (playerLifePoint === new LifePoint_1.LifePoint(0) || this === player) {
            return;
        }
        playerLifePoint.recoverLifePoint(new LifePoint_1.LifePoint(100));
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map