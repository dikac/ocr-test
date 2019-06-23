"use strict";

// @ts-ignore
const fuzzyset = require("fuzzyset.js");

module.exports =  class  {

    constructor($text, compare, pattern, weigh) {
        this.$text = $text;
        this.$matched = '';
        let matches = $text.match(pattern);
        if (matches !== null) {
            let matchted = fuzzyset(matches).get(compare, null, weigh);
            if (matchted !== null) {
                this.$matched = matchted[0][1];
                this.$text = $text.replace(matchted[0][1], '');
            }
        }
    }

    get matched() {
        return this.$matched;
    }

    get text() {
        return this.$text;
    }
};