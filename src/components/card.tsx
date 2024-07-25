import { Card, CardContent } from "./ui/card";

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

const cardPage = ({ children }: cardProps) => {
  return (
    <Card>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};



export default cardPage;
