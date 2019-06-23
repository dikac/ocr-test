"use strict";

const Abstract = require("./Abstract");

module.exports = class extends Abstract {
    setText(text) {
        let match = text.match(/[a-z\\.\- ]{3,}/gi);
        if (match !== null) {
            text = text.replace(match[0], '');
            this.setResult(match[0]);
        }
        super.setText(text);
    }
};
