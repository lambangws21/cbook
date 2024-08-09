import React from 'react';
import data from './data.json';
import { Card, CardContent } from '@/components/ui/card'

interface LaparoscopyData {
  Judul: string;
  Operator: string;
  Asisten: string;
  Instrumentasi: string;
  PersiapanAlatKesehatanDanObat: string[];
  PersiapanInstrumen: string[];
  LangkahOperasi: string[];
}

const laparoscopyData: LaparoscopyData = data;

const LaparoscopyDetails: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">{laparoscopyData.Judul}</h1>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Operator</h2>
            <p>{laparoscopyData.Operator}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Asisten</h2>
            <p>{laparoscopyData.Asisten}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Instrumentasi</h2>
            <p>{laparoscopyData.Instrumentasi}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Persiapan Alat Kesehatan dan Obat</h2>
            <ul className="list-disc list-inside ml-4">
              {laparoscopyData.PersiapanAlatKesehatanDanObat.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Persiapan Instrumen</h2>
            <ul className="list-disc list-inside ml-4">
              {laparoscopyData.PersiapanInstrumen.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Langkah Operasi</h2>
            <ul className="list-disc list-inside ml-4">
              {laparoscopyData.LangkahOperasi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LaparoscopyDetails;
