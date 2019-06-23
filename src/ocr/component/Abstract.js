"use strict";


module.exports = class {
    constructor() {
        this.result = '';
        this.$text = '';
    }
    setResult(result) {
        this.result = result;
    }
    setText(text) {
        this.$text = text;
    }
    getText() {
        return this.$text;
    }
    toString() {
        return this.result;
    }
};

