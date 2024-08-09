"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader } from 'lucide-react';
import data from './psoasDebridementData.json'; // Sesuaikan dengan path file JSON

interface PsoasDebridementData {
  operator: string;
  assistant: string;
  instrumen: string;
  sirkulasi: string;
  persiapanAlatKesehatan: string[];
  persiapanInstrumen: string[];
  persiapanKamar: string[];
  persiapanDraping: string[];
  penyusunanInstrumen: string[];
  langkahLangkahOperasi: string[];
}

const PsoasDebridementComponent: React.FC = () => {
  const [loadedData, setLoadedData] = useState<PsoasDebridementData | null>(null);

  useEffect(() => {
    // Simulasi pemuatan data
    const timer = setTimeout(() => {
      setLoadedData(data as PsoasDebridementData);
    }, 1000); // Simulasi delay 1 detik

    return () => clearTimeout(timer);
  }, []);

  if (!loadedData) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader className='animate-spin h-20 w-20'/>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Operasi PSOAS: {loadedData.operator}</CardTitle>
      </CardHeader>
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Assistant</h2>
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
          <h2 className="text-xl font-semibold">Persiapan Alat Kesehatan</h2>
          <ul className="list-disc list-inside ml-4">
            {loadedData.persiapanAlatKesehatan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Persiapan Instrumen</h2>
          <ul className="list-disc list-inside ml-4">
            {loadedData.persiapanInstrumen.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Persiapan Kamar</h2>
          <ul className="list-disc list-inside ml-4">
            {loadedData.persiapanKamar.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Persiapan Draping</h2>
          <ul className="list-disc list-inside ml-4">
            {loadedData.persiapanDraping.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Penyusunan Instrumen</h2>
          <ul className="list-disc list-inside ml-4">
            {loadedData.penyusunanInstrumen.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Langkah-Langkah Operasi</h2>
          <ul className="list-disc list-inside ml-4">
            {loadedData.langkahLangkahOperasi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default PsoasDebridementComponent;
