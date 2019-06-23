"use strict";

const Abstract = require("./Abstract");

module.exports = class extends Abstract {
    setText(text) {
        let match = text.match(/([PROVINS][^ ]?){3,4}[a-zA-Z ]+/);

        if (match !== null) {
            super.setResult(match[0]);
            text = text.replace(match[0], '');
        }
        super.setText(text);
    }
};
