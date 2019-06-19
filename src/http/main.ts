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

    // route.get('/', (req : IncomingMessage,  res: ServerResponse) => {
    //
    //     let template = fs.readFileSync(__dirname + '/view/layout/index.hbs', 'utf8');
    //
    //     let part = fs.readFileSync(__dirname + '/view/part/form.hbs', 'utf8');
    //
    //
    //     let template = handlebars.compile(template, { strict: true });
    //     let html = template({text:'lol'});
    //
    //     fs.readFile(__dirname + '/view/layout/index.hbs', 'utf8', (err, data) => {
    //
    //         if(err) {
    //             throw err;
    //         }
    //
    //         let template = handlebars.compile(data, { strict: true });
    //         let html = template({text:'lol'});
    //
    //
    //         res.write(html);
    //         res.end();
    //     });
    //
    // });



}