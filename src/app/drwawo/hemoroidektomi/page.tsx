"use client";
import React from "react";
import Image from "next/image";
import Card from "../../../components/card"
import Foto from "../Images/posisi.png";
import Stapler from "../Images/stapler.webp";
import data from "./data.json";

interface OperationData {
  JenisPembiusan: string;
  Asisten: string;
  Instrumentasi: string;
  Deskripsi: string;
  AlatKesehatan: string[];
  Instrumen: string[];
}

const operationData: OperationData = data;

const OperationDetails: React.FC = () => {
  return (
    <Card>
            <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Hemoroidektomi dengan Stepler</h1>
      <div className=" p-4 flex justify-between w-full">
        <div className="w-1/2 flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Jenis Pembiusan</h2>
          <p>{operationData.JenisPembiusan}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Asisten</h2>
            <p>{operationData.Asisten}</p>
          </div>
          <div className="mb-4">
          <h2 className="text-xl font-semibold">Nurse Scrub</h2>
          <p>{operationData.Instrumentasi}</p>
        </div>
        </div>

        </div>
        <div className="w-1/2 ">
        <Image
          src={Foto}
          alt="ocilating"
          className="hover:scale-150 duration-700 w-96 h-auto"
        />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Deskripsi</h2>
        <p>{operationData.Deskripsi}</p>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between ">
            <div className="w-1/2">
        <h2 className="text-xl font-semibold">Alat Kesehatan</h2>
        <ul className="list-disc list-inside ml-4">
          {operationData.AlatKesehatan.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>
        <div className="w-1/2">
        <Image src={Stapler} alt="ocilating" className="hover:scale-150 duration-700 w-96 h-auto" />
        </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Instrumen</h2>
        <ul className="list-disc list-inside ml-4">
          {operationData.Instrumen.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    </Card>

  );
};

export default OperationDetails;
