"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import mockData from './data.json';
import claviclePosisi from './img/Clavicle1.JPG';
import clavilceLocking from "./img/ClavicleLocking35.JPG"
import recons from "./img/Recons35.JPG"
import clavicleHook from "./img/ClavicleHook.JPG"

import Card from "../../../components/card";

const OrifClavicleDistal = () => {
    const [laporan, setLaporan] = useState({});

    useEffect(() => {
        setLaporan(mockData.laporanOperasi);
    }, []);

    return (
        <Card>
        <div className="text-start ">
            <h1 className="mb-6 xs:text-4xl xs:text-center xs:font-semibold text-center">
                {laporan.namaTindakan}
            </h1>
            <div className="ml-4 mb-3 xs:text-sm ">
                <p>Posisi Pasien: {laporan.posisiPasien}</p>
                <p>Jenis Pembiusan: {laporan.jenisPembiusan}</p>
                <p>Asisten Operasi: {laporan.asistenOperasi}</p>
                <p>Instrument: {laporan.instrumen}</p>
                <p>Perkiraan Lama Operasi: {laporan.perkiraanLamaTindakan}</p>
            </div>
           
            <div className='mb-4 ml-44 flex flex-1 gap-20 justify-center'>
                <Image src={claviclePosisi} alt="ocilating" className="hover:scale-150 duration-700 h-auto -ml-11" />
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
            <div className="mt-5">
                <h2 className="text-2xl font-semibold mb-5">Tabel 2 Kolom dan 2 Baris:</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Clavicular locking S-Plate 3.5mm </td>
                            <td className="px-6 py-4 whitespace-nowrap"><Image src={clavilceLocking} alt="ocilating" className="hover:scale-150 duration-700 h-auto w-80 rotate-90 hover:rotate-0" /></td>

                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Clavicle Reconstruction plate 3.5mm</td>
                            <td className="px-6 py-4 whitespace-nowrap"><Image src={recons} alt="ocilating" className="hover:scale-150 duration-700 h-auto w-80 rotate-90 hover:rotate-0" /></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Clavicle locking hook <span className="ai-planet"></span></td>
                            <td className="px-6 py-4 whitespace-nowrap"><Image src={clavicleHook} alt="ocilating" className="hover:scale-150 duration-700 h-auto w-80" /></td>
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

export default OrifClavicleDistal;
