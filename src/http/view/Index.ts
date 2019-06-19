import express from "express";
import handlebars from "handlebars";
import fs from 'fs'
import {IncomingMessage, ServerResponse} from "http";
import Parser from "../../ocr/parser/Parser";

export default class {

    private result : Parser|null = null;

    constructor() {

        handlebars.registerPartial('form', this.form());

    }

    protected layout() : string {

        let raw = fs.readFileSync(__dirname + '/layout/index.hbs', 'utf8');

        let template = handlebars.compile(raw, { strict: true });
        return template({

        });
    }

    protected resultTemplate() : string {

        let raw = fs.readFileSync(__dirname + '/part/result.hbs', 'utf8');

        let template = handlebars.compile(raw, { strict: true });
        return template({
            data : this.result
        });
    }

    protected form() : string {

        let raw = fs.readFileSync(__dirname + '/part/form.hbs', 'utf8');

        let template = handlebars.compile(raw, { strict: true });
        return template({});
    }

    setResult(parser : Parser) {

        this.result = parser;
    }

    toString() {

        handlebars.registerPartial('result', this.resultTemplate());
        return this.layout();
    }


}