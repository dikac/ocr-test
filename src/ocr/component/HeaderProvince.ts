import Abstract from "./Abstract";

export default class extends Abstract {

    setText(text: string) {

        let match = text.match(/[PROVINS]{4,8}[a-zA-Z ]+/);

        if(match !== null) {

            super.setResult(match[0],);
            text = text.replace(match[0], '');
        }

        super.setText(text);
    }

}