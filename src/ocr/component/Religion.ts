import Abstract from "./Abstract";
// @ts-ignore
import Fuzzy from "fuzzyset.js";
import FizzBuzzRemove from "../utility/FizzBuzzRemove";

export default class extends Abstract {

    setText(text: string) {

        let filter = new FizzBuzzRemove(text, 'agama', /([aga].?){2,3}/ig, 0.8);
        text = filter.text;

        text = text.replace(/[agm]{3,5}/i, '');

        let datas : [string, RegExp, number][]= [
            ['islam',       /[islam]{3,5}/gi,    0.8],
            ['kristen',     /[kristen]{4,7}/gi,  0.8],
            ['hindu',       /[hindu]{3,5}/gi,    0.8],
            ['budha',       /[budha]{3,5}/gi,    0.8],
            ['katolik',     /[khatoli]{4,8}/gi,  0.8],
            ['konghucu',    /[konghuc]{4,8}/gi,  0.8],
            ['kepercayaan', /[keprcayn]{10,12}/gi,  0.8],
        ];

        for(let [name, pattern, weight] of datas) {

            filter = new FizzBuzzRemove(text, name, pattern, weight);

            if(filter.matched !== '') {

                text = filter.text;
                this.setResult(filter.matched);
                break;
            }


        }


        // for(let name in patterns) {
        //
        //     let match = text.matchAll(patterns[name]);
        //
        //     if(match !== null) {
        //
        //         this.setResult(<string> name);
        //         console.log(name);
        //         console.log(match);
        //         // @ts-ignore
        //         text = text.replace(patterns[name], '');
        //     }
        //
        // }

        super.setText(text);
    }

}