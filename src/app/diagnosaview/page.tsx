"use client";

import NursingTable from "@/components/diagnosatabel/page";
import data from "@/components/diagnosatabel/data.json";

const YourComponent: React.FC = () => {
  return (
    <div className="p-4">
      <NursingTable data={data} />
    </div>
  );
};

export default YourComponent;
