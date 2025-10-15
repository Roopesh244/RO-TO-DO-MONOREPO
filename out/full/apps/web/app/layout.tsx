// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Ro-To-Do",
  description: "A secure To-Do app built with Next.js + Supabase",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-black to-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
