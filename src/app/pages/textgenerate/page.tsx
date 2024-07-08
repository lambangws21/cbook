// pages/text-generate.tsx
"use client";
import React, { useState } from 'react';
import CustomModal from "@/components/modal";
import { SendHorizontal } from 'lucide-react';

const TextGenerate: React.FC = () => {
  const [formData, setFormData] = useState({
    operasi: '',
    operator: '',
    keadaan: '',
    kesadaran: '',
    riwayat: '',
    pengobatan: '',
    penunjang: '',
    persediaan: '',
    postoperasi: '',
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [completedSentence, setCompletedSentence] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const completedSentence = `Pasien dengan tindakan operasi ${formData.operasi} dengan operator ${formData.operator} Keadaan umum pasien ${formData.keadaan} kesadaran pasien ${formData.kesadaran}, pasien ada riwayat  ${formData.riwayat} pengobatan rutin ${formData.pengobatan}, pemeriksaan penunjang preoperasi ${formData.penunjang} persediaan darah ${formData.persediaan}, perawatan selanjutnya post operasi ${formData.postoperasi}.`;
    setModalIsOpen(true);
    setCompletedSentence(completedSentence);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(completedSentence);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-blue-500 border-2 p-5 rounded-lg shadow-md flex flex-wrap justify-center items-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-50 text-center underline">
          Diagnosis Generate
        </h2>
        <form onSubmit={handleSubmit} className="flex p-2 gap-4 flex-wrap justify-center items-center">
          {/* Form fields */}
          {Object.keys(formData).map((key) => (
            <div className="mb-4" key={key}>
              <label htmlFor={key} className="block text-gray-200 mb-2 font-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                id={key}
                className="w-72 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
                value={formData[key as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-slate-500 text-white rounded-md flex items-center justify-center gap-3 p-2 w-72 mt-4 hover:bg-slate-300 hover:text-black "
          >
            Submit
            <SendHorizontal  className='hover:rotate-180 h-6 w-8 transition duration-1000'/>
          </button>
        </form>
      </div>
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Lengkapi Kalimat Modal"
      >
        <h2 className="text-4xl font-semibold mb-4 flex justify-center">Data Generated!</h2>
        <textarea
          readOnly
          className="w-[440px] h-44 justify-center border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-900"
          value={completedSentence}
        />
        <div className='flex justify-center items-center mx-auto w-full gap-4 mt-4'>
        <button
          className="bg-blue-500 text-white rounded-md p-2 w-40 hover:bg-yellow-600"
          onClick={copyToClipboard}
        >
          Salin Teks
        </button>
        <button
          className="bg-slate-100 text-gray-700 rounded-md p-2 w-40  hover:bg-gray-400"
          onClick={() => setModalIsOpen(false)}
        >
          Tutup
        </button>
        </div>
      </CustomModal>
    </div>
  );
};

export default TextGenerate;
