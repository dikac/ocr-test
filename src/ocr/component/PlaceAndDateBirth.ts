import Abstract from "./Abstract";
import FizzBuzzRemove from "../utility/FizzBuzzRemove";

export default class extends Abstract {

    setText(text: string) {

        let filter = new FizzBuzzRemove(text, 'tempat', /([tempa].?){2,3}/ig, 0.8);
        text = filter.text;

        filter = new FizzBuzzRemove(text, 'tgl', /([tgl].?){2}/ig, 0.8);
        text = filter.text;

        filter = new FizzBuzzRemove(text, 'lahir', /([lahir].?){2,3}/ig, 0.8);
        text = filter.text;

        let match = text.match(/([a-z]*[\n\r ]{1,3})*([0-3][0-9])-?(0[0-9]|[1[1-2]])-?[1-2][0-9]{3}/gi);

        if(match !== null) {

            // match.sort(function(a, b){
            //     // ASC  -> a.length - b.length
            //     // DESC -> b.length - a.length
            //     return b.length - a.length;
            // });

            //let result = match[0].replace(/[tempa]{3,6}.[Tgl]{2,3}.? ?[lahir]{3,5}/i, '');
            this.setResult(match[0].replace(/[\n\r ]+/g, ' '));
            text = text.replace(match[0], '');
        }

        super.setText(text);
    }

}