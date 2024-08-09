"use client";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3667269883.
import Cosmas from "@/app/(operation)/cosmas/page";
import Erica from "@/app/(operation)/drerica/page";
import Reinindra from "@/app/(operation)/Reinindra/page";
import Mariamayasari from "@/app/(operation)/mariamayasari/page";
import Royanto from "@/app/(operation)/drroyanto/page";
import Reinaldi from "@/app/(operation)/reinaldi/page";
import Wawo from "@/app/(operation)/drwawo/page";
import PersiapanAnestesi from "@/app/(operation)/persiapan-anestesi/page";
import AndrewJackson from "@/app/(operation)/andrewJackson/page"
import Iskandar from "@/app/(operation)/iskandar/page"


const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Daftar Operasi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       <PersiapanAnestesi />
       <AndrewJackson/>
        <Cosmas />
        <Reinindra />
        <Iskandar/>
        <Mariamayasari />
        <Royanto />
        <Erica />
        <Reinaldi/>
        <Wawo/>
      </div>
    </div>
  );
};

export default HomePage;
