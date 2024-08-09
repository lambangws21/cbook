// components/VsDrIskandarDetails.tsx
import React from 'react';
import data from './data.json';
import { Card } from "@/components/ui/card"
import Image from 'next/image';
import Foto from "@/app/(operation)/iskandar/instrumen.webp"

interface VsDrIskandarData {
  Judul: string;
  Perawat: string;
  JenisPembiusan: string;
  Posisi: string;
  PersiapanOperasi: {
    PersiapanPasien: string[];
    PersiapanInstrumen: string[];
    PersiapanBahanHabisPakai: string[];
  };
  Catatan: string[];
  TeknikInstrumen: string[];
}

const vsDrIskandarData: VsDrIskandarData = data;

const VsDrIskandarDetails: React.FC = () => {
  return (
    <Card>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{vsDrIskandarData.Judul}</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Jenis Pembiusan</h2>
          <p>{vsDrIskandarData.JenisPembiusan}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Perawat Pelaksana</h2>
          <p>{vsDrIskandarData.Perawat}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Posisi</h2>
          <p>{vsDrIskandarData.Posisi}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Persiapan Operasi</h2>
          <h3 className="text-lg font-semibold">Persiapan Pasien</h3>
          <ul className="list-disc list-inside ml-4">
            {vsDrIskandarData.PersiapanOperasi.PersiapanPasien.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold">Persiapan Instrumen</h3>
          <ul className="list-disc list-inside ml-4">
            {vsDrIskandarData.PersiapanOperasi.PersiapanInstrumen.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <div className='mb-4 flex justify-center w-[690px] h-[390px] '>
              <Image src={Foto} alt="instrumen" className="hover:scale-150 duration-700 w-96 -ml-11" />

            </div>
          </ul>
          <h3 className="text-lg font-semibold">Persiapan Bahan Habis Pakai</h3>
          <ul className="list-disc list-inside ml-4">
            {vsDrIskandarData.PersiapanOperasi.PersiapanBahanHabisPakai.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Catatan</h2>
          <ul className="list-disc list-inside ml-4">
            {vsDrIskandarData.Catatan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Teknik Instrumen</h2>
          <ul className="list-disc list-inside ml-4">
            {vsDrIskandarData.TeknikInstrumen.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default VsDrIskandarDetails;
