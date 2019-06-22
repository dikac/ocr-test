"use strict";

const Index = require("../view/Index");
exports.default = function (request, response, view = new Index.default()) {
    response.write(view.toString());
    response.end();
};