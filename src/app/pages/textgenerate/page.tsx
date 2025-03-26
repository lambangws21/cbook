"use client";

import React, { useState } from 'react';
import CustomModal from "../../../components/modal";
import { SendHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../../components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from '../../../components/ui/button';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const formSchema = z.object({
  Operasi: z.string().min(2, { message: "Operasi must be at least 2 characters." }),
  Operator: z.string().min(2, { message: "Operator must be at least 2 characters." }),
  Keadaan: z.string().min(2, { message: "Keadaan must be at least 2 characters." }),
  Kesadaran: z.string().min(2, { message: "Kesadaran must be at least 2 characters." }),
  Riwayat: z.string().min(2, { message: "Riwayat must be at least 2 characters." }),
  Pengobatan: z.string().min(2, { message: "Pengobatan must be at least 2 characters." }),
  Penunjang: z.string().min(2, { message: "Penunjang must be at least 2 characters." }),
  Persediaan: z.string().min(2, { message: "Persediaan must be at least 2 characters." }),
  Postoperasi: z.string().min(2, { message: "Postoperasi must be at least 2 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const TextGenerate: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [completedSentence, setCompletedSentence] = useState('');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Operasi: '',
      Operator: '',
      Keadaan: '',
      Kesadaran: '',
      Riwayat: '',
      Pengobatan: '',
      Penunjang: '',
      Persediaan: '',
      Postoperasi: '',
    },
  });

  const handleSubmit = (data: FormData) => {
    const completedSentence = `Pasien dengan tindakan operasi ${data.Operasi} dengan operator ${data.Operator} Keadaan umum pasien ${data.Keadaan} kesadaran pasien ${data.Kesadaran}, pasien ada riwayat ${data.Riwayat} pengobatan rutin ${data.Pengobatan}, pemeriksaan penunjang preoperasi ${data.Penunjang} persediaan darah ${data.Persediaan}, perawatan selanjutnya post operasi ${data.Postoperasi}.`;
    setCompletedSentence(completedSentence);
    setModalIsOpen(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(completedSentence).then(() => {
      toast.success("Teks berhasil disalin ke clipboard.");
    }).catch(err => {
      console.error('Could not copy text: ', err);
      toast.error("Gagal menyalin teks ke clipboard.");
    });
  };

  return (
    <Card className="p-4 max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-xl md:text-2xl">
          Data Objektif Generate
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
                    <FormLabel className="text-sm sm:text-base">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={key} {...field} className="w-full" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            ))}
            <Button 
              type="submit" 
              className="bg-slate-500 text-white rounded-md flex items-center justify-center gap-3 p-2 mx-auto hover:bg-slate-300 hover:text-black mt-4 w-full sm:w-auto"
            >
              Submit
              <SendHorizontal className="hover:rotate-180 h-6 w-8 transition duration-1000" />
            </Button>
          </form>
        </Form>
      </CardContent>
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Lengkapi Kalimat Modal"
        className="w-11/12 max-w-md mx-auto"  // Modal responsive
      >
        <ToastContainer />
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-center">Data Generated!</h2>
        <Textarea
          readOnly
          className="w-full h-44 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-900"
          value={completedSentence}
        />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <Button
            className="bg-blue-500 text-white rounded-md p-2 w-full sm:w-40 hover:bg-yellow-600"
            onClick={handleCopy}
          >
            Salin Teks
          </Button>
          <Button
            className="bg-slate-100 text-gray-700 rounded-md p-2 w-full sm:w-40 hover:bg-gray-400"
            onClick={() => setModalIsOpen(false)}
          >
            Tutup
          </Button>
        </div>
      </CustomModal>
    </Card>
  );
};

export default TextGenerate;
