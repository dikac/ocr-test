"use strict";

const handlebars = require("handlebars");
const fs = require("fs");

module.exports =  class  {
    constructor() {
        this.result = null;
        handlebars.default.registerPartial('form', this.form());
    }
    layout() {
        let raw = fs.default.readFileSync(__dirname + '/layout/index.hbs', 'utf8');
        let template = handlebars.default.compile(raw, { strict: true });
        return template({});
    }
    resultTemplate() {
        let raw = fs.default.readFileSync(__dirname + '/part/result.hbs', 'utf8');
        let template = handlebars.default.compile(raw, { strict: true });
        return template({
            data: this.result
        });
    }
    form() {
        let raw = fs.default.readFileSync(__dirname + '/part/form.hbs', 'utf8');
        let template = handlebars.default.compile(raw, { strict: true });
        return template({});
    }
    setResult(parser) {
        this.result = parser;
    }
    toString() {
        handlebars.default.registerPartial('result', this.resultTemplate());
        return this.layout();
    }
};
