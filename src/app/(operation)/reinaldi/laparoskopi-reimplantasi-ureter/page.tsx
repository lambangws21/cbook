"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import mockData from './data.json';
import hipospadiaImage from '../img/hypospadias1.webp';
import Card from "../../../components/card";

interface TipeHipospadia {
  type: string;
  description: string;
}

interface LaporanOperasi {
  namaTindakan: string;
  pengertian: string;
  posisiPasien: string;
  jenisPembiusan: string;
  asistenOperasi: string;
  instrumen: string;
  perkiraanLamaTindakan: string;
  hipospadiaImage: string;
  tipeHipospadia: TipeHipospadia[];
  alatMedis: string[];
  persiapanInstrumen: string[];
  tindakan: string[];
}


const Reinplantasi: React.FC = () => {
    const [laporan, setLaporan] = useState<LaporanOperasi | null>(null);

    useEffect(() => {
        setLaporan(mockData.laporanOperasi as unknown as LaporanOperasi);
    }, []);

    return (
        <Card>
            <div className="text-start">
                <h1 className="mb-6 xs:text-4xl xs:text-center xs:font-semibold text-center">
                    {laporan?.namaTindakan}
                </h1>
                <div className="ml-4 mb-3 xs:text-sm">
                    <p>Posisi Pasien: {laporan?.posisiPasien}</p>
                    <p>Jenis Pembiusan: {laporan?.jenisPembiusan}</p>
                    <p>Asisten Operasi: {laporan?.asistenOperasi}</p>
                    <p>Instrumen: {laporan?.instrumen}</p>
                    <p>Perkiraan Lama Operasi: {laporan?.perkiraanLamaTindakan}</p>
                </div>
                <div className='mb-4 flex justify-center w-[690px] h-[390px]'>
                    <Image src={hipospadiaImage} alt="Hipospadia" className="hover:scale-150 duration-700 w-96 -ml-11" />
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold xs:text-xl mb-5">
                        Pengertian:
                    </h2>
                    <p className="bg-gray-100 p-4 border rounded-xl">
                        {laporan?.pengertian}
                    </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold xs:text-xl mb-5">
                        Tipe Hipospadia:
                    </h2>
                    <ul className="flex flex-wrap gap-4 justify-center">
                        {laporan?.tipeHipospadia.map((item, index) => (
                            <li key={index} className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-300 custom-list-item">
                                <p className="font-semibold">{item.type}</p>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold xs:text-xl mb-5">
                        Alat Medis:
                    </h2>
                    <ul className="flex flex-wrap gap-4 justify-center">
                        {laporan?.alatMedis.map((item, index) => (
                            <li key={index} className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-300 custom-list-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4 flex items-center p-2">
                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Persiapan Instrumen:</h2>
                        <ul className="flex flex-wrap gap-4 justify-center">
                            {laporan?.persiapanInstrumen.map((item, index) => (
                                <li key={index} className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-300 custom-list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mb-5 flex gap-4">
                    <div>
                        <h2 className="text-2xl font-semibold">Langkah-langkah Operasi:</h2>
                        <ul className="list-disc ml-7 mb-4">
                            {laporan?.tindakan.map((item, index) => (
                                <li key={index} className="mb-2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Reinplantasi;
