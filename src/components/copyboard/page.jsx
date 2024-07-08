"use client"

import  { useState, useEffect } from "react";
import mockData from "./data.json";
import { copyToClipboard, formatListWithNumbers } from './clipboardUtils';

const BurhulDrainaseEvakuasiTumor = () => {
  const [laporan, setLaporan] = useState({});

  useEffect(() => {
    setLaporan(mockData);
  }, []);

  const handleCopy = (text) => {
    copyToClipboard(text)
      .then(() => {
        alert('Teks berhasil disalin ke clipboard!');
      })
      .catch((err) => {
        alert('Gagal menyalin teks ke clipboard');
        console.error('Error:', err);
      });
  };

  return (
    <div className="w-full m-7 text-left">
      <div className="mb-6">
        <h1>{laporan.laporanOperasi}</h1>
        <button 
          onClick={() => handleCopy(laporan.laporanOperasi)}
          className="ml-2 bg-blue-500 text-white p-1 rounded">
          Salin
        </button>
      </div>
      <div className="text-left mb-4">
        <p>{laporan.definisi}</p>
        <button 
          onClick={() => handleCopy(laporan.definisi)}
          className="ml-2 bg-blue-500 text-white p-1 rounded">
          Salin
        </button>
      </div>
      <div className="text-left flex-1">
        <h2>Persiapan Alat Kesehatan Habis Pakai:</h2>
        <button 
          onClick={() => handleCopy(formatListWithNumbers(laporan.persiapan?.alatKesehatanHabisPakai || []))}
          className="ml-2 bg-blue-500 text-white p-1 rounded">
          Salin Semua
        </button>
        <div className="flex flex-wrap">
          {laporan.persiapan?.alatKesehatanHabisPakai?.map((item, index) => (
            <div key={index} className="w-1/2 p-2">
              <span className="mr-2">{index + 1}.</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl mt-4">Persiapan Instrumen Operasi:</h2>
        <button 
          onClick={() => handleCopy(formatListWithNumbers(laporan.persiapan?.instrumenOperasi || []))}
          className="ml-2 bg-blue-500 text-white p-1 rounded">
          Salin Semua
        </button>
        <div className="flex flex-wrap">
          {laporan.persiapan?.instrumenOperasi?.map((item, index) => (
            <div key={index} className="w-1/2 p-2">
              <span className="mr-2">{index + 1}.</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-2xl mt-4">Tindakan:</h2>
      <button 
        onClick={() => handleCopy(formatListWithNumbers(laporan.tindakan || []))}
        className="ml-2 bg-blue-500 text-white p-1 rounded">
        Salin Semua
      </button>
      <ul className="list-decimal ml-7">
        {laporan.tindakan?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BurhulDrainaseEvakuasiTumor;
