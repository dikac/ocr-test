"use strict";

const Abstract = require("./Abstract");
const FizzBuzzRemove = require("../utility/FizzBuzzRemove");

module.exports = class extends Abstract {
    setText(text) {
        let filter = new FizzBuzzRemove(text, 'gol. darah', /([gol][^ ]?){2}[ ]?([darah][^ ]{3})[ a-zA-Z]{0,3}/gi, 0.8);
        this.setResult(filter.matched.replace(/([gol][^ ]?){2}[ ]?([darah][^ ]{3})/gi, ''));
        super.setText(filter.text);
    }
};
