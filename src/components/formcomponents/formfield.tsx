
interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: 'text' | 'textarea';
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, value, onChange, type = 'text', className }) => {
  const inputClassName = `w-full sm:w-41 sm:px-0.5 px-3 sm:py-0.5 py-1 border-inherit rounded-md sm:border-b-slate-200 sm:shadow sm:border-none sm:mb-2 md:text-xs sm:text-[8px] ${className}`;
  const textareaClassName = `w-full px-2 py-1 border-inherit rounded-xl sm:border-b-slate-200 sm:shadow sm:border-none md:text-sm sm:text-[8px] ${className}`;

  return (
    <div className="items-center inline-flex mb-2 sm:gap-3 sm:items-center py-2 sm:py-0.5">
      <label className="w-1/3 sm:w-1/3 text-gray-700 md:text-xs sm:text-[9px] sm:px-1">{label}</label>
      {type === 'text' ? (
        <input
          className={inputClassName}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          className={textareaClassName}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
