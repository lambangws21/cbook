"use client";
import React, { useState, useRef } from "react";
import useFormState from "@/app/hooks/useformstate";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import FormField from "./formfield";
import CheckboxField from "./checkboxfield";
import Header from "./header";
import Footer from "./footer";
import Card from "../card";

const SurgicalProcedureForm: React.FC = () => {
  const { formData, setFormData } = useFormState();
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveAsPDF = () => {
    if (formRef.current) {
      const doc = new jsPDF('p', 'mm', 'a4');

      html2canvas(formRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        doc.save('form.pdf');
      });
    }
  };

  return (
    <Card>
      <form ref={formRef} className="max-w-5xl sm:w-screen sm:p-1 mx-auto p-6 lg:min-w-full lg:p-5">
        <Header />
        <div className="relative grid gap-4 sm:leading-tight sm:bg-yellow-50 sm:p-2 sm:text-start sm:justify-start">
          <div className="text-2xl font-bold sm:text-xs uppercase flex items-center justify-start md:text-xl">
            <div className="text-xl mr-3 font-bold sm:font-medium sm:text-2xl sm:hidden md:block md:text-7xl">
              S
            </div>
            Surgical Procedure
          </div>
          <div className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7 md:ml-20">
            <FormField
              label="Diagnosa"
              name="diagnosa"
              className="text-md sm:text-[9px] py-2 sm:font-bold sm:gap-0 sm:text-wrap"
              type="text"
              value={formData.diagnosa}
              onChange={handleChange}
            />
            <FormField
              label="Kemajuan Tindakan Operasi"
              name="kemajuanTindakan"
              value={formData.kemajuanTindakan}
              onChange={handleChange}
              type="textarea"
            />
            <div className="mb-2 flex justify-start items-center gap-3">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Perjalanan Operasi
              </label>
              <CheckboxField
                label="Baru mulai"
                name="baruMulai"
                checked={formData.baruMulai}
                onChange={handleChange}
              />
              <CheckboxField
                label="Pertengahan"
                name="pertengahan"
                checked={formData.pertengahan}
                onChange={handleChange}
              />
              <CheckboxField
                label="Hampir selesai"
                name="hampirSelesai"
                checked={formData.hampirSelesai}
                onChange={handleChange}
              />
              <FormField
                label="Lainnya"
                name="tindakanLainnya"
                value={formData.tindakanLainnya}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-start items-center gap-3 mb-2">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Yang perlu diperhatikan pada pasien
              </label>
              <CheckboxField
                label="Alergi"
                name="alergi"
                checked={formData.alergi}
                onChange={handleChange}
              />
              <CheckboxField
                label="Implant"
                name="implant"
                checked={formData.implant}
                onChange={handleChange}
              />
              <CheckboxField
                label="Penyakit Kronik"
                name="penyakitKronik"
                checked={formData.penyakitKronik}
                onChange={handleChange}
              />
              <FormField
                label="Lainnya"
                name="penyakitLainnya"
                value={formData.penyakitLainnya}
                onChange={handleChange}
                className=""
              />
            </div>
            <div className="flex justify-start items-center gap-2 mb-2">
              <FormField
                label="Jenis Insisi"
                name="jenisInsisi"
                value={formData.jenisInsisi}
                onChange={handleChange}
              />
              <FormField
                label="Area"
                name="areaInsisi"
                value={formData.areaInsisi}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-start gap-3 mb-2">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Jenis Dressing yang dibutuhkan:
              </label>
              <CheckboxField
                label="Kasa"
                name="kasa"
                checked={formData.kasa}
                onChange={handleChange}
              />
              <CheckboxField
                label="Khusus"
                name="khusus"
                checked={formData.khusus}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-start gap-2 items-center mb-2">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Hal Khusus yang diperhatikan setelah operasi
              </label>
              <div className="flex gap-x-6 items-center mt-2">
                <FormField
                  label="Ada"
                  name="ada"
                  value={formData.ada}
                  onChange={handleChange}
                />
                <CheckboxField
                  label="Tidak Ada"
                  name="tidakAdaHalKhusus"
                  checked={formData.tidakAdaHalKhusus}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-start gap-2 items-center mb-3">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Rencana perawatan pasca operasi
              </label>
              <CheckboxField
                label="Ruang Pemulihan"
                name="ruangPemulihan"
                checked={formData.ruangPemulihan}
                onChange={handleChange}
              />
              <CheckboxField
                label="ICU"
                name="icu"
                checked={formData.icu}
                onChange={handleChange}
              />
              <CheckboxField
                label="HCU"
                name="hcu"
                checked={formData.hcu}
                onChange={handleChange}
              />
              <FormField
                label="Lainnya"
                name="lainnya"
                value={formData.lainnya}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* Wet */}
        {/* <div className="relative grid gap-4 sm:bg-green-50 sm:leading-tight sm:p-2 sm:text-start sm:justify-start">
          <div className="text-2xl font-bold uppercase flex sm:text-xl sm:bg-green-50 mt-2 items-center justify-start ">
            <div className="text-5xl mr-3 font-bold sm:hidden md:block md:text-7xl">
              W
            </div>{" "}
            wet
          </div>
          <div className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7 md:ml-20">
            <div className="mb-2 flex justify-start items-center gap-3">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Obatan-obatan di meja operasi
              </label>
              <FormField
                label="Nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
              />
              <CheckboxField
                label="Obat Kritis"
                name="obatKritis"
                checked={formData.obatKritis}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2 flex justify-start items-center gap-2">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Obat yang digunakan
              </label>
              <FormField
                label="Nama"
                name="obatDigunakan"
                value={formData.obatDigunakan}
                onChange={handleChange}
              />
              <CheckboxField
                label="Dicampur"
                name="dicampur"
                checked={formData.dicampur}
                onChange={handleChange}
              />
              <CheckboxField
                label="Dibuat Oleh perawat"
                name="dibuatPerawat"
                checked={formData.dibuatPerawat}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-start items-center gap-2 mb-3">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Ongoing Check
              </label>
              <CheckboxField
                label="Hampir selesai"
                name="wetHampirSelesai"
                checked={formData.wetHampirSelesai}
                onChange={handleChange}
              />
              <CheckboxField
                label="Baru mulai"
                name="wetBaruMulai"
                checked={formData.wetBaruMulai}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-start items-center gap-2 mb-3">
              <FormField
                label="Catatan Khusus"
                name="catatanKhususWet"
                value={formData.catatanKhususWet}
                onChange={handleChange}
              />
              <CheckboxField
                label="Kritis"
                name="kritis"
                checked={formData.kritis}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-start items-center gap-2 mb-3">
              <CheckboxField
                label="Catatan ini sudah dibaca"
                name="catatanDibaca"
                checked={formData.catatanDibaca}
                onChange={handleChange}
              />
            </div>
          </div>
        </div> */}
        {/* <div className="relative grid gap-4 sm:bg-blue-50 sm:leading-tight sm:p-2 sm:text-start sm:justify-start">
          <div className="text-2xl font-bold uppercase flex sm:text-xl sm:bg-blue-50 mt-2 items-center justify-start ">
            <div className="text-5xl mr-3 font-bold sm:hidden md:block md:text-7xl">
              C
            </div>{" "}
            Check
          </div>
          <div className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7 md:ml-20">
            <div className="mb-2 flex justify-start items-center gap-3">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Penandatangan Form
              </label>
              <FormField
                label="Nama"
                name="namaPenandatangan"
                value={formData.namaPenandatangan}
                onChange={handleChange}
              />
              <CheckboxField
                label="Telah Dikonfirmasi"
                name="telahDikonfirmasi"
                checked={formData.telahDikonfirmasi}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2 flex justify-start items-center gap-2">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Waktu dan Tanggal
              </label>
              <FormField
                label="Waktu"
                name="waktu"
                value={formData.waktu}
                onChange={handleChange}
              />
              <FormField
                label="Tanggal"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-start items-center gap-2 mb-3">
              <label className="block text-gray-700 md:text-xs sm:text-[8px]">
                Catatan khusus
              </label>
              <FormField
                label="Catatan"
                name="catatanKhususCheck"
                value={formData.catatanKhususCheck}
                onChange={handleChange}
              />
            </div>
          </div>
        </div> */}
        <div className="flex justify-end gap-4 mb-4">
          <button
            type="button"
            onClick={handlePrint}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Print
          </button>
          <button
            type="button"
            onClick={handleSaveAsPDF}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save as PDF
          </button>
        </div>
        <Footer />
      </form>
    </Card>
  );
};

export default SurgicalProcedureForm;
