"use strict";

const get = require("./controller/get");
const post = require("./controller/post");
const getTest = require("./controller/getTest");

module.exports = function (route, tempPath) {
    route.get('/', (req, res) => {
        return get(req, res);
    });
    route.post('/', (req, res) => {
        return post(req, res, tempPath);
    });
    route.get('/test', (req, res) => {
        return getTest(req, res);
    });
}