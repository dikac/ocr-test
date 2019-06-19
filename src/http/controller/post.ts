// @ts-ignore
import Space from "ocr-space-api";
import util from "util";

import jimp from 'jimp';
import express from "express";
import handlebars from "handlebars";
import fs from 'fs'
import {IncomingMessage, ServerResponse} from "http";
import View from "../view/Index";
import Recognize from "../../ocr/Recognize";
import CloundMersive from "../../ocr/CloundMersive";
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
    view : View = new View(),
    tempPath : string|null = null
) {

    let path = this.tempPath + '/' + this.file.name;

    Space.parseImageFromLocalFile(this.path(), options)
        .then((parsedResult : any) => {

            let text = parsedResult.parsedText;

            // remove non ascii char
            text = text.replace(/[^\x00-\x7F]/g, "");

            view.setResult(new SpaceParser(text));
            get(request, response, view)

        }).catch(function (err : any) {

        console.log('ERROR:', err);
    });

}

