import Component from "../component/Component";

export default interface Parser extends Component{
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

}