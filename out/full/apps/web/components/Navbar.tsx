"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-400">ToDoApp</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition"
      >
        Logout
      </button>
    </nav>
  );
}
