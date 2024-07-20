"use client"
import { useState, useEffect } from 'react';
import mockData from "./data.json";
import Card from '../../components/card';

const ReimplantasiUreter = () => {
    const [laporan, setLaporan] = useState({});

    useEffect(() => {
      setLaporan(mockData.laporanOperasi);
    }, []);
  
    return (
      <Card>
      <div className="p-6 text-left">
        <h1 className="text-2xl font-bold mb-4 text-center">{laporan.judul}</h1>
        <h2 className="mb-5 font-medium  ">Deskripsi:
        <div className='mb-4'> {laporan.deskripsi?.map((item, index) => (
            <div key={index} className='bg-gray-50 p-4 border rounded-xl gap-4 mb-4 hover:bg-green-400 sm:text-base sm:font-normal xs:text-xs'>{item}</div>
        ))}
        </div>
        </h2>
  
        <h2 className="text-xl font-semibold mt-4 mb-2">Persiapan Alat Kesehatan Habis Pakai:</h2>
        <div className="flex flex-wrap gap-4 mb-4  justify-center">
          {laporan.alatKesehatanHabisPakai?.map((item, index) => (
            <div key={index} className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-400 custom-list-item ">
              {item}
            </div>
          ))}
        </div>
  
        <h2 className="text-xl font-semibold mt-4 mb-2 ">Persiapan Instrumen Operasi:</h2>
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
  
        <h2 className="text-xl font-semibold mt-4 mb-2">Ringkasan Operasi:</h2>
        <ul className="list-disc ml-6 p-3">
          {laporan.ringkasanOperasi?.map((item, index) => (
            <li key={index} className='mb-3'>{item}</li>
          ))}
        </ul>
      </div>
      </Card>
    );
}

export default ReimplantasiUreter