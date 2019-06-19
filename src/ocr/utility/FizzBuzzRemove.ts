
// @ts-ignore
import Fuzzy from "fuzzyset.js";

export default class {

    private $matched : string = '';

    constructor (private $text : string, compare : string, pattern : RegExp, weigh : number) {

        let matches : string[]|null = $text.match(pattern);

        if(matches !== null) {

            let matchted = Fuzzy(matches).get(compare, null, weigh);

            if(matchted !== null) {

                this.$matched = matchted[0][1];
                this.$text = $text.replace(matchted[0][1], '');
            }
        }
    }

    get matched() : string {

        return this.$matched;
    }

    get text() : string{

        return this.$text;
    }
}