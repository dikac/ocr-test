"use strict";

const Abstract = require("./Abstract");
const FizzBuzzRemove = require("../utility/FizzBuzzRemove");

module.exports = class extends Abstract {
    setText(text) {
        let filter = new FizzBuzzRemove(text, 'status perkawinan', /([stau].?){2,3}.?([perkawin].?){4,5}/ig, 0.8);
        text = filter.text;
        let list = [
            ['belum kawin', /([belum][^ ]?){2,3}[ ]?([kawin][^ ]?){2,3}/gi, 8],
            ['cerai hidup', /([cerai][^ ]?){2,3}[ ]?([hidup][^ ]?){2,3}/gi, 8],
            ['cerai mati', /([cerai][^ ]?){2,3}[ ]?([mati][^ ]?){2}/gi, 8],
            ['kawin', /([kawin][^ ]?){2,3}/gi, 8],
        ];
        for (let [name, pattern, weight] of list) {
            filter = new FizzBuzzRemove(text, name, pattern, weight);
            if (filter.matched !== '') {
                text = filter.text;
                this.setResult(filter.matched);
                break;
            }
        }
        super.setText(filter.text);
    }
}
