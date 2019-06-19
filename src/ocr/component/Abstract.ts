import Component from "./Component";

export default class implements Component {

    private result : string = '';
    private $text : string = '';

    protected setResult(result: string) {

        this.result = result;
    }

    setText(text: string) {

        this.$text = text;
    }

    getText() {

        return this.$text;
    }

    toString() {

        return this.result;
    }
}