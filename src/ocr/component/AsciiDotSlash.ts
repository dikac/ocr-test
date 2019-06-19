import Abstract from "./Abstract";
import FizzBuzzRemove from "../utility/FizzBuzzRemove";

export default class extends Abstract {

    setText(text: string) {

        let match = text.match(/[a-z\\.\- ]{3,}/gi);

        if(match !== null) {

            text = text.replace(match[0], '');
            this.setResult(match[0]);
        }

        super.setText(text);
    }

}