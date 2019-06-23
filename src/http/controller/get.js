"use strict";

const Index = require("../view/Index");

module.exports = function (request, response, view = new Index()) {
    response.write(view.toString());
    response.end();
};