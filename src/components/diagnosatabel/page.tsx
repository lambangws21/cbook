"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Card } from "@/components/ui/card";
import { copyToClipboard, formatListWithNumbers } from "@/components/copyboard/clipboardUtils";
import MockData from "./data.json";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TableProps {
  data: {
    diagnosaKeperawatan: string;
    luaranKeperawatan: string[];
    intervensiKeperawatan: string[];
  }[];
}

const NursingCareTable: React.FC<TableProps> = ({ data }) => {
  const [filterText, setFilterText] = useState("");

  const handleCopy = (text: string) => {
    copyToClipboard(text);
    toast.success("Diagnosa sudah disalin");
  };

  const handleCopyList = (list: string[]) => {
    const formattedText = formatListWithNumbers(list);
    copyToClipboard(formattedText);
    toast.success("Sudah Tersalin");
  };

  // Filter data berdasarkan input pencarian (case-insensitive)
  const filteredData = data.filter((row) =>
    row.diagnosaKeperawatan.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Card>
      <ToastContainer />
      {/* Search Input */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Cari Diagnosa..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
      </div>
      {/* Table Responsive */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Diagnosa Keperawatan</TableHead>
              <TableHead>Luaran Keperawatan</TableHead>
              <TableHead>Intervensi Keperawatan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`diagnosa-${index}`}>
                      <AccordionTrigger>
                        {row.diagnosaKeperawatan}
                      </AccordionTrigger>
                      <AccordionContent>
                        <Button onClick={() => handleCopy(row.diagnosaKeperawatan)}>
                          Copy Diagnosa
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TableCell>
                <TableCell>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`luaran-${index}`}>
                      <AccordionTrigger>
                        Luaran Keperawatan
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc ml-5">
                          {row.luaranKeperawatan.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                        <Button onClick={() => handleCopyList(row.luaranKeperawatan)}>
                          Copy Luaran
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TableCell>
                <TableCell>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`intervensi-${index}`}>
                      <AccordionTrigger>
                        Intervensi Keperawatan
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc ml-5">
                          {row.intervensiKeperawatan.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                        <Button onClick={() => handleCopyList(row.intervensiKeperawatan)}>
                          Copy Intervensi
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

const data = MockData; // Pastikan data dari data.json sesuai dengan struktur TableProps

const NursingCareApp: React.FC = () => {
  return <NursingCareTable data={data} />;
};

export default NursingCareApp;
