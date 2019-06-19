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

}

