"use client";

import React, { useState } from "react";
import CustomModal from "../../../components/modal";
import { SendHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

const formSchema = z.object({
  Operasi: z.string().min(2),
  Operator: z.string().min(2),
  Keadaan: z.string().min(2),
  Kesadaran: z.string().min(2),
  Riwayat: z.string().min(2),
  Pengobatan: z.string().min(2),
  Penunjang: z.string().min(2),
  Persediaan: z.string().min(2),
  Postoperasi: z.string().min(2),
});

type FormData = z.infer<typeof formSchema>;

const TextGenerate: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [completedSentence, setCompletedSentence] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Operasi: "",
      Operator: "",
      Keadaan: "",
      Kesadaran: "",
      Riwayat: "",
      Pengobatan: "",
      Penunjang: "",
      Persediaan: "",
      Postoperasi: "",
    },
  });

  const handleSubmit = (data: FormData) => {
    const sentence = `Pasien dengan tindakan operasi ${data.Operasi} dengan operator ${data.Operator}. Keadaan umum pasien ${data.Keadaan}, kesadaran ${data.Kesadaran}, riwayat ${data.Riwayat}, pengobatan ${data.Pengobatan}, penunjang preoperasi ${data.Penunjang}, persediaan darah ${data.Persediaan}, perawatan post operasi ${data.Postoperasi}.`;
    setCompletedSentence(sentence);
    setModalIsOpen(true);
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(completedSentence).then(() => {
      toast.success("Teks berhasil disalin ke clipboard.");
    }).catch(() => {
      toast.error("Gagal menyalin teks ke clipboard.");
    });
  };

  return (
    <Card className="p-4 sm:p-6 max-w-3xl mx-auto shadow-lg dark:bg-slate-900">
      <CardHeader>
        <CardTitle className="text-center text-xl sm:text-2xl text-blue-700 dark:text-blue-300">
          Data Objektif Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            {Object.keys(formSchema.shape).map((key) => (
              <FormField
                key={key}
                control={form.control}
                name={key as keyof FormData}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={key} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="submit"
              className="w-full sm:w-auto mx-auto flex gap-2 bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit <SendHorizontal className="w-5 h-5" />
            </Button>
          </form>
        </Form>
      </CardContent>

      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Generated Result"
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <ToastContainer />
        {isGenerating ? (
          <motion.div
            className="flex flex-col items-center justify-center h-44"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="animate-spin h-12 w-12 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <p className="mt-4 text-lg">Sedang Generate...</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Data Generated!</h2>
            <Textarea
              readOnly
              className="w-full h-44 border rounded-md p-3 text-sm"
              value={completedSentence}
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="bg-blue-600 text-white w-full sm:w-40 p-2 rounded hover:bg-blue-700"
              >
                Salin Teks
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setModalIsOpen(false)}
                className="bg-gray-200 text-gray-700 w-full sm:w-40 p-2 rounded hover:bg-gray-400"
              >
                Tutup
              </motion.button>
            </div>
          </motion.div>
        )}
      </CustomModal>
    </Card>
  );
};

export default TextGenerate;
