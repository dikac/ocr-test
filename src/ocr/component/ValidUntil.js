"use strict";

const Abstract = require("./Abstract");
const FizzBuzzRemove = require("../utility/FizzBuzzRemove");

module.exports =  class extends Abstract {

    setText(text) {
        let filter = new FizzBuzzRemove(text, 'berlaku hingga', /([berlaku][^ ]?){3,4}[ ]?([hinga][^ ]){2,3}/gi, 0.8);
        text = filter.text;

        let patterns = [
            /([seumr][^ ]?){2,3}[ ]?([hidup][^ ]?){2,3}/gi,
            /([0-3][0-9])-?(0[0-9]|[1[1-2]])-?[1-2][0-9]{3}/gi
        ];
        for (let pattern of patterns) {
            let match = text.match(pattern);
            if (match !== null) {
                text = text.replace(match[0], '');
                this.setResult(match[0]);
                break;
            }
        }
        super.setText(text);
    }
};