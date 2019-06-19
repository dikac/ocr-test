import express from "express";
import handlebars from "handlebars";
import fs from 'fs'
import {IncomingMessage, ServerResponse} from "http";
import View from "../view/Index";
import Recognize from "../../ocr/Recognize";
import CloundMersive from "../../ocr/CloundMersive";


export default function (
    request : IncomingMessage,
    response: ServerResponse,
    view : View = new View(),
) {

    response.write(view.toString());
    response.end();

    // switch (request.method.toLowerCase()) {
    //
    //     case  'post' :
    //         // @ts-ignore
    //         let space = new Space(tempPath, request.files['test-file'],(space : Space) => {
    //
    //             console.log(space);
    //         });
    //
    //
    //         view.setResult();
    //
    //     case  'get' :
    //        // console.log('GET');
    //         //console.log(view.toString());
    //
    //         break;
    //     default :
    //         throw Error();
    // }
}

