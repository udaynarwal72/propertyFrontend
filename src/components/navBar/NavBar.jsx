import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "@/assets/logo.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute w-full bg-transparent p-4 mt-12 z-40">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Logo" className="h-8 w-8" />
                    <span className="text-white font-semibold text-lg">KRYSTELLE ROMY RESIDENCE</span>
                </div>

                <div className="hidden md:flex space-x-6">
                    {["HOME", "SELL", "BUY", "ACTIVE LISTINGS", "CONTACT", "BLOGS"].map((item) => (
                        <a key={item} href="#" className="text-white hover:underline transition">
                            {item}
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu />
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col bg-black bg-opacity-80 p-4 absolute top-full left-0 w-full">
                    {["HOME", "SELL", "BUY", "ACTIVE LISTINGS", "CONTACT", "BLOGS"].map((item) => (
                        <a key={item} href="#" className="text-white py-2 border-b border-gray-600">
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
