import Abstract from "./Abstract";

export default class extends Abstract {

    setText(text: string) {

        let patterns = [
            /([kota][^ ]?){2}[a-zA-Z ]+/i,
            /([kabupten][^ ]?){3,4}[a-zA-Z ]+/i,
            /([jakrt][^ ]?){3}[a-zA-Z ]+/i
        ];

        for(let pattern of patterns) {

            let match = text.match(pattern);

            if(match !== null) {

                this.setResult(match[0]);
                text = text.replace(match[0], '');
                break;
            }
        }

        super.setText(text);
    }

}