// src/hooks/useFormState.ts
import { useState, useEffect } from "react";

const useFormState = () => {
  const [formData, setFormData] = useState({
    diagnosa: "",
    kemajuanTindakan: "",
    perjalananOperasi: "",
    baruMulai: false,
    pertengahan: false,
    hampirSelesai: false,
    lainnya: "",
    alergi: false,
    implant: false,
    penyakitKronik: false,
    xray: false,
    ctscan: false,
    mri: false,
    jenisInsisi: "",
    jenisDressing: "",
    rencanaPerawatan: "",
    halKhusus: "",
    khusus: false,
    area: "",
    areaInsisi: "",
    ruangPemulihan: false,
    kasa: false,
    icu: false,
    hcu: false,
    lainnyaPerawatan: "",
    ada: "",
    jumlah: "",
    jenis: "",
    nama: "",
    cairan: "",
    hangat: false,
    dingin: false,
    suhuRuangan: false,
    darah: "",
    urine: "",
    letakDrain: "",
    ukuranDrain: "",
    jenisDrain: "",
    jenisDarah: "",
    lengkap: false,
    tidakLengkap: false,
    setInstrumen: "",
    sudahDiambil: false,
    belumDiambil: false,
    patologi: false,
    sitologi: false,
    vc: false,
    kultur: false,
    formalin: false,
    adaLabel: false,
    adaSpecimen:false,
    tidakAda: false,
    tidakAdaHalKhusus: false,
    tidakAdaInstrumenMeja: false,
    tidakAdaSpecimen: false,
    tidakAdaGraft: false,
    tidakAdaKasa: false,
    tidakAdaPertayaan: false,
    tidakAdaSerialImplant:false,
    tidakDifiksasi: false,
    tidakAdaLabel: false,
    tidakAdaDokumen: false,
    adaPertanyaan: "",
    nomorSerialImplant: "",
    jenisKassa: "",
    KasaDalamRongga: "",
    jumlahJarum:"",
    noPisau:"",
    jumlahPisau: "",
    instrumenTambahan: "",
    instrumenSelanjutnya: "",
    instrumenSterilkanUlang: "",
    tindakanLainnya: "",
    penyakitLainnya: "",
    adaCairan: "",
    jumlahDarah: "",
    adaGraft: "",
    adaDokumen: "",
    jumlahKassa:"",
    jenisKassaRongga: "",
    jumlahPemeriksaan:"",

  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return { formData, setFormData };
};

export default useFormState;
