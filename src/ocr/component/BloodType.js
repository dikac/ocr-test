"use strict";

const Abstract = require("./Abstract");
const FizzBuzzRemove = require("../utility/FizzBuzzRemove");

exports.default = class  extends Abstract.default {
    setText(text) {
        let filter = new FizzBuzzRemove.default(text, 'gol. darah', /([gol][^ ]?){2}[ ]?([darah][^ ]{3})[ a-zA-Z]{0,3}/gi, 0.8);
        this.setResult(filter.matched.replace(/([gol][^ ]?){2}[ ]?([darah][^ ]{3})/gi, ''));
        super.setText(filter.text);
    }
};