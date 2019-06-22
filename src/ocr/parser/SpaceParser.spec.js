"use strict";

const SpaceParser = __importDefault(require("./SpaceParser"));
let results = [
    'NIK \r\nPROVINSI LAMPUNG \r\nKOTA BANDAR LAMPUNG \r\n—-NiCO a-JLIAN \r\nLahWz BANDAR \r\n&nis keiamin \r\nAlamat \r\nRT/RW \r\nKeVDesa \r\nKecamatan \r\nAgama \r\nLAKH-AKI \r\n•as.AGUNG WAY HALIM \r\n- KEDATON \r\n: KEDATCN \r\nStatus Perkawinan: BELL-JM KAWIN \r\nPekerjaan \r\n: PELAJAR/MAHASiSWA \r\nKewarganegaraan: WNI \r\nBeriakuHingga t SEUMUR HIDUP \r\nKOTA BANDAR \r\n28-07-2016 \r\n',
    'PROVINSI PAPUA \r\nKABUPATEWYAUP..O \r\n*TempaVTgi Lahir±MELANGGAMRi—— \r\n•iamat \r\nAgama \r\ntoekerjaan \r\nAewarganegaraan:WNt \r\nBeriakuHinggw -SEUMUR+åDUææ \r\n',
    'PROVINSI LAMPUNG \r\nKOTA BANDAR LAMPUNG \r\nNIK \r\nNama \r\n- NtCO JULIAN \r\n• BANDAR \r\nLa hir \r\n09-07-1993 \r\nJenis ketamin \r\nAlamat \r\nRT/RW \r\nKeVDesa \r\nKecamatan \r\nAgama \r\nStatus Perkawinan: \r\nPekerjaan \r\nKewarganegaraan : WNI \r\nBedaku Hingga \r\nLAKI-LAKI \r\nGola Darah \r\na.S.AGUNG WAY HALIM \r\n014/000 \r\nKEDATON \r\nKEDATON \r\n• ISLAM \r\nBELUM KAWIN \r\nPELAJAR/MAHASISWA \r\nSEUMUR HIDUP \r\nKOTA BANDAR \r\nLAMPUNG \r\n28-07-2016 \r\n'
];
// console.log(`- NtCO JULIAN
// • BANDAR
// La hir
// 09-07-1993
// Jenis ketamin
// Alamat
// RT/RW
// KeVDesa
// Kecamatan
// Agama
// Status Per`.replace(/RT\/RW/i, ''));
for (let result of results) {
    // console.log(result);
    let parser = new SpaceParser.default(result);
    console.log(parser.parsers);
}
//# sourceMappingURL=SpaceParser.spec.js.map