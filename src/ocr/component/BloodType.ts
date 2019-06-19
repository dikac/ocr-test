import Abstract from "./Abstract";
import FizzBuzzRemove from "../utility/FizzBuzzRemove";

export default class extends Abstract {

    setText(text: string) {

        let filter = new FizzBuzzRemove(text, 'gol. darah',
            /([gol][^ ]?){2}[ ]?([darah][^ ]{3})[ a-zA-Z]{0,3}/gi,
            0.8
        );

        this.setResult(filter.matched.replace(/([gol][^ ]?){2}[ ]?([darah][^ ]{3})/gi, ''));

        super.setText(filter.text);
    }

}