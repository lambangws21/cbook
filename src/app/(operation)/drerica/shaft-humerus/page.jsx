"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import mockData from './data.json';
import narrowLCPKanghui from "./img/NarrowLCPKanghui.JPG";
import narrowLCPDarken from "./img/NarrowLCPDarken.JPG";
import shaftHumerusPosisi from "./img/shafthumerus.JPG";
import posisiAssintenInstrumen from "./img/posisiinstrumenasisten.JPG";
import posisiPlate from "./img/posisiplate.JPG";
import posisiPlate2 from "./img/posisiplate2.JPG"
import Card from "../../../components/card";

const OrifShaftHumerus = () => {
    const [laporan, setLaporan] = useState({});

    useEffect(() => {
        setLaporan(mockData.laporanOperasi);
    }, []);

    return (
        <Card>
        <div className="text-start">
            <h1 className="mb-6 xs:text-4xl xs:text-center xs:font-semibold text-center">
                {laporan.namaTindakan}
            </h1>
            <div className="ml-4 mb-3 xs:text-sm">
                <p>Posisi Pasien: {laporan.posisiPasien}</p>
                <p>Jenis Pembiusan: {laporan.jenisPembiusan}</p>
                <p>Asisten Operasi: {laporan.asistenOperasi}</p>
                <p>Instrument: {laporan.instrumen}</p>
                <p>Perkiraan Lama Operasi: {laporan.perkiraanLamaTindakan}</p>
            </div>
            <div className="">
                <Image src={shaftHumerusPosisi} alt="ocilating" className="hover:scale-150 duration-700 h-auto -ml-11" />
                <Image src={posisiAssintenInstrumen} alt="ocilating" className="hover:scale-150 duration-700 h-auto -ml-11" />
            </div>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold xs:text-xl mb-5">
                    Persiapan Alat Medis Habis Pakai:
                </h2>
                <ul className="flex flex-wrap gap-4 justify-center">
                    {laporan.alatMedisHabisPakai?.map((item, index) => (
                        <li
                            key={index}
                            className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-300 custom-list-item"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <h2 className="text-2xl font-semibold mb-5">Persiapan Instrument:</h2>
            <div className="mb-4 flex items-center p-2">
                <div className='flex justify-center'>
                    <ul className="flex flex-wrap gap-4 justify-center ">
                        {laporan.instrumentasi?.map((item, index) => (
                            <li
                                key={index}
                                className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-300 custom-list-item"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="">
                <Image src={posisiPlate} alt="ocilating" className="hover:scale-150 duration-700 h-auto -ml-11" />
                <Image src={posisiPlate2} alt="ocilating" className="hover:scale-150 duration-700 h-auto -ml-11" />
            </div>

            <h2 className="text-2xl font-semibold mb-5">Catatan Implant:</h2>
            <div className="mt-5">
                <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Narrow LCP 4.5mm (KANGHUI)</td>
                            <td className="px-6 py-4 whitespace-nowrap"><Image src={narrowLCPKanghui} alt="Narrow LCP KANGHUI" className="hover:scale-150 duration-700 h-auto w-80 " /></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Narrow LCP 5.5mm (IRENE / TRAFAS)</td>
                            <td className="px-6 py-4 whitespace-nowrap"><Image src={narrowLCPDarken} alt="Narrow LCP IRENE / TRAFAS" className="hover:scale-150 duration-700 h-auto w-80 " /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mb-5 flex gap-56">
                <div>
                    <h2 className="text-2xl font-semibold">Langkah-langkah Operasi:</h2>
                    <ul className="list-disc ml-7 mb-4">
                        {laporan.langkahLangkahOperasi?.map((item, index) => (
                            <li key={index} className="mb-2">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <h2 className="text-xl">Catatan dan Settingan Operasi:</h2>
            <ul className="list-disc ml-7">
                {laporan.catatanSettingDanOperasi?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        </Card>
    );
};

export default OrifShaftHumerus;
