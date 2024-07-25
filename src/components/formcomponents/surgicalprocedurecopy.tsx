"use client"

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { FormSchema, FormData } from "@/lib/formTypes";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent } from '@/components/ui/card';
import FormField from '@/components/formcomponents/formfield';
import CheckboxField from '@/components/formcomponents/checkboxfield';
import { Label } from '@/components/ui/label';

const SerahTerima: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: FormSchema.parse({}),
  });
  
  async function onSubmit(data: FormData) {
    console.log('Form data to be submitted:', data); // Log form data here
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: data }),
      });

      if (response.ok) {
        toast({
          title: "Form submitted successfully",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.log('Error submitting form:', error); // Log error here
      let errorMessage = 'Unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: "Error submitting form",
        description: errorMessage,
      });
    }
  }

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative w grid gap-4 sm:leading-tight sm:bg-yellow-50 sm:p-2">
              <div className="text-2xl font-bold sm:text-xs uppercase flex items-center justify-start md:text-xl">
                <div className="text-7xl mr-3 font-bold sm:font-medium sm:text-2xl sm:hidden">
                  S
                </div>
                Surgical Procedure
              </div>
              <div className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7">
                <Controller
                  control={form.control}
                  name="diagnosa"
                  render={({ field }) => (
                    <FormField
                      label="Diagnosa"
                      name="diagnosa"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  control={form.control}
                  name="kemajuanTindakan"
                  render={({ field }) => (
                    <FormField
                      label="Kemajuan Tindakan Operasi"
                      name="kemajuanTindakan"
                      value={field.value}
                      onChange={field.onChange}
                      type="textarea"
                    />
                  )}
                />
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Perjalanan Operasi</Label>
                  <Controller
                    control={form.control}
                    name="baruMulai"
                    render={({ field }) => (
                      <CheckboxField
                        label="Baru mulai"
                        name="baruMulai"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="pertengahan"
                    render={({ field }) => (
                      <CheckboxField
                        label="Pertengahan"
                        name="pertengahan"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="hampirSelesai"
                    render={({ field }) => (
                      <CheckboxField
                        label="Hampir selesai"
                        name="hampirSelesai"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="tindakanLainnya"
                    render={({ field }) => (
                      <FormField
                        label="Lainnya"
                        name="tindakanLainnya"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-start items-center gap-3 mb-2">
                  <Label className="block text-gray-700 md:text-xs sm:text-[8px]">
                    Yang perlu diperhatikan pada pasien
                  </Label>
                  <Controller
                    control={form.control}
                    name="alergi"
                    render={({ field }) => (
                      <CheckboxField
                        label="Alergi"
                        name="alergi"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="implant"
                    render={({ field }) => (
                      <CheckboxField
                        label="Implant"
                        name="implant"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="penyakitKronik"
                    render={({ field }) => (
                      <CheckboxField
                        label="Penyakit Kronik"
                        name="penyakitKronik"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="penyakitLainnya"
                    render={({ field }) => (
                      <FormField
                        label="Lainnya"
                        name="penyakitLainnya"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-start items-center gap-2 mb-2">
                  <Controller
                    control={form.control}
                    name="jenisInsisi"
                    render={({ field }) => (
                      <FormField
                        label="Jenis Insisi"
                        name="jenisInsisi"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="areaInsisi"
                    render={({ field }) => (
                      <FormField
                        label="Area"
                        name="areaInsisi"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-start gap-3 mb-2">
                  <Label>Jenis Dressing yang dibutuhkan :</Label>
                  <Controller
                    control={form.control}
                    name="kasa"
                    render={({ field }) => (
                      <CheckboxField
                        label="Kasa"
                        name="kasa"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="khusus"
                    render={({ field }) => (
                      <CheckboxField
                        label="Khusus"
                        name="khusus"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-start gap-2 items-center mb-2">
                  <Label>Hal Khusus yang diperhatikan setelah operasi</Label>
                  <div className="flex gap-x-6 items-center mt-2">
                    <Controller
                      control={form.control}
                      name="tidakAdaHalKhusus"
                      render={({ field }) => (
                        <CheckboxField
                          label="Tidak Ada"
                          name="tidakAdaHalKhusus"
                          checked={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-start gap-2 items-center mb-3">
                  <Label>Rencana perawatan pasca operasi</Label>
                  <Controller
                    control={form.control}
                    name="ruangPemulihan"
                    render={({ field }) => (
                      <CheckboxField
                        label="Ruang Pemulihan"
                        name="ruangPemulihan"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="icu"
                    render={({ field }) => (
                      <CheckboxField
                        label="ICU"
                        name="icu"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="hcu"
                    render={({ field }) => (
                      <CheckboxField
                        label="HCU"
                        name="hcu"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="lainnya"
                    render={({ field }) => (
                      <FormField
                        label="Lainnya"
                        name="lainnya"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Wet */}
            <div className="relative grid gap-4 sm:bg-green-50 sm:leading-tight sm:p-2">
              <div className="text-2xl font-bold uppercase flex sm:text-xl sm:bg-green-50 mt-2 items-center justify-start">
                <div className="text-5xl mr-3 font-bold sm:sr-only">W</div> wet
              </div>
              <div className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7">
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Obat-obatan di meja operasi</Label>
                  <Controller
                    control={form.control}
                    name="namaObat"
                    render={({ field }) => (
                      <FormField
                        label="Nama Obat"
                        name="namaObat"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="jumlahObat"
                    render={({ field }) => (
                      <FormField
                        label="Jumlah"
                        name="jumlahObat"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-start items-center gap-3 mb-2">
                  <Label>Cairan Irigasi</Label>
                  <Controller
                    control={form.control}
                    name="cairan"
                    render={({ field }) => (
                      <FormField
                        label="Nama Cairan"
                        name="cairan"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="hangat"
                    render={({ field }) => (
                      <CheckboxField
                        label="Hangat"
                        name="hangat"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="dingin"
                    render={({ field }) => (
                      <CheckboxField
                        label="Dingin"
                        name="dingin"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="suhuRuangan"
                    render={({ field }) => (
                      <CheckboxField
                        label="Suhu Ruangan"
                        name="suhuRuangan"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-start gap-2 items-center mb-2">
                  <Label>Cairan di Meja Instrumen</Label>
                  <div className="flex gap-x-6 items-center ml-6">
                    <Controller
                      control={form.control}
                      name="adaCairan"
                      render={({ field }) => (
                        <FormField
                          label="Ada"
                          name="adaCairan"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                    <Controller
                      control={form.control}
                      name="tidakAdaInstrumenMeja"
                      render={({ field }) => (
                        <CheckboxField
                          label="Tidak Ada"
                          name="tidakAdaInstrumenMeja"
                          checked={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-start gap-2 items-center mb-2">
                  <Label>Jumlah perdarahan sampai saat ini</Label>
                  <div className="flex gap-x-6 items-center mt-2 ml-6">
                    <Controller
                      control={form.control}
                      name="darah"
                      render={({ field }) => (
                        <FormField
                          label="Darah"
                          name="darah"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-start gap-2 items-center mb-2">
                  <Label>Produksi Urine</Label>
                  <div className="flex gap-x-6 items-center mt-2 ml-6">
                    <Controller
                      control={form.control}
                      name="urine"
                      render={({ field }) => (
                        <FormField
                          label="Jumlah"
                          name="urine"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <Label>Persiapan darah yang tersedia</Label>
                  <Controller
                    control={form.control}
                    name="jumlahDarah"
                    render={({ field }) => (
                      <FormField
                        label="Jumlah"
                        name="jumlahDarah"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="jenisDarah"
                    render={({ field }) => (
                      <FormField
                        label="Jenis Darah"
                        name="jenisDarah"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Drain pasien</Label>
                  <Controller
                    control={form.control}
                    name="letakDrain"
                    render={({ field }) => (
                      <FormField
                        label="Letak Drain"
                        name="letakDrain"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="jenisDrain"
                    render={({ field }) => (
                      <FormField
                        label="Jenis Drain"
                        name="jenisDrain"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="ukuranDrain"
                    render={({ field }) => (
                      <FormField
                        label="Ukuran Drain"
                        name="ukuranDrain"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Instrumen */}
            <div className="relative grid gap-4 sm:bg-red-50 sm:leading-tight sm:p-2">
              <div className="text-2xl font-bold mb-4 uppercase sm:text-md mt-2 flex items-center justify-start">
                <div className="text-5xl mr-3 font-bold sm:hidden md:text-7xl flex items-center justify-start md:block sm:mt-2 sm:text-sm">
                  I
                </div>{" "}
                Instrumen
              </div>
              <div className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7">
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Instrumen yang dipakai</Label>
                  <Controller
                    control={form.control}
                    name="setInstrumen"
                    render={({ field }) => (
                      <FormField
                        label="Set Instrumen"
                        name="setInstrumen"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="lengkap"
                    render={({ field }) => (
                      <CheckboxField
                        label="Lengkap"
                        name="lengkap"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="tidakLengkap"
                    render={({ field }) => (
                      <CheckboxField
                        label="Tidak Lengkap"
                        name="tidakLengkap"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Instrumen Tambahan</Label>
                  <Controller
                    control={form.control}
                    name="instrumenTambahan"
                    render={({ field }) => (
                      <FormField
                        label="Set Instrumen"
                        name="instrumenTambahan"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Instrumen yang selanjutnya dipakai :</Label>
                  <Controller
                    control={form.control}
                    name="instrumenSelanjutnya"
                    render={({ field }) => (
                      <FormField
                        label="Set Instrumen"
                        name="instrumenSelanjutnya"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Instrumen yang akan disterilkan ulang :</Label>
                  <Controller
                    control={form.control}
                    name="instrumenSterilkanUlang"
                    render={({ field }) => (
                      <FormField
                        label="Set Instrumen"
                        name="instrumenSterilkanUlang"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Kebutuhan Implant</Label>
                  <Controller
                    control={form.control}
                    name="jumlah"
                    render={({ field }) => (
                      <FormField
                        label="Jumlah"
                        name="jumlah"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="jenisImplant"
                    render={({ field }) => (
                      <FormField
                        label="Jenis"
                        name="jenisImplant"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Tissue */}
            <div className="relative grid gap-4 sm:leading-tight sm:bg-yellow-50 sm:p-2">
              <div className="text-2xl font-bold uppercase flex items-center justify-start">
                <div className="text-5xl mr-3 font-bold sm:sr-only sm:text-md">T</div>{" "}
                Tissue
              </div>
              <div className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7">
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Specimen :</Label>
                  <Controller
                    control={form.control}
                    name="adaSpecimen"
                    render={({ field }) => (
                      <CheckboxField
                        label="Ada Specimen"
                        name="adaSpecimen"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="tidakAdaSpecimen"
                    render={({ field }) => (
                      <CheckboxField
                        label="Tidak Ada"
                        name="tidakAdaSpecimen"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="sudahDiambil"
                    render={({ field }) => (
                      <CheckboxField
                        label="Sudah diambil"
                        name="sudahDiambil"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="belumDiambil"
                    render={({ field }) => (
                      <CheckboxField
                        label="Belum diambil"
                        name="belumDiambil"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Jenis Pemeriksaan</Label>
                  <Controller
                    control={form.control}
                    name="patologi"
                    render={({ field }) => (
                      <CheckboxField
                        label="Patologi"
                        name="patologi"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="vc"
                    render={({ field }) => (
                      <CheckboxField
                        label="VC"
                        name="vc"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="sitologi"
                    render={({ field }) => (
                      <CheckboxField
                        label="Sitologi"
                        name="sitologi"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="kultur"
                    render={({ field }) => (
                      <CheckboxField
                        label="Kultur"
                        name="kultur"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="jumlahPemeriksaan"
                    render={({ field }) => (
                      <FormField
                        label="Jumlah"
                        name="jumlahPemeriksaan"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Fiksasi Specimen</Label>
                  <Controller
                    control={form.control}
                    name="formalin"
                    render={({ field }) => (
                      <CheckboxField
                        label="Formalin 10%"
                        name="formalin"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="tidakDifiksasi"
                    render={({ field }) => (
                      <CheckboxField
                        label="Tidak difiksasi"
                        name="tidakDifiksasi"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Label Specimen</Label>
                  <Controller
                    control={form.control}
                    name="adaLabel"
                    render={({ field }) => (
                      <CheckboxField
                        label="Ada Label"
                        name="adaLabel"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="tidakAdaLabel"
                    render={({ field }) => (
                      <CheckboxField
                        label="Tidak ada"
                        name="tidakAdaLabel"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-3">
                  <Label>Penggunaan Graft</Label>
                  <Controller
                    control={form.control}
                    name="tidakAdaGraft"
                    render={({ field }) => (
                      <CheckboxField
                        label="Tidak ada"
                        name="tidakAdaGraft"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="adaGraft"
                    render={({ field }) => (
                      <FormField
                        label="Ada, Letak"
                        name="adaGraft"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Counts */}
            <div className="relative grid gap-4 sm:leading-tight sm:bg-blue-50 sm:p-2">
              <div className="text-2xl font-bold mb-4 uppercase flex sm:mt-4 items-center justify-start">
                <div className="text-5xl mr-3 font-bold sm:sr-only sm:text-md sm:mt-2">
                  C
                </div>
                Counts
              </div>
              <div className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7">
                <div className="mb-2 flex justify-start items-center gap-5">
                  <Label>Kassa yang digunakan</Label>
                  <Controller
                    control={form.control}
                    name="jenisKassa"
                    render={({ field }) => (
                      <FormField
                        label="Jenis"
                        name="jenisKassa"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="jumlahKassa"
                    render={({ field }) => (
                      <FormField
                        label="Jumlah"
                        name="jumlahKassa"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-5">
                  <Label>Kassa di rongga tubuh</Label>
                  <Controller
                    control={form.control}
                    name="KasaDalamRongga"
                    render={({ field }) => (
                      <FormField
                        label="Jumlah"
                        name="KasaDalamRongga"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="jenisKassaRongga"
                    render={({ field }) => (
                      <FormField
                        label="Jenis"
                        name="jenisKassaRongga"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="tidakAdaKasa"
                    render={({ field }) => (
                      <CheckboxField
                        label="Tidak ada"
                        name="tidakAdaKasa"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-5">
                  <Label>Jarum</Label>
                  <Controller
                    control={form.control}
                    name="jumlahJarum"
                    render={({ field }) => (
                      <FormField
                        label="Jumlah"
                        name="jumlahJarum"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-5">
                  <Label>Pisau</Label>
                  <Controller
                    control={form.control}
                    name="noPisau"
                    render={({ field }) => (
                      <FormField
                        label="No Pisau"
                        name="noPisau"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="jumlahPisau"
                    render={({ field }) => (
                      <FormField
                        label="Jumlah"
                        name="jumlahPisau"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-5">
                  <Label>Instrumen</Label>
                  <Controller
                    control={form.control}
                    name="jenis"
                    render={({ field }) => (
                      <FormField
                        label="Jenis"
                        name="jenis"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="jumlahInstrumen"
                    render={({ field }) => (
                      <FormField
                        label="Jumlah"
                        name="jumlahInstrumen"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Have Any Question */}
            <div className="relative grid gap-4 sm:p-2 sm:bg-purple-50">
              <div className="text-2xl font-bold mb-4 uppercase flex items-center justify-start">
                <div className="text-5xl mr-3 font-bold">H</div> Have You Any
                Question?
              </div>
              <div className="flex justify-center flex-col border-b-8">
                <div className="mb-2 flex justify-start items-center gap-5">
                  <Label>Hal lain yang ingin ditanyakan</Label>
                  <Controller
                    control={form.control}
                    name="adaPertanyaan"
                    render={({ field }) => (
                      <FormField
                        label="Ada"
                        name="adaPertanyaan"
                        value={field.value}
                        onChange={field.onChange}
                        type="textarea"
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="tidakAdaPertayaan"
                    render={({ field }) => (
                      <CheckboxField
                        label="Tidak ada"
                        name="tidakAdaPertayaan"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-5">
                  <Label>Dokumen yang harus dilengkapi</Label>
                  <Controller
                    control={form.control}
                    name="adaDokumen"
                    render={({ field }) => (
                      <FormField
                        label="Ada"
                        name="adaDokumen"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="tidakAdaDokumen"
                    render={({ field }) => (
                      <CheckboxField
                        label="Tidak ada"
                        name="tidakAdaDokumen"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-2 flex justify-start items-center gap-5">
                  <Label>Nomor serial Implant</Label>
                  <Controller
                    control={form.control}
                    name="nomorSerialImplant"
                    render={({ field }) => (
                      <FormField
                        label="Ada Implan"
                        name="nomorSerialImplant"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="tidakAdaSerialImplant"
                    render={({ field }) => (
                      <CheckboxField
                        label="Tidak ada"
                        name="tidakAdaSerialImplant"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default SerahTerima;