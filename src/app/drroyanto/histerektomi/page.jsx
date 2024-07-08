"use client"

import { useState, useEffect } from "react";
import mockData from "./data.json";
import Card from "@/components/card"

const Histerektomi = () => {
  const [laporan, setLaporan] = useState({});

  useEffect(() => {
    setLaporan(mockData.laporanOperasi);
  }, []);

  return (
    <Card>
    <div className="text-start ">
      <h1 className="mb-6 xs:text-4xl xs:text-center xs:font-semibold text-center">{laporan.judul}</h1>
      <p className="text-left mb-4 ">{laporan.deskripsi}</p>
      <h2 className="text-2xl font-semibold">Tim Operasi:</h2>
      <div className=" ml-4 mb-3 xs:text-sm ">
        <p>Operator: {laporan.timOperasi?.operator}</p>
        <p>Asisten Operator: {laporan.timOperasi?.asistenOperator}</p>
        <p>Instrument: {laporan.timOperasi?.instrument}</p>
        <p>Sirkulasi: {laporan.timOperasi?.sirkulasi}</p>
      </div>
<div className="mb-4">
  <h2 className="text-2xl font-semibold xs:text-xl mb-5">Persiapan Alat Kesehatan Habis Pakai:</h2>
  <ul className="flex flex-wrap gap-4 justify-center">
    {laporan.persiapan?.alatKesehatanHabisPakai?.map((item, index) => (
      <li key={index} className=" bg-gray-100 p-2 border rounded-xl  hover:bg-green-300 custom-list-item">{item}</li>
    ))}
  </ul>
</div>
<div className="mb-4">
  <h2 className="text-2xl font-semibold mb-5">Persiapan Instrument:</h2>
  <ul className="flex flex-wrap gap-4 justify-center ">
    {laporan.persiapan?.instrumentOperasi?.map((item, index) => (
      <li key={index} className="bg-gray-100 p-2 border rounded-xl w-1/3 hover:bg-green-300 custom-list-item">{item}</li>
    ))}
  </ul>
</div>



   
      <h2 className="text-2xl font-semibold">Persiapan Pasien Pre Operasi:</h2>
      <ul className="list-disc ml-7 mb-4">
        {laporan.persiapanPasienPreOperasi?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl">Persiapan Intra Operasi:</h2>
      <ul className="list-disc ml-7">
        {laporan.persiapanIntraOperasi?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    </Card>
  );
};

export default Histerektomi;
