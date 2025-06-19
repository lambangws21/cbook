"use client";

import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function InputField({
  label,
  type = "text",
  name,
  value,
  placeholder,
  required = false,
  id,
  onChange,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = id || name;

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200"
      >
        {label}
      </label>

      <motion.input
        id={inputId}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        animate={{
          boxShadow: isFocused
            ? "0 0 0 3px rgba(59, 130, 246, 0.5)"
            : "0 0 0 0px rgba(59, 130, 246, 0)",
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
}
