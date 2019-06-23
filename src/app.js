"use strict";

const fs = require("fs");
const express = require("express");
const main = require("./http/main");
const fileupload = require("express-fileupload");

// config
let config = {
    path_temp: __dirname + '/temp',
    port: 3000
};

if (!fs.existsSync(config.path_temp)){

    fs.mkdirSync(config.path_temp);
}


const app = express();

app.use(fileupload());
main(app, config.path_temp);

app.listen(config.port, () => console.log(`OCR APP active at localhost:${config.port}!`));
