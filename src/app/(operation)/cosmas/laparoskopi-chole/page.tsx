"use client"

import { useState, useEffect } from 'react';
import mockData from './data.json';
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import React from 'react';

interface LaporanOperasi {
  judul: string;
  tanggalOperasi: string;
  timOperasi: {
    operator: string;
    asisten: string;
    instrument: string;
    mentor: string;
  };
  alatKesehatanHabisPakai: string[];
  persiapanInstrument: string[];
  persiapanOperasi: string[];
  langkahOperasi: string[];
}

const LaporanOperasiChole: React.FC = () => {
  const [laporan, setLaporan] = useState<LaporanOperasi>({
    judul: '',
    tanggalOperasi: '',
    timOperasi: {
      operator: '',
      asisten: '',
      instrument: '',
      mentor: ''
    },
    alatKesehatanHabisPakai: [],
    persiapanInstrument: [],
    persiapanOperasi: [],
    langkahOperasi: []
  });

  useEffect(() => {
    setLaporan(mockData.laporanOperasi);
  }, []);

  return (
    <Card>
      <CardContent>
          <CardTitle className="text-2xl font-bold mb-4 text-center">{laporan.judul}</CardTitle>
          <p className="mb-4">Tanggal Operasi: {laporan.tanggalOperasi}</p>

          <h2 className="text-xl font-semibold mb-2">Tim Operasi:</h2>
          <p>Operator: {laporan.timOperasi?.operator}</p>
          <p>Asisten: {laporan.timOperasi?.asisten}</p>
          <p>Instrument: {laporan.timOperasi?.instrument}</p>
          <p>Mentor: {laporan.timOperasi?.mentor}</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Persiapan Alat Kesehatan Habis Pakai:</h2>
          <ul className="flex flex-wrap gap-4 mb-4 justify-center">
            {laporan.alatKesehatanHabisPakai?.map((item, index) => (
              <li key={index} className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-400 custom-list-item xs:list-none">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">Persiapan Instrumen Operasi:</h2>
          <div className="flex flex-wrap gap-4 mb-4 justify-center">
            {laporan.persiapanInstrument?.map((item, index) => (
              <div key={index} className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-400 custom-list-item">
                {item}
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2">Persiapan Operasi:</h2>
          <ul className="list-disc ml-6 mb-4 p-3">
            {laporan.persiapanOperasi?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">Langkah Operasi:</h2>
          <ul className="list-disc ml-6 p-3">
            {laporan.langkahOperasi?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
      </CardContent>
    </Card>
  );
};

export default LaporanOperasiChole;
