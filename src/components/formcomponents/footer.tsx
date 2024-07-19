import { useState, useEffect } from "react";
import FormField from "./formfield";


const Header = () => {
  const [dataNama,setDataNama] = useState({
    penerimaInformasi : "",
    pemberiInformasi : "",
  })
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
    <div className="items-center inline-flex mb-2 py-2 justify-between gap-20 mx-auto mt-8 text-nowrap">
      <FormField
        label="Pemberi Informasi"
        name="pemberiInformasi"
        value={dataNama.pemberiInformasi}
        onChange={handleChange}
        type="text"
      />
      <FormField
        label="Penerima Informasi"
        name="penerimaInformasi"
        value={dataNama.penerimaInformasi}
        onChange={handleChange}
        type="text"
      />
    </div>
  );
};

export default Header;
