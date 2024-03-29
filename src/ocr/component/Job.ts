import Abstract from "./Abstract";

// @ts-ignore
import Fuzzy from "fuzzyset.js";
import FizzBuzzRemove from "../utility/FizzBuzzRemove";


export default class extends Abstract {

    setText(text: string) {

        let filterText = new FizzBuzzRemove(text, 'pekerjaan', /([pekrjan].?){4,5}/ig, 0.8);
        text = filterText.text;

        let texts = text.split(/[ ]?[\n\r][ ]?/);
        let filter = Fuzzy(texts);

        //.get(compare, null, weigh);
        let list = [
            'BELUM/TIDAK BEKERJA',
            'MENGURUS RUMAH TANGGA',
            'PELAJAR/MAHASISWA'	,
            'PENSIUNAN',
            'PEGAWAI NEGERI SIPIL',
            'TENTARA NASIONAL INDONESIA',
            'KEPOLISIAN RI',
            'PERDAGANGAN',
            'PETANI/PEKEBUN',
            'PETERNAK',
            'NELAYAN/PERIKANAN',
            'INDUSTRI',
            'KONSTRUKSI',
            'TRANSPORTASI',
            'KARYAWAN SWASTA',
            'KARYAWAN BUMN',
            'KARYAWAN BUMD',
            'KARYAWAN HONORER',
            'BURUH HARIAN LEPAS',
            'BURUH TANI/PERKEBUNAN',
            'BURUH NELAYAN/PERIKANAN',
            'BURUH PETERNAKAN',
            'PEMBANTU RUMAH TANGGA',
            'TUKANG CUKUR',
            'TUKANG LISTRIK',
            'TUKANG BATU',
            'TUKANG KAYU',
            'TUKANG SOL SEPATU',
            'TUKANG LAS/PANDAI BESI',
            'TUKANG JAHIT',
            'TUKANG GIGI',
            'PENATA RIAS',
            'PENATA BUSANA',
            'PENATA RAMBUT',
            'MEKANIK',
            'SENIMAN',
            'TABIB',
            'PARAJI',
            'PERANCANG BUSANA',
            'PENTERJEMAH',
            'IMAM MESJID',
            'PENDETA',
            'PASTOR',
            'WARTAWAN',
            'USTADZ/MUBALIGH',
            'JURU MASAK',
            'PROMOTOR ACARA',
            'ANGGOTA DPR-RI',
            'ANGGOTA DPD',
            'ANGGOTA BPK',
            'PRESIDEN',
            'WAKIL PRESIDEN',
            'ANGGOTA MAHKAMAH KONSTITUSI',
            'ANGGOTA KABINET/KEMENTERIAN',
            'DUTA BESAR',
            'GUBERNUR',
            'WAKIL GUBERNUR',
            'BUPATI',
            'WAKIL BUPATI',
            'WALIKOTA',
            'WAKIL WALIKOTA',
            'ANGGOTA DPRD PROVINSI',
            'ANGGOTA DPRD KABUPATEN/KOTA',
            'DOSEN',
            'GURU',
            'PILOT',
            'PENGACARA',
            'NOTARIS',
            'ARSITEK',
            'AKUNTAN',
            'KONSULTAN',
            'DOKTER',
            'BIDAN',
            'PERAWAT',
            'APOTEKER',
            'PSIKIATER/PSIKOLOG',
            'PENYIAR TELEVISI',
            'PENYIAR RADIO',
            'PELAUT',
            'PENELITI',
            'SOPIR',
            'PIALANG',
            'PARANORMAL',
            'PEDAGANG',
            'PERANGKAT DESA',
            'KEPALA DESA',
            'BIARAWATI',
            'WIRASWASTA',
            'LAINNYA',
        ];

        for(let job of list) {

            let result = filter.get(job, null, 0.8);

            if(result !== null) {

                this.setResult(result[0][1]);
                text = text.replace(result[0][1], '');
                break;
            }
        }

        super.setText(text);
    }

}