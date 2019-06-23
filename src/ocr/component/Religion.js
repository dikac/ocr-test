"use strict";

const Abstract = require("./Abstract");
// @ts-ignore
const fuzzyset = require("fuzzyset.js");
const FizzBuzzRemove = require("../utility/FizzBuzzRemove");

console.log(fuzzyset);

module.exports = class extends Abstract {
    setText(text) {
        let filter = new FizzBuzzRemove(text, 'agama', /([aga].?){2,3}/ig, 0.8);
        text = filter.text;
        text = text.replace(/[agm]{3,5}/i, '');
        let datas = [
            ['islam', /[islam]{3,5}/gi, 0.8],
            ['kristen', /[kristen]{4,7}/gi, 0.8],
            ['hindu', /[hindu]{3,5}/gi, 0.8],
            ['budha', /[budha]{3,5}/gi, 0.8],
            ['katolik', /[khatoli]{4,8}/gi, 0.8],
            ['konghucu', /[konghuc]{4,8}/gi, 0.8],
            ['kepercayaan', /[keprcayn]{10,12}/gi, 0.8],
        ];
        for (let [name, pattern, weight] of datas) {
            filter = new FizzBuzzRemove(text, name, pattern, weight);
            if (filter.matched !== '') {
                text = filter.text;
                this.setResult(filter.matched);
                break;
            }
        }

        super.setText(text);
    }
};