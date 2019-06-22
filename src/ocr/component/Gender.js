"use strict";

const Abstract = require("./Abstract");
const FizzBuzzRemove = require("../utility/FizzBuzzRemove");

exports.default = class  extends Abstract.default {

    setText(text) {

        let filter = new FizzBuzzRemove.default(text, 'jenis kelamin', /([jenis].?){2,3}([kelamin].?){3,4}/ig, 0.8);
        text = filter.text;
        for (let patterns of [
            ['laki-laki', /([laki][^ ]?){2}[ \-]?([laki][^ ]?){2}/gi],
            ['perempuan', /([permuan][^ ]?){4,5}/gi]
        ]) {
            filter = new FizzBuzzRemove.default(text, patterns[0], patterns[1], 0.8);
            if (filter.matched !== '') {
                this.setResult(filter.matched);
                text = filter.text;
                break;
            }
        }
        super.setText(text);
    }
};