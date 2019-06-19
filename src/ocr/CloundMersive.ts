// @ts-ignore
import CloudmersiveOcrApiClient   from "cloudmersive-ocr-api-client";
import fs from 'fs'

var defaultClient = CloudmersiveOcrApiClient.ApiClient.instance;
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "2d66144a-fc69-49d3-816d-e786f2709d60";

export default class {

    private api = new CloudmersiveOcrApiClient.ImageOcrApi();
    private error : any;
    private valid : boolean = false;

    private province : [boolean, string];
    private city : [boolean, string];

    constructor(
        private tempPath : string,
        private file : any
    ) {

        file.mv(this.path(), (err : any) => {

            if(err) {

                this.error = err;

            } else {

                var imageFile  = fs.readFileSync(this.path());

                var callback = function(error : any, data : any, response : any) {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log('API called successfully. Returned data: ');
                        console.log(data);
                    }
                };
                this.api.imageOcrPost(this.path(), callback);
                console.error('ok');
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

        return this.tempPath + '/' +  this.file.name;
    }
}