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
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ClipboardCopy } from "lucide-react";

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

  const filteredData = data.filter((row) =>
    row.diagnosaKeperawatan.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Card className="p-4 shadow-xl dark:bg-slate-900">
      <ToastContainer />
      <div className="mb-4">
        <Input
          placeholder="Cari Diagnosa..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full border-blue-300 focus:ring-blue-500"
        />
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-full text-sm">
          <TableHeader>
            <TableRow>
              <TableHead>Diagnosa Keperawatan</TableHead>
              <TableHead>Luaran Keperawatan</TableHead>
              <TableHead>Intervensi Keperawatan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index} className="hover:bg-muted/30">
                <TableCell>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`diagnosa-${index}`}>
                      <AccordionTrigger>
                        {row.diagnosaKeperawatan}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <Button
                          variant="secondary"
                          onClick={() => handleCopy(row.diagnosaKeperawatan)}
                          className="gap-2"
                        >
                          <ClipboardCopy className="w-4 h-4" /> Copy Diagnosa
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TableCell>
                <TableCell>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`luaran-${index}`}>
                      <AccordionTrigger>Luaran</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <ul className="list-disc ml-5">
                          {row.luaranKeperawatan.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                        <Button
                          variant="secondary"
                          onClick={() => handleCopyList(row.luaranKeperawatan)}
                          className="gap-2"
                        >
                          <ClipboardCopy className="w-4 h-4" /> Copy Luaran
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TableCell>
                <TableCell>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`intervensi-${index}`}>
                      <AccordionTrigger>Intervensi</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <ul className="list-disc ml-5">
                          {row.intervensiKeperawatan.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                        <Button
                          variant="secondary"
                          onClick={() => handleCopyList(row.intervensiKeperawatan)}
                          className="gap-2"
                        >
                          <ClipboardCopy className="w-4 h-4" /> Copy Intervensi
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

const data = MockData;

const NursingCareApp: React.FC = () => {
  return <NursingCareTable data={data} />;
};

export default NursingCareApp;
