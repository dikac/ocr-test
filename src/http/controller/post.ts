// @ts-ignore
import Space from "ocr-space-api";
import util from "util";

import express from "express";
import handlebars from "handlebars";
import fs from 'fs'
import {IncomingMessage, ServerResponse} from "http";
import View from "../view/Index";

import SpaceParser from "../../ocr/parser/SpaceParser";
import get from "./get";

var options =  {
    apikey: 'c651c379bd88957',
    scale: true,
    detectOrientation: true,
    language: 'eng', // Português
    // imageFormat: 'image/png', // Image Type (Only png ou gif is acceptable at the moment i wrote this)
    isOverlayRequired: true,
    isTable : false
};

export default function (
    request : IncomingMessage,
    response: ServerResponse,
    tempPath : string,
    view : View = new View(),
) {

    // @ts-ignore
    let file = request.files['test-file'];
    let path = tempPath + '/' + file.name;

    file.mv(path, (err : any) => {

        if(err) {

            this.error = err;

        } else {

            console.log('uploading');
            Space.parseImageFromLocalFile(path, options)
                .then((parsedResult : any) => {

                    let text = parsedResult.parsedText;

                    // remove non ascii char
                    text = text.replace(/[^\x00-\x7F]/g, "");

                    console.log('scanned : ' + text);
                    view.setResult(new SpaceParser(text));

                    get(request, response, view);


                }).catch(function (err : any) {

                console.log('ERROR:', err);
            });

        }
    });



}

