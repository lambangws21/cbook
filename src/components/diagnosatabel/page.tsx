"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
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
    <Card className="p-4 sm:w-[130vw] md:w-auto h-full">
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
                    <AccordionTrigger>Luaran Keperawatan</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc ml-5">
                        {row.luaranKeperawatan.map((item, index) => (
                          <li key={index}>{item}</li>
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
                    <AccordionTrigger>Intervensi Keperawatan</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc ml-5">
                        {row.intervensiKeperawatan.map((item, index) => (
                          <li key={index}>{item}</li>
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
    </Card>
  );
};

const data = MockData; // Assuming MockData is an array of data that matches the TableProps structure

const NursingCareApp: React.FC = () => {
  return <NursingCareTable data={data} />;
};

export default NursingCareApp;
