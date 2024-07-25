"use client"

import { useState, useEffect } from "react";
import MockData from "./data.json";
import { copyToClipboard, formatListWithNumbers } from "@/components/copyboard/clipboardUtils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              Diagnosa Keperawatan
            </TableHead>
            <TableHead>
              Luaran Keperawatan
            </TableHead>
            <TableHead>
              Intervensi Keperawatan
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
            >
              <TableCell>
                {row.diagnosaKeperawatan}
                <button
                  className="mt-2 text-slate-900 rounded-3xl hover:bg-slate-400 p-2 w-auto h-auto bg-blue-600"
                  onClick={() => handleCopy(row.diagnosaKeperawatan)}
                >
                  Copy Diagnosa
                </button>
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NursingCareTable;
