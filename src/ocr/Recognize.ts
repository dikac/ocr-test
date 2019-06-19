// @ts-ignore
import {TesseractWorker} from "tesseract.js";

export default class {

    private worker = new TesseractWorker();
    private error : any;
    private valid : boolean = false;

    private province : [boolean, string];
    private city : [boolean, string];

    constructor(
        private tempPath : string,
        private file : any
    ) {

        file.mv(tempPath + file.name, (err : any) => {

            if(err) {

                this.error = err;

            } else {

                this.worker
                    .recognize(this.path())
                    .progress(console.log)
                    .then((data: any) => {
                        this.setResult(data)
                    })
                    .catch(console.error);

                this.valid = true;
            }

        });
    }

    protected asciiSpace(object : {
        text : string
    }) : [boolean, string] {

        let text = object.text.trim();
        let result = text.match(/^[a-zA-Z ]+\n$/);

        return [
            result === null,
            text
        ];
    }

    protected setProvince(object : {
        text : string
    })  {

        this.province = this.asciiSpace(object);
    }

    protected setCity(object : {
        text : string
    })  {

        this.city = this.asciiSpace(object);
    }

    protected setResult(data : any) {

        for(let raw of data.lines) {
            console.log(raw.text);

        }
        console.log(data.lines);
    }

    path () : string {

        return this.tempPath + this.file.name;
    }
}