"use client";
import React from "react";

type CardProps = {
  className?: string;
};

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ children, className }) => {
  return <div className={`bg-white rounded shadow p-4 ${className}`}>{children}</div>;
};

export const CardContent: React.FC<React.PropsWithChildren<CardProps>> = ({ children, className }) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};