"use client";
import Cosmas from "@/app/cosmas/page";
import Erica from "@/app/drerica/page";
import Reinindra from "@/app/Reinindra/page";
import Mariamayasari from "@/app/mariamayasari/page";
import Royanto from "@/app/drroyanto/page";
import Reinaldi from "@/app/reinaldi/page";
import PersiapanAnestesi from "@/app/persiapan-anestesi/page"

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Daftar Operasi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <PersiapanAnestesi/>
        <Cosmas />
        <Reinindra />
        <Mariamayasari />
        <Royanto />
        <Erica />
        <Reinaldi/>
      </div>
    </div>
  );
};

export default HomePage;
