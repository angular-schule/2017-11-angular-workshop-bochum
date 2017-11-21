"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    constructor() {
        this.hashMap = {};
    }
    get(key) {
        return this.hashMap[key];
    }
    set(key, value) {
        this.hashMap[key] = value;
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=dictionary.js.map