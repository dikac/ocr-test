"use strict";

const Abstract = require("./Abstract");


module.exports = class extends Abstract {
    setText(text) {
        text = text.replace('NIK', '');
        let match = text.match(/[0-9]{16}/);
        if (match !== null) {
            this.setResult(match[0]);
            text = text.replace(match[0], '');
        }
        super.setText(text);
    }
};
