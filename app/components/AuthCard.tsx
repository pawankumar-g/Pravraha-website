"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthCard({ children }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        {children}
      </div>
    </div>
  );
}