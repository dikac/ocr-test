"use strict";

const handlebars = require("handlebars");
const fs = require("fs");

module.exports =  class  {
    constructor() {
        this.result = null;
        handlebars.registerPartial('form', this.form());
    }
    layout() {
        let raw = fs.readFileSync(__dirname + '/layout/index.hbs', 'utf8');
        let template = handlebars.compile(raw, { strict: true });
        return template({});
    }
    resultTemplate() {
        let raw = fs.readFileSync(__dirname + '/part/result.hbs', 'utf8');
        let template = handlebars.compile(raw, { strict: true });
        return template({
            data: this.result
        });
    }
    form() {
        let raw = fs.readFileSync(__dirname + '/part/form.hbs', 'utf8');
        let template = handlebars.compile(raw, { strict: true });
        return template({});
    }
    setResult(parser) {
        this.result = parser;
    }
    toString() {
        handlebars.registerPartial('result', this.resultTemplate());
        return this.layout();
    }
};
