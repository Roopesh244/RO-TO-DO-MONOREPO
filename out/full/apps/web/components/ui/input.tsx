"use client";
import React from "react";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};
