import { Link } from "react-router-dom";

export default function Sidebar({ className = "", onClose }) {
    return (
        <div
            className={`w-72 min-h-screen bg-black text-white ${className}`}
            role="navigation"
        >
            <div className="flex items-center justify-between p-4 md:p-8">
                <h1 className="text-2xl font-bold">Avanor Admin</h1>

                {onClose && (
                    <button
                        onClick={onClose}
                        aria-label="Close menu"
                        className="md:hidden text-white p-2 rounded hover:bg-white/10"
                    >
                        ✕
                    </button>
                )}
            </div>

            <nav className="flex flex-col">
                <Link to="/admin" className="px-8 py-4 hover:bg-gray-800">
                    Dashboard
                </Link>

                <Link to="/admin/create" className="px-8 py-4 hover:bg-gray-800">
                    Create Article
                </Link>
            </nav>
        </div>
    );
}