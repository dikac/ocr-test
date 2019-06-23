"use strict";

const express = require("express");
const main = require("./http/main");
const fileupload = require("express-fileupload");

// config
let config = {
    path_temp: __dirname + '/temp',
    port: 3000
};


const app = express();
app.use(fileupload());
main(app, config.path_temp);
app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`));
