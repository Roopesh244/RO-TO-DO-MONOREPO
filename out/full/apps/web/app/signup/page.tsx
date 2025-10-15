"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // 1. Create Auth user
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setLoading(false);
      return toast.error(signUpError.message);
    }

    // 2. Insert into profiles table
    const { error: profileError } = await supabase.from("profiles").insert({
      id: signUpData.user?.id,
      full_name: fullName,
    });

    setLoading(false);
    if (profileError) return toast.error(profileError.message);

    toast.success("Sign up successful!");
    router.push("/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-br from-black to-gray-900 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-gray-900 bg-opacity-90 p-5 sm:p-6 rounded-xl w-full max-w-xs sm:max-w-sm shadow-lg shadow-blue-500/40 transition-transform transform hover:-translate-y-1 hover:scale-[1.02]">

        <div className="text-center mb-5">
          <Image src="/assets/llogo.png" alt="Logo" width={60} height={60} className="mx-auto rounded-full shadow-glow animate-pulse-slow"/>
          <h1 className="text-2xl sm:text-3xl font-bold mt-1 text-blue-400 glow-text animate-pulse-slow">Ro-To-Do</h1>
          <p className="text-gray-400 text-sm sm:text-base">Create a new account to get started.</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-3 sm:space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-800 text-white glowing-input focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-800 text-white glowing-input focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-800 text-white glowing-input focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium glowing-button hover:bg-blue-600 transition-transform hover:scale-105"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm sm:text-base text-gray-400 mt-4 sm:mt-5">
          Already have an account? <a href="/login" className="text-blue-400 hover:underline ml-1">Log in here</a>.
        </p>
      </div>

      <style jsx>{`
        .glow-text { text-shadow: 0 0 6px rgba(59,130,246,0.7), 0 0 12px rgba(59,130,246,0.5); }
        .shadow-glow { box-shadow: 0 4px 12px rgba(59,130,246,0.4), 0 0 12px rgba(59,130,246,0.3); }
        .glowing-input { box-shadow: inset 0 2px 4px rgba(59,130,246,0.2), 0 0 8px rgba(59,130,246,0.15); }
        .glowing-button { box-shadow: 0 4px 15px rgba(59,130,246,0.6), 0 0 10px rgba(59,130,246,0.3); }
        @keyframes pulse-slow { 0%,100% { box-shadow:0 0 6px rgba(59,130,246,0.6),0 0 12px rgba(59,130,246,0.4);} 50% { box-shadow:0 0 12px rgba(59,130,246,0.9),0 0 24px rgba(59,130,246,0.6);} }
        .animate-pulse-slow { animation: pulse-slow 2.5s infinite; }
      `}</style>
    </div>
  );
}
