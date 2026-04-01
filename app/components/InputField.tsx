"use client";

import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
}

export default function InputField({
  label,
  type = "text",
  placeholder,
  register,
  error,
}: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}