"use strict";

// @ts-ignore
const ocrSpaceApi = require("ocr-space-api");
const Index = require("../view/Index");
const SpaceParser = require("../../ocr/parser/SpaceParser");
const get = require("./get");

var options = {
    apikey: 'c651c379bd88957',
    scale: true,
    detectOrientation: true,
    language: 'eng',
    // imageFormat: 'image/png', // Image Type (Only png ou gif is acceptable at the moment i wrote this)
    isOverlayRequired: true,
    isTable: false
};

exports.default = function (request, response, tempPath, view = new Index.default()) {
    // @ts-ignore
    let file = request.files['test-file'];
    let path = tempPath + '/' + file.name;

    file.mv(path, (err) => {
        if (err) {
            this.error = err;
        }
        else {
            console.log('uploading');

            ocrSpaceApi.default.parseImageFromLocalFile(path, options)
                .then((parsedResult) => {
                let text = parsedResult.parsedText;
                // remove non ascii char
                text = text.replace(/[^\x00-\x7F]/g, "");
                console.log('scanned : ' + text);
                view.setResult(new SpaceParser.default(text));
                get.default(request, response, view);

            }).catch(function (err) {

                console.log('ERROR:', err);
            });
        }
    });
};