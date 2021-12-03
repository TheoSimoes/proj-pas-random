"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
class Level {
    constructor(level = 1) {
        this.level = level;
    }
    levelUp() {
        this.level++;
        return new Level(this.level);
    }
}
exports.Level = Level;
//# sourceMappingURL=Level.js.map