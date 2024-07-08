"use client"

import { useState, useEffect } from "react";
import MockData from "./data.json";
import { copyToClipboard, formatListWithNumbers } from "@/components/copyboard/clipboardUtils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface TableProps {
  data: {
    diagnosaKeperawatan: string;
    luaranKeperawatan: string[];
    intervensiKeperawatan: string[];
  }[];
}

const NursingCareTable: React.FC<TableProps> = ({ data }) => {
  
  const handleCopy = (text: string) => {
    copyToClipboard(text);
    toast.success("Copied to clipboard!");
  };

  const handleCopyList = (list: string[]) => {
    const formattedText = formatListWithNumbers(list);
    copyToClipboard(formattedText);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="overflow-x-auto">
      <ToastContainer />
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">
              Diagnosa Keperawatan
            </th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">
              Luaran Keperawatan
            </th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">
              Intervensi Keperawatan
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((row, index) => (
            <tr
              key={index}
              className="bg-white border border-gray-300 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                {row.diagnosaKeperawatan}
                <button
                  className="mt-2 text-slate-900 rounded-3xl hover:bg-slate-400 p-2 w-auto h-auto bg-blue-600"
                  onClick={() => handleCopy(row.diagnosaKeperawatan)}
                >
                  Copy Diagnosa
                </button>
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                <ul className="list-disc ml-5">
                  {row.luaranKeperawatan.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button
                  className="mt-2 text-slate-900 rounded-3xl hover:bg-slate-400 p-2 w-auto h-auto bg-blue-600"
                  onClick={() => handleCopyList(row.luaranKeperawatan)}
                >
                  Copy Luaran
                </button>
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                <ul className="list-disc ml-5">
                  {row.intervensiKeperawatan.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button
                  className="mt-2 text-slate-900 rounded-3xl hover:bg-slate-400 p-2 w-auto h-auto bg-blue-600"
                  onClick={() => handleCopyList(row.intervensiKeperawatan)}
                >
                  Copy Intervensi
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NursingCareTable;
