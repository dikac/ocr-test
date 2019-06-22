"use strict";

const tesseract = require("tesseract.js");

exports.default = class  {
    constructor(tempPath, file) {
        this.tempPath = tempPath;
        this.file = file;
        this.worker = new tesseract.TesseractWorker();
        this.valid = false;
        file.mv(tempPath + file.name, (err) => {
            if (err) {
                this.error = err;
            }
            else {
                this.worker
                    .recognize(this.path())
                    .progress(console.log)
                    .then((data) => {
                    this.setResult(data);
                })
                    .catch(console.error);
                this.valid = true;
            }
        });
    }
    asciiSpace(object) {
        let text = object.text.trim();
        let result = text.match(/^[a-zA-Z ]+\n$/);
        return [
            result === null,
            text
        ];
    }
    setProvince(object) {
        this.province = this.asciiSpace(object);
    }
    setCity(object) {
        this.city = this.asciiSpace(object);
    }
    setResult(data) {
        for (let raw of data.lines) {
            console.log(raw.text);
        }
        console.log(data.lines);
    }
    path() {
        return this.tempPath + this.file.name;
    }
};