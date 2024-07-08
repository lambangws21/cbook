interface cardProps {
  children: React.ReactNode;
  
}
// types.ts
export interface TeknikOperasiItem {
  title: string;
  description: string;
}

export interface DiagnosaKeperawatanSDKI {
  SDKI: string[];
  SIKI: {
    pemantauanTekananIntrakranial: {
      observasi: string[];
      terapeutik: string[];
      edukasi: string[];
    };
  };
  SLKI: {
    risikoPerfusiSerebralTidakEfektif: string;
    kapasitasAdaptifIntrakranial: string;
    tingkatPerdarahan: string;
  };
}

export interface LaporanOperasi {
  judul: string;
  operator: string;
  asisten: string;
  instrumen: string;
  mentor: string;
  persiapanAlatKesehatan: string[];
  persiapanInstrument: string[];
  penataanInstrumentMejaOperasi: string[];
  teknikOperasi: TeknikOperasiItem[];
  ringkasanOperasi: string[];
  diagnosaKeperawatan: DiagnosaKeperawatanSDKI;
}

const Card = ({ children }: cardProps) => {
  return (
    <div className="mx-auto w-[223mm] h-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-3xl border border-white border-opacity-10 shadow-lg p-8 mb-4">
      {children}
    </div>
  );
};



export default Card;
