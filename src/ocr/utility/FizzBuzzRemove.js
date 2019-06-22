"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const fuzzyset_js_1 = __importDefault(require("fuzzyset.js"));
class default_1 {
    constructor($text, compare, pattern, weigh) {
        this.$text = $text;
        this.$matched = '';
        let matches = $text.match(pattern);
        if (matches !== null) {
            let matchted = fuzzyset_js_1.default(matches).get(compare, null, weigh);
            if (matchted !== null) {
                this.$matched = matchted[0][1];
                this.$text = $text.replace(matchted[0][1], '');
            }
        }
    }
    get matched() {
        return this.$matched;
    }
    get text() {
        return this.$text;
    }
}
exports.default = default_1;
//# sourceMappingURL=FizzBuzzRemove.js.map