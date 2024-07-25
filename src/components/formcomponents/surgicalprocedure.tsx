// // src/app/components/SurgicalProcedureForm.tsx
// "use client";
// import React, { useState, useEffect } from "react";
// import useFormState from "@/app/hooks/useformstate";
// import FormField from "./formfield";
// import CheckboxField from "./checkboxfield";
// import Header from "./header";
// import Footer from "./footer";
// import Card from "../card";

// const SurgicalProcedureForm: React.FC = () => {
//   const { formData, setFormData } = useFormState();

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value, type } = e.target;
//     if (type === "checkbox") {
//       const checked = (e.target as HTMLInputElement).checked;
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: checked,
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };
//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <Card>
//       <form className="max-w-md sm:w-screen sm:p-1 mx-auto p-6 bg-white rounded shadow-md lg:min-w-full lg:p-5 ">
//         <Header />
//         <div className="relative grid gap-4 sm:leading-tight sm:bg-yellow-50 sm:p-2 sm:text-start sm:justify-start ">
//           <div className="text-2xl font-bold sm:text-xs  uppercase flex items-center justify-start md:text-xl">
//             <div className="text-7xl mr-3 font-bold sm:font-medium sm:text-2xl sm:sr-only ">
//               S
//             </div>{" "}
//             Surgical Procedure
//           </div>
//           <div className="flex justify-center flex-col border-b-8 ">
//             <FormField
//               label="Diagnosa"
//               name="diagnosa"
//               className="text-md sm:text-[9px] py-2 sm:font-bold sm:gap-0 sm:text-wrap"
//               type="text"
//               value={formData.diagnosa}
//               onChange={handleChange}
//             />
//             <FormField
//               label="Kemajuan Tindakan Operasi"
//               name="kemajuanTindakan"
//               value={formData.kemajuanTindakan}
//               onChange={handleChange}
//               type="textarea"
//             />
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Perjalanan Operasi
//               </label>
//               <CheckboxField
//                 label="Baru mulai"
//                 name="baruMulai"
//                 checked={formData.baruMulai}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Pertengahan"
//                 name="pertengahan"
//                 checked={formData.pertengahan}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Hampir selesai"
//                 name="hampirSelesai"
//                 checked={formData.hampirSelesai}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Lainnya"
//                 name="tindakanLainnya"
//                 value={formData.tindakanLainnya}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex justify-start items-center gap-3 mb-2">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Yang perlu diperhatikan pada pasien
//               </label>
//               <CheckboxField
//                 label="Alergi"
//                 name="alergi"
//                 checked={formData.alergi}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Implant"
//                 name="implant"
//                 checked={formData.implant}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Penyakit Kronik"
//                 name="penyakitKronik"
//                 checked={formData.penyakitKronik}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Lainnya"
//                 name="penyakitLainnya"
//                 value={formData.penyakitLainnya}
//                 onChange={handleChange}
//                 className=""
//               />
//             </div>
//             <div className="flex justify-start items-center gap-2 mb-2">
//               <FormField
//                 label="Jenis Insisi"
//                 name="jenisInsisi"
//                 value={formData.jenisInsisi}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Area"
//                 name="areaInsisi"
//                 value={formData.areaInsisi}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex justify-start  gap-3 mb-2">
//               <label className="block text-gray-700  md:text-xs sm:text-[8px]">
//                 Jenis Dressing yanng dibutuhkan :
//               </label>
//               <CheckboxField
//                 label="Kasa"
//                 name="kasa"
//                 checked={formData.kasa}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Khusus"
//                 name="khusus"
//                 checked={formData.khusus}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex justify-start gap-2 items-center mb-2">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Hal Khusus yang diperhatikan setelah operasi
//               </label>
//               <div className="flex gap-x-6 items-center mt-2">
//                 <FormField
//                   label="Ada"
//                   name="ada"
//                   value={formData.ada}
//                   onChange={handleChange}
//                 />
//                 <CheckboxField
//                   label="Tidak Ada"
//                   name="tidakAdaHalKhusus"
//                   checked={formData.tidakAdaHalKhusus}
//                   onChange={handleChange}
//                 />
//               </div>
//               Surgical Procedure
//             </div>
//             <div
//               className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7 
//         md:ml-20"
//             >
//               <FormField
//                 label="Diagnosa"
//                 name="diagnosa"
//                 className="text-md sm:text-[9px] py-2 sm:font-bold sm:gap-0 sm:text-wrap"
//                 type="text"
//                 value={formData.diagnosa}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Kemajuan Tindakan Operasi"
//                 name="kemajuanTindakan"
//                 value={formData.kemajuanTindakan}
//                 onChange={handleChange}
//                 type="textarea"
//               />
//               <div className="mb-2 flex justify-start items-center gap-3 ">
//                 <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                   Perjalanan Operasi
//                 </label>
//                 <CheckboxField
//                   label="Baru mulai"
//                   name="baruMulai"
//                   checked={formData.baruMulai}
//                   onChange={handleChange}
//                 />
//                 <CheckboxField
//                   label="Pertengahan"
//                   name="pertengahan"
//                   checked={formData.pertengahan}
//                   onChange={handleChange}
//                 />
//                 <CheckboxField
//                   label="Hampir selesai"
//                   name="hampirSelesai"
//                   checked={formData.hampirSelesai}
//                   onChange={handleChange}
//                 />
//                 <FormField
//                   label="Lainnya"
//                   name="tindakanLainnya"
//                   value={formData.tindakanLainnya}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex justify-start items-center gap-3 mb-2">
//                 <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                   Yang perlu diperhatikan pada pasien
//                 </label>
//                 <CheckboxField
//                   label="Alergi"
//                   name="alergi"
//                   checked={formData.alergi}
//                   onChange={handleChange}
//                 />
//                 <CheckboxField
//                   label="Implant"
//                   name="implant"
//                   checked={formData.implant}
//                   onChange={handleChange}
//                 />
//                 <CheckboxField
//                   label="Penyakit Kronik"
//                   name="penyakitKronik"
//                   checked={formData.penyakitKronik}
//                   onChange={handleChange}
//                 />
//                 <FormField
//                   label="Lainnya"
//                   name="penyakitLainnya"
//                   value={formData.penyakitLainnya}
//                   onChange={handleChange}
//                   className=""
//                 />
//               </div>
//               <div className="flex justify-start items-center gap-2 mb-2">
//                 <FormField
//                   label="Jenis Insisi"
//                   name="jenisInsisi"
//                   value={formData.jenisInsisi}
//                   onChange={handleChange}
//                 />
//                 <FormField
//                   label="Area"
//                   name="areaInsisi"
//                   value={formData.areaInsisi}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex justify-start  gap-3 mb-2">
//                 <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                   Jenis Dressing yanng dibutuhkan :
//                 </label>
//                 <CheckboxField
//                   label="Kasa"
//                   name="kasa"
//                   checked={formData.kasa}
//                   onChange={handleChange}
//                 />
//                 <CheckboxField
//                   label="Khusus"
//                   name="khusus"
//                   checked={formData.khusus}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex justify-start gap-2 items-center mb-2">
//                 <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                   Hal Khusus yang diperhatikan setelah operasi
//                 </label>
//                 <div className="flex gap-x-6 items-center mt-2">
//                   <FormField
//                     label="Ada"
//                     name="ada"
//                     value={formData.ada}
//                     onChange={handleChange}
//                   />
//                   <CheckboxField
//                     label="Tidak Ada"
//                     name="tidakAdaHalKhusus"
//                     checked={formData.tidakAdaHalKhusus}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-start  gap-2 items-center mb-3">
//                 <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                   Rencana perawatan pasca operasi
//                 </label>
//                 <CheckboxField
//                   label="Ruang Pemulihan"
//                   name="ruangPemulihan"
//                   checked={formData.ruangPemulihan}
//                   onChange={handleChange}
//                 />
//                 <CheckboxField
//                   label="ICU"
//                   name="icu"
//                   checked={formData.icu}
//                   onChange={handleChange}
//                 />
//                 <CheckboxField
//                   label="HCU"
//                   name="hcu"
//                   checked={formData.hcu}
//                   onChange={handleChange}
//                 />
//                 <FormField
//                   label="Lainnya"
//                   name="lainnya"
//                   value={formData.lainnya}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Wet */}
//         <div className="relative grid gap-4 sm:bg-green-50 sm:leading-tight sm:p-2 sm:text-start sm:justify-start">
//           <div className="text-2xl font-bold uppercase flex sm:text-xl sm:bg-green-50 mt-2 items-center justify-start ">
//             <div className="text-5xl mr-3 font-bold sm:hidden md:block md:text-7xl ">
//               W
//             </div>{" "}
//             wet
//           </div>
//           <div
//             className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7 
//         md:ml-20 "
//           >
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Obatan-obatan di meja operasi
//               </label>
//               <FormField
//                 label="Nama"
//                 name="nama"
//                 value={formData.nama}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Jumlah"
//                 name="jumlah"
//                 value={formData.jumlah}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex justify-start items-center  gap-3 mb-2">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Cairan Irigasi
//               </label>
//               <FormField
//                 label="Nama Cairan"
//                 name="cairan"
//                 value={formData.cairan}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Hangat"
//                 name="hangat"
//                 checked={formData.hangat}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Dingin"
//                 name="dingin"
//                 checked={formData.dingin}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Suhu Ruagan"
//                 name="suhuRuangan"
//                 checked={formData.suhuRuangan}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex justify-start gap-2 items-center mb-2">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Cairan di Meja instrument
//               </label>
//               <div className="flex gap-x-6 items-center ml-6">
//                 <FormField
//                   label="Ada"
//                   name="adaCairan"
//                   value={formData.adaCairan}
//                   onChange={handleChange}
//                 />
//                 <CheckboxField
//                   label="Tidak Ada"
//                   name="tidakAdaInstrumentMeja"
//                   checked={formData.tidakAdaInstrumenMeja}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-start gap-2 items-center mb-2">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Jumlah perdarahan sampai saat ini
//               </label>
//               <div className="flex gap-x-6 items-center mt-2 ml-6">
//                 <FormField
//                   label="Darah"
//                   name="darah"
//                   value={formData.darah}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-start gap-2 items-center mb-2">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Produksi Urine
//               </label>
//               <div className="flex gap-x-6 items-center mt-2 ml-6">
//                 <FormField
//                   label="Jumlah"
//                   name="urine"
//                   value={formData.urine}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className=" flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Persiapan darah yang tersedia
//               </label>
//               <FormField
//                 label="Jumlah"
//                 name="jumlahDarah"
//                 value={formData.jumlahDarah}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Jenis"
//                 name="jenis"
//                 value={formData.jenisDarah}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Drain pasien
//               </label>
//               <FormField
//                 label="Letak Drain"
//                 name="letakDrain"
//                 value={formData.letakDrain}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Jenis Drain"
//                 name="jenis"
//                 value={formData.jenisDrain}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Ukuran Drain"
//                 name="ukuranDrain"
//                 value={formData.ukuranDrain}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//         </div>
//         {/* Instrumen */}
//         <div className="relative grid gap-4 sm:bg-red-50 sm:leading-tight sm:p-2 sm:text-start sm:justify-start">
//           <div className="text-2xl font-bold mb-4 uppercase sm:text-md mt-2 flex items-center justify-start  ">
//             <div className="text-5xl mr-3 font-bold sm:hidden md:block md:text-7xl sm:mt-2 sm:text-sm">
//               I
//             </div>{" "}
//             Instrumen
//           </div>

//           <div
//             className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7 
//         md:ml-20 "
//           >
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Instrumen yang dipakai
//               </label>
//               <FormField
//                 label="Set Instrumen"
//                 name="namaSetInstrumen"
//                 value={formData.setInstrumen}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Lengkap"
//                 name="lengkap"
//                 checked={formData.lengkap}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Tidak Lengkap"
//                 name="tidakLengkap"
//                 checked={formData.tidakLengkap}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Instrumen Tambahan
//               </label>
//               <FormField
//                 label="Set Instrumen"
//                 name="instrumenTambahan"
//                 value={formData.instrumenTambahan}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700  md:text-xs sm:text-[8px]">
//                 Instrumen yang selanjutnya dipakai :
//               </label>
//               <FormField
//                 label="Set Instrumen"
//                 name="instrumenSelanjutnya"
//                 value={formData.instrumenSelanjutnya}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700  md:text-xs sm:text-[8px]">
//                 Instrumen yang akan disterilkan ulang :
//               </label>
//               <FormField
//                 label="Set Instrumen"
//                 name="instrumenSterilkanUlang"
//                 value={formData.instrumenSterilkanUlang}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Kebutuhan Implant
//               </label>
//               <FormField
//                 label="Jumlah"
//                 name="jumlah"
//                 value={formData.jumlah}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Jenis"
//                 name="jenis"
//                 value={formData.jenisDarah}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//         </div>
//         {/* Tissue */}
//         <div className="relative grid gap-4 sm:leading-tight sm:bg-yellow-50 sm:p-2 sm:text-start sm:justify-start">
//           <div className="text-2xl font-bold uppercase flex items-center justify-start ">
//             <div className="text-5xl mr-3 font-bold sm:hidden md:block md:text-7xl sm:text-md ">
//               T
//             </div>{" "}
//             Tissue
//           </div>
//           <div
//             className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7 
//         md:ml-20 "
//           >
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Specimen :
//               </label>
//               <CheckboxField
//                 label="Ada Specimen"
//                 name="adaSpecimen"
//                 checked={formData.adaSpecimen}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Tidak Ada"
//                 name="tidakAdaSpecimen"
//                 checked={formData.tidakAdaSpecimen}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Sudah diambil"
//                 name="sudahDiambil"
//                 checked={formData.sudahDiambil}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Belum diambil"
//                 name="belumDiambil"
//                 checked={formData.belumDiambil}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Jenis Pemeriksaan
//               </label>
//               <CheckboxField
//                 label="Patologi"
//                 name="patologi"
//                 checked={formData.patologi}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="VC"
//                 name="vc"
//                 checked={formData.vc}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Sitologi"
//                 name="sitologi"
//                 checked={formData.sitologi}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Kultur"
//                 name="kultur"
//                 checked={formData.kultur}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Jumlah"
//                 name="jumlahPemriksaan"
//                 className="text-sm sm:text-[8px] sm:mt-2"
//                 value={formData.jumlahPemeriksaan}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px]">
//                 Fiksasi Specimen
//               </label>
//               <CheckboxField
//                 label="Formalin 10%"
//                 name="formalin"
//                 checked={formData.formalin}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Tidak difikasasi"
//                 name="tidakDifikasasi"
//                 checked={formData.tidakDifiksasi}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Label Specimen
//               </label>
//               <CheckboxField
//                 label="Ada Label"
//                 name="adaLabel"
//                 checked={formData.adaLabel}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Tidak ada"
//                 name="tidakAdaLabel"
//                 checked={formData.tidakAdaLabel}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-3 ">
//               <label className="block text-gray-700  md:text-xs sm:text-[8px]">
//                 Penggunaan Graft
//               </label>
//               <CheckboxField
//                 label="Tidak ada"
//                 name="tidakAdaGraft"
//                 checked={formData.tidakAdaGraft}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Ada,Letak"
//                 name="adaFraft"
//                 value={formData.adaGraft}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//         </div>
//         {/* Counts */}
//         <div className="relative grid gap-4 sm:leading-tight sm:bg-blue-50 sm:p-2 sm:text-start sm:justify-start">
//           <div className="text-2xl font-bold mb-4 uppercase flex sm:mt-4 items-center justify-start ">
//             <div className="text-5xl mr-3 font-bold sm:hidden md:block md:text-7xl sm:text-md sm:mt-2">
//               C
//             </div>
//             Counts
//           </div>

//           <div
//             className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7 
//         md:ml-20 "
//           >
//             <div className="mb-2 flex justify-start items-center gap-5 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Kassa yang digunanakan
//               </label>
//               <FormField
//                 label="Jenis"
//                 name="jenisKassa"
//                 className="text-sm sm:text-[8px]"
//                 value={formData.jenisKassa}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Jumlah"
//                 name="jumlahsKassa"
//                 className="text-sm sm:text-[8px]"
//                 value={formData.jumlahKassa}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-5 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Kassa dirongga tubuh
//               </label>
//               <FormField
//                 label="Jumlah"
//                 name="KasaDalamRongga"
//                 value={formData.KasaDalamRongga}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Jeni"
//                 name="jenisKassaRongga"
//                 className="text-sm sm:text-[8px]"
//                 value={formData.jenisKassaRongga}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Tidak ada"
//                 name="tidakAdaKasa"
//                 checked={formData.tidakAdaKasa}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-5 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Jarum
//               </label>
//               <FormField
//                 label="Jumlah"
//                 name="jumlahJarum"
//                 value={formData.jumlahJarum}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-5 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Pisau
//               </label>
//               <FormField
//                 label="No Pisau"
//                 name="noPisau"
//                 value={formData.noPisau}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Jumlah"
//                 name="jumlahPisau"
//                 value={formData.jumlahPisau}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-5 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Instrument
//               </label>
//               <FormField
//                 label="Jenis "
//                 name="jenis"
//                 value={formData.jenis}
//                 onChange={handleChange}
//               />
//               <FormField
//                 label="Jumlah"
//                 name="jumlah"
//                 value={formData.jumlah}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Have Any Question */}
//         <div className="relative grid gap-4 sm:p-2 sm:bg-purple-50 sm:justify-start">
//           <div className="text-2xl font-bold mb-4 uppercase flex items-center justify-start ">
//             <div className="text-5xl mr-3 font-bold">H</div> Have You Any
//             Question?
//           </div>

//           <div
//             className="flex justify-center flex-col border-b-8 max-w-full mx-auto p-7 
//         md:ml-20 "
//           >
//             <div className="mb-2 flex justify-start items-center gap-5 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Hal lain yang ingin di tanyakan
//               </label>
//               <FormField
//                 label="Ada"
//                 name="adaPertanyaan"
//                 value={formData.adaPertanyaan}
//                 onChange={handleChange}
//                 type="textarea"
//               />
//               <CheckboxField
//                 label="Tidak ada"
//                 name="tidakAdaPertanyaan"
//                 checked={formData.tidakAdaPertayaan}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-5 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Dokumen yang harus dilengkapi
//               </label>
//               <FormField
//                 label="Ada"
//                 name="adaDokumen"
//                 value={formData.adaDokumen}
//                 onChange={handleChange}
//               />
//               <CheckboxField
//                 label="Tidak ada"
//                 name="tidakAdaDokumen"
//                 checked={formData.tidakAdaDokumen}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-2 flex justify-start items-center gap-5 ">
//               <label className="block text-gray-700 md:text-xs sm:text-[8px] ">
//                 Nomor serial Implant
//               </label>
//               <FormField
//                 label="Ada Implan"
//                 name="nomorSerialImplant"
//                 value={formData.nomorSerialImplant}
//                 onChange={handleChange}
//                 className="text-nowrap"
//               />
//               <CheckboxField
//                 label="Tidak ada"
//                 name="tidakAdaSerialImplant"
//                 checked={formData.tidakAdaSerialImplant}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//         </div>
//         <Footer />
//         <div className="flex justify-center mt-4">
//           <button
//             onClick={handlePrint}
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Print
//           </button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default SurgicalProcedureForm;
