export interface Operation {
    id: string;
    name: string;
    operator: string;
    avatar: string; // URL avatar dokter
    jaminan: string;
    tindakan: string;
    createdAt: string;
    updatedAt: string;
  }  


  export interface cardOperation {
    doctorName: string;
    doctorPhoto: string;
    operationName: string;
    operationLink: string;
}

export interface tindakanHipospadia {
  namaTindakan: string;
  pengertian: string;
  hipospadiaImage: string;
  tipeHipospadia: Array<{
    type: string;
    description: string;
  }>;
  alatMedis: string[];
  tindakan: string[];
}

export interface ReimplantasiUreter{
  judul: string;
  deskripsi: string;
  items: string[];
  index: number;
  alatKesehatanHabisPakai: string;
  persipanInstrumen: string;
  persiapanOperasi: string[];
  tindakan: string;
}

export interface HemoroidData {
  JenisPembiusan: string;
  Asisten: string;
  Instrumentasi: string;
  Deskripsi: string;
  AlatKesehatan: string[];
  Instrumen: string[];
}

