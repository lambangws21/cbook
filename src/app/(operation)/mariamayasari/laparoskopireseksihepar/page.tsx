"use client"
import React, { useState, useEffect } from 'react';
import data from './LaparoskopiReseksiHepar.json';
import { Card, CardContent } from '@/components/ui/card';
import { Disc2, Loader2Icon } from 'lucide-react';

// Define the interface for the data
interface LaparoscopyData {
  Judul: string;
  Operator: string;
  Asisten: string;
  Instrumentasi: string;
  PersiapanAlatKesehatanDanObat: string[];
  PersiapanInstrumen: string[];
  LangkahOperasi: string[];
  Catatan: string[]; // Optional field
}

const LaparoscopyDetails: React.FC = () => {
  const [loadedData, setLoadedData] = useState<LaparoscopyData | null>(null);

  useEffect(() => {
    // Simulasi pemuatan data
    const timer = setTimeout(() => {
      setLoadedData(data as LaparoscopyData); // Ensure type assertion is correct
    }, 2000); // Simulasi delay 2 detik

    return () => clearTimeout(timer);
  }, []);

  if (!loadedData) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader2Icon className='animate-spin h-20 w-20' />
      </div>
    );
  }

  return (
    <Card>
      <CardContent>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">{loadedData.Judul}</h1>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Operator</h2>
            <p>{loadedData.Operator}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Asisten</h2>
            <p>{loadedData.Asisten}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Instrumentasi</h2>
            <p>{loadedData.Instrumentasi}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Persiapan Alat Kesehatan dan Obat</h2>
            <ul className="list-disc list-inside ml-4">
              {loadedData.PersiapanAlatKesehatanDanObat.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Persiapan Instrumen</h2>
            <ul className="list-disc list-inside ml-4">
              {loadedData.PersiapanInstrumen.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Langkah Operasi</h2>
            <ul className="list-disc list-inside ml-4">
              {loadedData.LangkahOperasi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {loadedData.Catatan && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Catatan</h2>
              <ul className="list-disc list-inside ml-4">
                {loadedData.Catatan.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LaparoscopyDetails;
