"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter} from "next/navigation";
import { ChevronRight, ChevronLeft, Home, Package, LogOut } from "lucide-react";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem("token-geekpop");
        localStorage.removeItem("nome-geekpop");
        router.push("/"); 
    };

    return (
        <div className={`bg-[#171A1D] border-r border-[#3B3B40] transition-all duration-300 ease-in-out flex flex-col shrink-0 ${isExpanded ? "w-64" : "w-20"}`}>
            <div className={`flex items-center p-4 border-b border-[#3B3B40] h-18 ${isExpanded ? "justify-between" : "justify-center"}`}>
                {isExpanded && (
                    <div className="flex items-center gap-2">
                        <div className="text-[#1473CD]">
                            <Package size={30} />
                        </div>
                        <div className="text-2xl font-black flex text-[#F5F5F5]">
                            GEEK <span className="text-[#1473CD]">POP</span>
                        </div>
                    </div>
                )}
                <button onClick={() => setIsExpanded(!isExpanded)}className="bg-[#0D0F11] p-1.5 rounded-md border border-[#3B3B40] text-[#C0C0C0] hover:text-[#F5F5F5] cursor-pointer">
                    {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </button>
            </div>
            <div className="flex-1 flex flex-col gap-6 p-4 mt-4 justify-between">
                <div className="flex-1 flex flex-col gap-6 mt-4 ">
                    <Link href="/" className={`flex items-center hover:text-[#1473CD] ${isExpanded ? "justify-start px-4 gap-4" : "justify-center"}`}>
                        <div className="min-w-6 flex justify-center">
                            <Home size={24} />
                        </div>
                        {isExpanded && <span className="font-bold">Home</span>}
                    </Link>
                    <Link href="/produtos" className={`flex items-center hover:text-[#1473CD] ${isExpanded ? "justify-start px-4 gap-4" : "justify-center"}`}>
                        <div className="min-w-6 flex justify-center">
                            <Package size={24} />
                        </div>
                        {isExpanded && <span className="font-bold">Produtos</span>}
                    </Link>
                </div>
                <div className="pb-4">
                    <button onClick={handleLogout} className={`w-full flex items-center hover:text-[#BE123C] text-[#E11D48] cursor-pointer ${isExpanded ? "justify-start px-4 gap-4" : "justify-center"}`}>
                        <div className="min-w-6 flex justify-center">
                            <LogOut size={24} />
                        </div>
                        {isExpanded && <span className="font-bold">LogOut</span>}
                    </button>
                </div>
            </div>
        </div>
    );
}