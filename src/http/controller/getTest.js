"use strict";

const Index = require("../view/Index");
const SpaceParser = require("../../ocr/parser/SpaceParser");
const get = require("./get");
let test = 'PROVINSI LAMPUNG \r\nKOTA BANDAR LAMPUNG \r\nNIK \r\nNama \r\n- NtCO JULIAN \r\n• BANDAR \r\nLa hir \r\n09-07-1993 \r\nJenis ketamin \r\nAlamat \r\nRT/RW \r\nKeVDesa \r\nKecamatan \r\nAgama \r\nStatus Perkawinan: \r\nPekerjaan \r\nKewarganegaraan : WNI \r\nBedaku Hingga \r\nLAKI-LAKI \r\nGola Darah \r\na.S.AGUNG WAY HALIM \r\n014/000 \r\nKEDATON \r\nKEDATON \r\n• ISLAM \r\nBELUM KAWIN \r\nPELAJAR/MAHASISWA \r\nSEUMUR HIDUP \r\nKOTA BANDAR \r\nLAMPUNG \r\n28-07-2016 \r\n';
// let test = `PROVINSI PAPUA
// KABUPATEWYAUP..O
// *TempaVTgi LahirMELANGGAMRi
// iamat
// Agama
// toekerjaan
// Aewarganegaraan:WNt
// BeriakuHinggw -SEUMUR+DU
// `;
//
// test = `PROVINSI JAWA TENGAH
// KABUPATEN WONOGIRI
// NIK
// - I BA>ANGW.JLYONO
// : WONOGIRM2-03-1965
// Lahi
// - Darah :
// = LAKH-AKI
// : BENDORED
// RTRW
// - &NOANG
// e WONOGRI
// : KEPERCAYAAN
// : KAWN
// : WRASNASTA
// : WNI
// : SEUWJ HOUP
// WONOGRI
// 21-112017
// `;
module.exports = function (request, response, view = new Index.default()) {
    console.log(new SpaceParser.default(test));
    view.setResult(new SpaceParser.default(test));
    get.default(request, response, view);
}
//# sourceMappingURL=getTest.js.map