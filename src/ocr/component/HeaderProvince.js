"use strict";

const Abstract = require("./Abstract");

exports.default = class  extends Abstract.default {
    setText(text) {
        let match = text.match(/([PROVINS][^ ]?){3,4}[a-zA-Z ]+/);
        //console.log(match);
        if (match !== null) {
            super.setResult(match[0]);
            text = text.replace(match[0], '');
        }
        super.setText(text);
    }
};
//# sourceMappingURL=HeaderProvince.js.map