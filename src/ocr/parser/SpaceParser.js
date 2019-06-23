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


module.exports = class  {

    constructor(text) {
        this.$text = '';
        this.$parsers = new Map([
            ['nik', new Nik()],
            ['headerProvince', new HeaderProvince()],
            ['headerCity', new HeaderCity()],
            ['rtRw', new RtRw()],
            ['marital', new Marital()],
            ['job', new Job()],
            ['nationality', new Nationality()],
            ['religion', new Religion()],
            ['gender', new Gender()],
            ['name', new Name()],
            ['placeAndDateBirth', new PlaceAndDateBirth()],
            ['validUntil', new ValidUntil()],
            ['bloodType', new BloodType()],
            ['', new AdressesClear()],
            ['alamat', new AsciiDotSlash()],
            ['kelurahanDesa', new AsciiDotSlash()],
            ['kecamatan', new AsciiDotSlash()],
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