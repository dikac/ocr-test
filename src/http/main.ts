import express from "express";
import handlebars from "handlebars";
import fs from 'fs'
import {IncomingMessage, ServerResponse} from "http";
import get from "./controller/get";
import post from "./controller/post";
import getTest from "./controller/getTest";




export default function (route : express.Express, tempPath : string) {

    route.get('/', (req : IncomingMessage, res : ServerResponse) => {
        return get(req, res);
    });

    route.post('/', (req : IncomingMessage, res : ServerResponse) => {
        return post(req, res, tempPath);
    });

    route.get('/test', (req : IncomingMessage, res : ServerResponse) => {
        return getTest(req, res);
    });

}