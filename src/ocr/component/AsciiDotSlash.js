"use strict";

const Abstract = __importDefault(require("./Abstract"));

exports.default = class extends Abstract.default {
    setText(text) {
        let match = text.match(/[a-z\\.\- ]{3,}/gi);
        if (match !== null) {
            text = text.replace(match[0], '');
            this.setResult(match[0]);
        }
        super.setText(text);
    }
};