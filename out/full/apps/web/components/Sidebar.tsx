"use client";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-4 hidden lg:block h-full">
      <ul className="space-y-4 text-gray-300">
        <li className="hover:text-white cursor-pointer">Dashboard</li>
        <li className="hover:text-white cursor-pointer">Profile</li>
        <li className="hover:text-white cursor-pointer">Settings</li>
      </ul>
    </aside>
  );
}
