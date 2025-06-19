"use client";

import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";

interface AnimatedSelectProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  className?: string;
}

export default function AnimatedSelect({
  label,
  id,
  value,
  onChange,
  options,
  className = "",
}: AnimatedSelectProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1"
      >
        {label}
      </label>
      <motion.select
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          block w-full px-4 py-2 border text-sm rounded-lg appearance-none shadow-md
          transition-all duration-300
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-500 focus:outline-none
          ${className}
        `}
        animate={{
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused
            ? "0 0 0 4px rgba(59, 130, 246, 0.5)"
            : "0 0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </motion.select>
    </div>
  );
}
