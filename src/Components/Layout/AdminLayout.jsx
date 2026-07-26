import { useState } from "react";
import Sidebar from "../../Components/Layout/Sidebar";
import Topbar from "../../Components/Layout/Topbar";

export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile topbar */}
      <div className="w-full md:hidden">
        <Topbar onMenu={() => setMobileOpen(true)} />
      </div>

      {/* Mobile overlay sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative z-50">
            <Sidebar onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <main className="flex-1 p-4 md:p-8 overflow-auto">
        {children}
      </main>

    </div>
  );
}