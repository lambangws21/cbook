"use client"

import { useState, useEffect } from 'react';
import data from './data.json';
import Card from "../../../app/components/card";

const KraniotomiDekompresi = () => {
    const [laporanOperasi, setLaporanOperasi] = useState({});

    useEffect(() => {
        setLaporanOperasi(data.laporanOperasi);
    }, []);

    return (
        <Card>
        <div className="container mx-auto p-4 text-left">
            <h1 className="text-2xl font-bold mb-4">{laporanOperasi.judul}</h1>
            <div className="mb-4">
                <p><strong>Operator:</strong> {laporanOperasi.operator}</p>
                <p><strong>Asisten:</strong> {laporanOperasi.asisten}</p>
                <p><strong>Instrumen:</strong> {laporanOperasi.instrumen}</p>
                <p><strong>Mentor:</strong> {laporanOperasi.mentor}</p>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-bold">Persiapan Alat Kesehatan</h2>
                <ul className="flex flex-wrap gap-4 mb-4 justify-center">
                    {laporanOperasi.persiapanAlatKesehatan && laporanOperasi.persiapanAlatKesehatan.map((item, index) => (
                        <li key={index} className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-400 xs:custom-list-item">{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-bold">Persiapan Instrument</h2>
                <ul className="flex flex-wrap gap-4 justify-center">
                    {laporanOperasi.persiapanInstrument && laporanOperasi.persiapanInstrument.map((item, index) => (
                        <li key={index} className='bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-400 xs:custom-list-item'>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-bold">Penataan Instrument Meja Operasi</h2>
                <ul className="flex flex-wrap gap-4 justify-center">
                    {laporanOperasi.penataanInstrumentMejaOperasi && laporanOperasi.penataanInstrumentMejaOperasi.map((item, index) => (
                        <li key={index} className='bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-400 sm:custom-list-item'>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-bold">Teknik Operasi</h2>
                {laporanOperasi.teknikOperasi && laporanOperasi.teknikOperasi.map((item, index) => (
                    <div key={index} className="mb-2 p-2">
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className='mb-4'>
                <h2 className='text-xl font-bold '>Ringkasan Operasi</h2>
                <ul className='list-disc ml-4 mb-3 p-3'>
                    {laporanOperasi.ringkasanOperasi && laporanOperasi.ringkasanOperasi.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-bold">Diagnosa Keperawatan</h2>
                <h3 className="font-semibold">SDKI:</h3>
                <ul className="list-disc list-inside">
                    {laporanOperasi.diagnosaKeperawatan?.SDKI && laporanOperasi.diagnosaKeperawatan.SDKI.map((item, index) => (
                        <li key={index} className='ml-4'>{item}</li>
                    ))}
                </ul>
                <h3 className="font-semibold">SIKI:</h3>
                {laporanOperasi.diagnosaKeperawatan?.SIKI && (
                    <div className="ml-4">
                        <h4 className="font-semibold">Pemantauan Tekanan Intrakranial:</h4>
                        <h5 className="font-semibold">Observasi:</h5>
                        <ul className="list-disc list-inside">
                            {laporanOperasi.diagnosaKeperawatan.SIKI.pemantauanTekananIntrakranial?.observasi && laporanOperasi.diagnosaKeperawatan.SIKI.pemantauanTekananIntrakranial.observasi.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <h5 className="font-semibold">Terapeutik:</h5>
                        <ul className="list-disc list-inside">
                            {laporanOperasi.diagnosaKeperawatan.SIKI.pemantauanTekananIntrakranial?.terapeutik && laporanOperasi.diagnosaKeperawatan.SIKI.pemantauanTekananIntrakranial.terapeutik.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <h5 className="font-semibold">Edukasi:</h5>
                        <ul className="list-disc list-inside">
                            {laporanOperasi.diagnosaKeperawatan.SIKI.pemantauanTekananIntrakranial?.edukasi && laporanOperasi.diagnosaKeperawatan.SIKI.pemantauanTekananIntrakranial.edukasi.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <h3 className="font-semibold">SLKI:</h3>
                {laporanOperasi.diagnosaKeperawatan?.SLKI && (
                    <div className="ml-4">
                        <p><strong>Risiko Perfusi Serebral Tidak Efektif:</strong> {laporanOperasi.diagnosaKeperawatan.SLKI.risikoPerfusiSerebralTidakEfektif}</p>
                        <p><strong>Kapasitas Adaptif Intrakranial:</strong> {laporanOperasi.diagnosaKeperawatan.SLKI.kapasitasAdaptifIntrakranial}</p>
                        <p><strong>Tingkat Perdarahan:</strong> {laporanOperasi.diagnosaKeperawatan.SLKI.tingkatPerdarahan}</p>
                    </div>
                )}
            </div>
        </div>
        </Card>
    );
}

export default KraniotomiDekompresi;
