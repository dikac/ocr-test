import Abstract from "./Abstract";
import FizzBuzzRemove from "../utility/FizzBuzzRemove";

export default class extends Abstract {

    setText(text: string) {

        for (let patterns of [
            ['alamat', /([almt].?){2,3}([kelamin].?){3,4}/ig],
            ['kel/desa', /([kel\\/dsa][^ ]?){3,4}/gi],
            ['kecamatan', /([kecamtn][^ ]?){4,5}/gi],
        ]) {

            let filter = new FizzBuzzRemove(text, <string>patterns[0], <RegExp>patterns[1], 0.7);
            text = filter.text;
        }

        super.setText(text);
    }

}