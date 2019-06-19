import Nik from "../component/Nik";
import HeaderProvince from "../component/HeaderProvince";
import HeaderCity from "../component/HeaderCity";
import PlaceAndDateBirth from "../component/PlaceAndDateBirth";
import Nationality from "../component/Nationality";
import Religion from "../component/Religion";
import Gender from "../component/Gender";
import ValidUntil from "../component/ValidUntil";
import Component from "../component/Component";
import RtRw from "../component/RtRw";
import Marital from "../component/Marital";
import Job from "../component/Job";
import Name from "../component/Name";
import BloodType from "../component/BloodType";
import AdressesClear from "../component/AdressesClear";
import AsciiDotSlash from "../component/AsciiDotSlash";
import Parser from "./Parser";

export default class SpaceParser implements Parser{

    private $text : string = '';

    nik                 : Component;
    rtRw                : Component;
    headerProvince      : Component;
    headerCity          : Component;
    marital             : Component;
    job                 : Component;
    nationality         : Component;
    religion            : Component;
    gender              : Component;
    name                : Component;
    placeAndDateBirth   : Component;
    validUntil          : Component;
    bloodType           : Component;
    alamat              : Component;
    kelurahanDesa       : Component;
    kecamatan           : Component;

    private $parsers : Map<string, Component> = new Map([
        ['nik' , new Nik()],
        ['rtRw' , new RtRw()],
        ['headerProvince' , new HeaderProvince()],
        ['headerCity' , new HeaderCity()],
        ['marital' , new Marital()],
        ['job' , new Job()],
        ['nationality' , new Nationality()],
        ['religion' , new Religion()],
        ['gender' , new Gender()],
        ['name' , new Name()],
        ['placeAndDateBirth' , new PlaceAndDateBirth()],
        ['validUntil' , new ValidUntil()],
        ['bloodType' , new BloodType()],
        ['' , new AdressesClear()],
        ['alamat' , new AsciiDotSlash()],
        ['kelurahanDesa' , new AsciiDotSlash()],
        ['kecamatan' , new AsciiDotSlash()],

    ]);

    constructor(text : string) {
        // remove non ascii char
        text = text.replace(/[^\x00-\x7F]/g, "");

        this.setText(text);

        let object : {getText : () => string} = this;

        for(let [name, parser] of this.$parsers) {

            parser.setText(object.getText().trim());

            if(name !== '') {

                // @ts-ignore
                this[name] = parser;
            }

            object = parser;
        }
    }

    get parsers() : Map<string, Component> {

        return  this.$parsers;
    }

    setText(text : string) {

        this.$text = text;
    }

    getText() : string{

        return this.$text;
    }
}