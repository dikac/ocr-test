// @ts-ignore
import Space from "ocr-space-api";
import util from "util";

import jimp from 'jimp';
import express from "express";
import handlebars from "handlebars";
import fs from 'fs'
import {IncomingMessage, ServerResponse} from "http";
import View from "../view/Index";
import Recognize from "../../ocr/Recognize";
import CloundMersive from "../../ocr/CloundMersive";
import SpaceParser from "../../ocr/parser/SpaceParser";
import get from "./get";

let test =   'PROVINSI LAMPUNG \r\nKOTA BANDAR LAMPUNG \r\nNIK \r\nNama \r\n- NtCO JULIAN \r\n• BANDAR \r\nLa hir \r\n09-07-1993 \r\nJenis ketamin \r\nAlamat \r\nRT/RW \r\nKeVDesa \r\nKecamatan \r\nAgama \r\nStatus Perkawinan: \r\nPekerjaan \r\nKewarganegaraan : WNI \r\nBedaku Hingga \r\nLAKI-LAKI \r\nGola Darah \r\na.S.AGUNG WAY HALIM \r\n014/000 \r\nKEDATON \r\nKEDATON \r\n• ISLAM \r\nBELUM KAWIN \r\nPELAJAR/MAHASISWA \r\nSEUMUR HIDUP \r\nKOTA BANDAR \r\nLAMPUNG \r\n28-07-2016 \r\n'


export default function (
    request : IncomingMessage,
    response: ServerResponse,
    view : View = new View(),
    tempPath : string|null = null
) {

    view.setResult(new SpaceParser(test));
    get(request, response, view);
}

