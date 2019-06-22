"use strict";

const Nik = require("../component/Nik");
const HeaderProvince = require("../component/HeaderProvince");
const HeaderCity = require("../component/HeaderCity");
const PlaceAndDateBirth = require("../component/PlaceAndDateBirth");
const Nationality = require("../component/Nationality");
const Religion = require("../component/Religion");
const Gender = require("../component/Gender");
const ValidUntil = require("../component/ValidUntil");
const RtRw = require("../component/RtRw");
const Marital = require("../component/Marital");
const Job = require("../component/Job");
const Name = require("../component/Name");
const BloodType = require("../component/BloodType");
const AdressesClear = require("../component/AdressesClear");
const AsciiDotSlash = require("../component/AsciiDotSlash");


exports.default = class  {

    constructor(text) {
        this.$text = '';
        this.$parsers = new Map([
            ['nik', new Nik.default()],
            ['headerProvince', new HeaderProvince.default()],
            ['headerCity', new HeaderCity.default()],
            ['rtRw', new RtRw.default()],
            ['marital', new Marital.default()],
            ['job', new Job.default()],
            ['nationality', new Nationality.default()],
            ['religion', new Religion.default()],
            ['gender', new Gender.default()],
            ['name', new Name.default()],
            ['placeAndDateBirth', new PlaceAndDateBirth.default()],
            ['validUntil', new ValidUntil.default()],
            ['bloodType', new BloodType.default()],
            ['', new AdressesClear.default()],
            ['alamat', new AsciiDotSlash.default()],
            ['kelurahanDesa', new AsciiDotSlash.default()],
            ['kecamatan', new AsciiDotSlash.default()],
        ]);
        // remove non ascii char
        text = text.replace(/[^\x00-\x7F]/g, "");
        this.setText(text);
        let object = this;
        for (let [name, parser] of this.$parsers) {
            parser.setText(object.getText().trim());
            if (name !== '') {
                // @ts-ignore
                this[name] = parser;
            }
            object = parser;
        }
    }
    get parsers() {
        return this.$parsers;
    }
    setText(text) {
        this.$text = text;
    }
    getText() {
        return this.$text;
    }
};