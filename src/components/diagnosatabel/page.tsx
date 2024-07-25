"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Card } from "../ui/card";
import { copyToClipboard, formatListWithNumbers } from "@/components/copyboard/clipboardUtils";
import MockData from "./data.json";

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
    <main>
      <Card>
        <ToastContainer />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Diagnosa Keperawatan</TableHead>
              <TableHead>Luaran Keperawatan</TableHead>
              <TableHead>Intervensi Keperawatan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
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
      </Card>
    </main>
  );
};

const data = MockData; // Assuming MockData is an array of data that matches the TableProps structure

const NursingCareApp: React.FC = () => {
  return <NursingCareTable data={data} />;
};

export default NursingCareApp;
