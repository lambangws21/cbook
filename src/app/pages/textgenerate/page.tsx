"use client";

import React, { useState } from 'react';
import CustomModal from "../../../components/modal";
import { SendHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../../../components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from '../../../components/ui/button';
import { useToast } from "../../../components/ui/use-toast";

const formSchema = z.object({
  operasi: z.string().min(2, { message: "Operasi must be at least 2 characters." }),
  operator: z.string().min(2, { message: "Operator must be at least 2 characters." }),
  keadaan: z.string().min(2, { message: "Keadaan must be at least 2 characters." }),
  kesadaran: z.string().min(2, { message: "Kesadaran must be at least 2 characters." }),
  riwayat: z.string().min(2, { message: "Riwayat must be at least 2 characters." }),
  pengobatan: z.string().min(2, { message: "Pengobatan must be at least 2 characters." }),
  penunjang: z.string().min(2, { message: "Penunjang must be at least 2 characters." }),
  persediaan: z.string().min(2, { message: "Persediaan must be at least 2 characters." }),
  postoperasi: z.string().min(2, { message: "Postoperasi must be at least 2 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const TextGenerate: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [completedSentence, setCompletedSentence] = useState('');
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      operasi: '',
      operator: '',
      keadaan: '',
      kesadaran: '',
      riwayat: '',
      pengobatan: '',
      penunjang: '',
      persediaan: '',
      postoperasi: '',
    },
  });

  const handleSubmit = (data: FormData) => {
    const completedSentence = `Pasien dengan tindakan operasi ${data.operasi} dengan operator ${data.operator} Keadaan umum pasien ${data.keadaan} kesadaran pasien ${data.kesadaran}, pasien ada riwayat ${data.riwayat} pengobatan rutin ${data.pengobatan}, pemeriksaan penunjang preoperasi ${data.penunjang} persediaan darah ${data.persediaan}, perawatan selanjutnya post operasi ${data.postoperasi}.`;
    setModalIsOpen(true);
    setCompletedSentence(completedSentence);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(completedSentence).then(() => {
      toast({
        title: "Berhasil",
        description: "Teks berhasil disalin ke clipboard.",
      });
    }).catch(err => {
      console.error('Could not copy text: ', err);
      toast({
        title: "Gagal",
        description: "Gagal menyalin teks ke clipboard.",
      });
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto mt-5">
      <CardContent className="bg-blue-500/50 border-2 p-5 rounded-lg shadow-md">
        <CardHeader className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 text-center">
          <span className="text-3xl md:text-4xl font-bold decoration-pink-500 underline">Data Objektif</span> Generate
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 md:space-y-8">
            {Object.keys(formSchema.shape).map((key) => (
              <FormField
                key={key}
                control={form.control}
                name={key as keyof FormData}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</FormLabel>
                    <FormControl>
                      <Input placeholder={key} {...field} className="w-full" />
                    </FormControl>
                    <FormDescription>
                      {`This is your ${key.replace(/([A-Z])/g, ' $1')}.`}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit" className="bg-slate-500 text-white rounded-md flex items-center justify-center gap-3 p-2 w-full md:w-72 mx-auto hover:bg-slate-300 hover:text-black">
              Submit
              <SendHorizontal className='hover:rotate-180 h-6 w-8 transition duration-1000' />
            </Button>
          </form>
        </Form>
      </CardContent>
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Lengkapi Kalimat Modal"
      >
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 flex justify-center">Data Generated!</h2>
        <Textarea
          readOnly
          className="w-full h-44 justify-center border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-900"
          value={completedSentence}
        />
        <div className='flex justify-center items-center mx-auto w-full gap-4 mt-4'>
          <Button
            className="bg-blue-500 text-white rounded-md p-2 w-full md:w-40 hover:bg-yellow-600"
            onClick={copyToClipboard}
          >
            Salin Teks
          </Button>
          <Button
            className="bg-slate-100 text-gray-700 rounded-md p-2 w-full md:w-40 hover:bg-gray-400"
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
