import {IncomingMessage, ServerResponse} from "http";
import express from "express";
import main from "./http/main";
import Upload from "express-fileupload";

// config
let config = {

    path_temp : __dirname + '/temp',
    port :   3000

};


// const express = require('express');
const app  : express.Express = express();


app.use(Upload());
main(app, config.path_temp);


app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`));


//
//




//
// import * as express from "express";
//
// const app : express.Router = express.Router();
// const apps : express.Router = express.Router();
//
// const port = 3000;
//
// app.get('/', (req, res) => res.send('Hello World!'));
// console.log(app);
//
// //app.listen(port, () => console.log(`Example app listening on port ${port}!`))
