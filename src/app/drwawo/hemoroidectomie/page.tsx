import React from 'react';
import { HemoroidData } from '@/app/libs/operation';

interface HemoroidDetailsProps {
  data: HemoroidData;
}

const HemoroidDetails: React.FC<HemoroidDetailsProps> = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Detail Hemoroid dengan Stapler</h1>
      <p><strong>Jenis Pembiusan:</strong> {data.JenisPembiusan}</p>
      <p><strong>Asisten:</strong> {data.Asisten} orang</p>
      <p><strong>Instrumen:</strong> {data.Instrumen} orang</p>
      <p><strong>Deskripsi:</strong> {data.Deskripsi}</p>
      
      <h2 className="text-xl font-bold mt-4">Alat Kesehatan</h2>
      <ul className="list-disc list-inside">
        {data.AlatKesehatan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-4">Instrumen</h2>
      <ul className="list-disc list-inside">
        {data.Instrumen.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default HemoroidDetails;
