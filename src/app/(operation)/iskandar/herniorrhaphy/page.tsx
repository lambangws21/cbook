"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Disc2, GlassWaterIcon, Loader } from 'lucide-react';
import data from './herniorrhaphyData.json'

export interface HerniorrhaphyData {
    Judul: string;
    jenisPembiusan: string;
    assistant: string;
    instrumen: string;
    sirkulasi: string;
    persiapanDrapingPasien: string[];
    persiapanDimejaOperasi: string[];
    persiapanAlatKesehatan: string[];
    langkahLangkahOperasi: string[];
    note: string[];
}

const Herniorrhaphy: React.FC = () => {
    const [loadedData, setLoadedData] = useState<HerniorrhaphyData | null>(null);

    useEffect(() => {
        // Simulasi pemuatan data
        const timer = setTimeout(() => {
            setLoadedData(data as HerniorrhaphyData);
        }, 2000); // Simulasi delay 2 detik

        return () => clearTimeout(timer);
    }, []);

    if (!loadedData) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <Disc2 className='animate-bounce h-20 w-20' />
            </div>
        );
    }

    return (
        <Card>
            <CardContent>
                <CardHeader>
                    <CardTitle>{loadedData.Judul}</CardTitle>
                </CardHeader>

                <div className="p-4">
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Jenis Pembiusan</h2>
                        <p>{loadedData.jenisPembiusan}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Perawat Asisten</h2>
                        <p>{loadedData.assistant}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Instrumen</h2>
                        <p>{loadedData.instrumen}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Sirkulasi</h2>
                        <p>{loadedData.sirkulasi}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Persiapan Operasi</h2>
                        <h3 className="text-lg font-semibold">Persiapan Pasien</h3>
                        <ul className="list-disc list-inside ml-4">
                            {loadedData.persiapanDrapingPasien.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <h3 className="text-lg font-semibold">Persiapan Instrumen</h3>
                        <ul className="list-disc list-inside ml-4">
                            {loadedData.persiapanDimejaOperasi.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <h3 className="text-lg font-semibold">Persiapan Bahan Habis Pakai</h3>
                        <ul className="list-disc list-inside ml-4">
                            {loadedData.persiapanAlatKesehatan.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Langkah Operasi</h2>
                        <ul className="list-disc list-inside ml-4">
                            {loadedData.langkahLangkahOperasi.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Catatan</h2>
                        <ul className="list-disc list-inside ml-4">
                            {loadedData.note.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Herniorrhaphy;
