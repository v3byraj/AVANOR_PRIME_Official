import React from "react";

export default function Topbar({ onMenu }) {
  return (
    <header className="w-full bg-white border-b md:hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenu}
            aria-label="Open menu"
            className="p-2 rounded hover:bg-gray-100"
          >
            ☰
          </button>

          <div className="text-lg font-semibold">Avanor Admin</div>
        </div>
      </div>
    </header>
  );
}
