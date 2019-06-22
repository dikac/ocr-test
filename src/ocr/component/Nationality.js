"use strict";

const Abstract = __importDefault(require("./Abstract"));
exports.default = class extends Abstract.default {
    setText(text) {
        let match = text.match(/[kewargn]{9,15}[:a-z ]+/i);
        if (match !== null) {
            let temp = match[0].split(/[: ]/);
            temp.shift();
            this.setResult(temp.join(' '));
            text = text.replace(match[0], '');
        }
        super.setText(text);
    }
};