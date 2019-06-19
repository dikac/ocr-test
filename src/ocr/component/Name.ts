import Abstract from "./Abstract";
import FizzBuzzRemove from "../utility/FizzBuzzRemove";

export default class extends Abstract {

    setText(text: string) {

        let filter = new FizzBuzzRemove(text, 'nama', /([nam].?){2}/ig, 0.8);
        text = filter.text;

        text = text.trim();
        let match = text.match(/[ a-z]*/gi);

        if(match !== null) {

            for(let name of match) {

                if(name.length > 2) {

                    text = text.replace(name, '');
                    this.setResult(name);
                    break;
                }
            }
        }

        super.setText(text);
    }

}