import Abstract from "./Abstract";

export default class extends Abstract {

    setText(text: string) {

       // console.log('=============');
        //console.log(text);
        text = text.replace(/RT\/RW/i, '');
        //console.log(text);
       // console.log('=============');

        let match = text.match(/[0-9]{3}\/[0-9]{3}/i);

        if(match !== null) {

            this.setResult(match[0]);
            text = text.replace(match[0], '');
        }

        super.setText(text);
    }

}