import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/app/st_carolus.png";
import FormField from "./formfield";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "../ui/card";

const Header = () => {
  const [dataNama, setDataNama] = useState({
    namaPasien: "",
    noRekamMedis: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setDataNama(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(dataNama));
  }, [dataNama]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setDataNama((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setDataNama((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <header className="flex justify-start container items-center p-5 max-w-fit mx-auto gap-1 w-3/1">
        <div className="sm:hidden w-1/5 md:2/5 lg:block">
          <Image src={Logo} alt="logo" width={500} height={300} />
        </div>
        <div className="flex items-center md:text-xs text-pretty flex-col font-semibold sm:font-normal uppercase text-md w-4/5">
          <div className="xs:text-[8px] sm:text-[10px] text-md w-full text-center lg:text-xl ">
            RUMAH SAKIT ST SINT CAROLUS JAKARTA PUSAT
          </div>
          <div className="text-sm w-full text-center md:text-[10px] sm:mt-1 lg:text-lg sm:leading-normal sm:text-[8px]">
            PANDUAN SERAH TERIMA INTRA OPERASI DI KAMAR OPERASI
          </div>
        </div>
        <Card>
        <CardContent>
          <div className="">
            <Label htmlFor="namaPasien">Nama Pasien</Label>
            <Input
              id="namaPasien"
              name="namaPasien"
              value={dataNama.namaPasien}
              onChange={handleChange}
              className="bg-transparent border-b-slate-400 border-b-2 rounded-none hover:ring-0"
            />
          </div>
          <div className="mt-2">
            <Label htmlFor="noRekamMedis">No RM</Label>
            <Input
              id="noRekamMedis"
              name="noRekamMedis"
              value={dataNama.noRekamMedis}
              onChange={handleChange}
              className="bg-transparent border-b-slate-400 border-b-2 rounded-none hover:ring-0"
            />
            
          </div>
          </CardContent>
        </Card>
      </header>
    </div>
  );
};

export default Header;
