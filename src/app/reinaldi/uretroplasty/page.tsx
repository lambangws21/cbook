"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import mockData from './data.json';
import Card from '../../../components/card';
import { tindakanHipospadia } from '../../libs/operation';

const HipospadiaPhenoskrotal: React.FC = () => {
    const [laporan, setLaporan] = useState<tindakanHipospadia | null>(null);

    useEffect(() => {
        setLaporan(mockData.laporanOperasi);
    }, []);

    if (!laporan) {
        return <div>Loading...</div>;
    }

    return (
        <Card>
            <div className="text-start">
                <h1 className="mb-6 xs:text-4xl xs:text-center xs:font-semibold text-center">
                    {laporan.namaTindakan}
                </h1>
                <div className="ml-4 mb-3 xs:text-sm">
                    <p>Pengertian: {laporan.pengertian}</p>
                </div>
                <div className="mb-4 flex justify-center w-[690px] h-[390px]">
                    {/* <Image src={laporan.hipospadiaImage} alt="hipospadia" className="hover:scale-150 duration-700 w-96 -ml-11" /> */}
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold xs:text-xl mb-5">
                        Tipe Hipospadia:
                    </h2>
                    <ul className="list-disc ml-7 mb-4">
                        {laporan.tipeHipospadia.map((item, index) => (
                            <li key={index} className="mb-2">
                                {item.type}: {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold xs:text-xl mb-5">
                        Alat Medis:
                    </h2>
                    <ul className="flex flex-wrap gap-4 justify-center">
                        {laporan.alatMedis.map((item, index) => (
                            <li
                                key={index}
                                className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-300 custom-list-item"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <h2 className="text-xl">Keterangan:</h2>
                <ul className="list-disc ml-7">
                    {laporan.tindakan.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default HipospadiaPhenoskrotal;
