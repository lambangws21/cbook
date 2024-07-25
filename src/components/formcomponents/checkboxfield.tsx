import React from 'react';
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, name, checked, onChange }) => {
  return (
    <div className="mb-1 sm:mb-0 sm:text-[9px] flex items-center justify-center">
      <Checkbox
        id={name}
        name={name}
        checked={checked}
        onCheckedChange={onChange} // Note the change here
        className="mr-2 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <Label htmlFor={name}>{label}</Label>
    </div>
  );
};

export default CheckboxField;