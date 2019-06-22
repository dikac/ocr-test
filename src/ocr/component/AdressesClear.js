"use strict";

const Abstract = __importDefault(require("./Abstract"));
const FizzBuzzRemove = __importDefault(require("../utility/FizzBuzzRemove"));

exports.default = class  extends Abstract.default {

    setText(text) {
        for (let patterns of [
            ['alamat', /([almt].?){2,3}([kelamin].?){3,4}/ig],
            ['kel/desa', /([kel\\/dsa][^ ]?){3,4}/gi],
            ['kecamatan', /([kecamtn][^ ]?){4,5}/gi],
        ]) {
            let filter = new FizzBuzzRemove.default(text, patterns[0], patterns[1], 0.7);
            text = filter.text;
        }
        super.setText(text);
    }
};
