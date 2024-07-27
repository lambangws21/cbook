"use client"
import { useState, useEffect } from 'react';
// import Image from 'next/image';
import mockData from './data.json';
// import cdlTunnelingImg from './img/cdlTunneling.webp'; // Pastikan gambar tersedia
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface LaporanOperasi {
    namaTindakan: string;
    posisiPasien: string;
    jenisPembiusan: string;
    asistenOperasi: string;
    instrumen: string;
    perkiraanLamaTindakan: string;
    alatMedisImplantDenganVendor: string[];
    alatMedisHabisPakai: string[];
    instrumentasi: string[];
    langkahLangkahOperasi: string[];
    catatanSettingDanOperasi: string[];
}

const CdlTunneling: React.FC = () => {
    const [laporan, setLaporan] = useState<LaporanOperasi | null>(null);

    useEffect(() => {
        setLaporan(mockData.laporanOperasi);
    }, []);

    return (
        <Card>
            <CardContent className='p-5'>
                <CardHeader className="mb-6 xs:text-4xl xs:text-center xs:font-semibold text-center">
                    {laporan?.namaTindakan}
                </CardHeader>
                <div className="ml-4 mb-3 xs:text-sm">
                    <p>Posisi Pasien: {laporan?.posisiPasien}</p>
                    <p>Jenis Pembiusan: {laporan?.jenisPembiusan}</p>
                    <p>Asisten Operasi: {laporan?.asistenOperasi}</p>
                    <p>Instrumen: {laporan?.instrumen}</p>
                    <p>Perkiraan Lama Operasi: {laporan?.perkiraanLamaTindakan}</p>
                </div>
                {/* <CardContent className='mb-4 flex justify-center w-[690px] h-[390px]'>
                    <Image src={cdlTunnelingImg} alt="cdl tunneling" className="hover:scale-150 duration-700 w-96 -ml-11" />
                </CardContent> */}
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold xs:text-xl mb-5">
                        Persiapan Alat Medis Habis Pakai:
                    </h2>
                    <ul className="flex flex-wrap gap-4 justify-center">
                        {laporan?.alatMedisHabisPakai?.map((item, index) => (
                            <li key={index} className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-300 custom-list-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4 flex items-center p-2">
                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Persiapan Instrument:</h2>
                        <ul className="flex flex-wrap gap-4 justify-center">
                            {laporan?.instrumentasi?.map((item, index) => (
                                <li key={index} className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-300 custom-list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mb-5">
                    <h2 className="text-2xl font-semibold mb-5">Catatan dan Settingan Operasi:</h2>
                    <ul className="list-disc ml-7">
                        {laporan?.catatanSettingDanOperasi?.map((item, index) => (
                            <li key={index} className="mb-2">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};

export default CdlTunneling;
