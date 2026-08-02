"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package, Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="w-full min-h-screen px-6 text-[#F5F5F5] flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 -z-10">
                <Image 
                    src="/bg-funkos.png"
                    alt="Parede de Funkos"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority 
                />
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            </div>
            <div className="absolute top-8 left-8">
                <Link href="/" className="flex items-center gap-2 text-[#C0C0C0] hover:text-[#F5F5F5] transition-colors">
                    <ArrowLeft size={20} />
                    <span className="hidden md:inline">Voltar para a Página Inicial</span>
                </Link>
            </div>
            <div className="flex items-center gap-2 mb-4">
                <Link href="/" className="flex items-center text-[#1473CD]">
                    <Package size={30} />
                </Link>
                <Link href="/" className="text-2xl font-black tracking-tight flex">
                    GEEK <span className="text-[#1473CD]">POP</span>
                </Link>        
            </div>
            <div className="relative w-full max-w-4xl h-auto md:min-h-135 bg-[#171A1D] rounded-2xl border border-[#3B3B40] overflow-hidden flex flex-col md:flex-row">
                <div className={`w-full md:w-1/2 h-full p-8 md:p-12 flex-col ${isLogin ? "flex" : "hidden md:flex"}`}>
                    <h2 className="text-3xl font-black mb-1">LOGIN</h2>
                    <p className="text-sm text-[#C0C0C0] mb-8">
                        Entre na sua conta ou{' '}
                        <span onClick={() => setIsLogin(false)} className="text-[#1473CD] cursor-pointer hover:underline font-bold">
                            registre-se
                        </span>
                    </p>
                    <div className="w-full flex flex-col gap-4 text-[#C0C0C0]">
                        <div className="flex flex-col gap-1">
                            <h3>Email</h3>
                            <input type="email" placeholder="seu@email.com" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40]" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3>Senha</h3>
                            <div className="relative w-full">
                                <input type={showLoginPassword ? "text" : "password"} placeholder="*******" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] w-full pr-10" />
                                <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C0C0C0] hover:text-white transition-colors">
                                    {showLoginPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="w-full bg-[#1473CD] hover:bg-[#105DA8] transition-colors font-bold rounded-lg py-3 mt-4 cursor-pointer">
                            Login
                        </button>
                    </div>
                </div>
                <div className={`w-full md:w-1/2 h-full p-8 md:p-12 flex-col ${!isLogin ? "flex" : "hidden md:flex"}`}>
                    <h2 className="text-3xl font-black mb-1">CADASTRO</h2>
                    <p className="text-sm text-[#C0C0C0] mb-8">
                        Faça seu cadastro ou{' '}
                        <span onClick={() => setIsLogin(true)} className="text-[#1473CD] cursor-pointer hover:underline font-bold">
                            faça login
                        </span>
                    </p>
                    <div className="w-full flex flex-col gap-4 text-[#C0C0C0]">
                        <div className="flex flex-col gap-1">
                            <h3>Nome</h3>
                            <input type="nome" placeholder="Seu nome Completo" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40]" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3>email</h3>
                            <input type="email" placeholder="seu@email.com" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40]" />
                        </div>
                        <div className="flex gap-4 w-full">
                            <div className="flex flex-col gap-1 w-1/2">
                                <h3>Senha</h3>
                                <div className="relative w-full">
                                    <input type={showRegisterPassword ? "text" : "password"} placeholder="*******" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] w-full pr-10" />
                                    <button type="button" onClick={() => setShowRegisterPassword(!showRegisterPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C0C0C0] hover:text-white transition-colors">
                                        {showRegisterPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 w-1/2">
                                <h3>Confirmar</h3>
                                <div className="relative w-full">
                                    <input type={showConfirmPassword ? "text" : "password"} placeholder="*******" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] w-full pr-10" />
                                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C0C0C0] hover:text-white transition-colors">
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="w-full bg-[#05AC4B] hover:bg-[#049340] transition-colors font-bold rounded-lg py-3 mt-4 cursor-pointer">
                            Cadastro
                        </button>
                    </div>
                </div> 
                <div 
                    className={`hidden md:flex absolute top-0 left-0 w-1/2 h-full bg-[#171A1D] border-x border-[#171A1D] transition-transform duration-700 ease-in-out z-10 overflow-hidden ${isLogin ? "translate-x-full" : "translate-x-0"}`}>    
                    <Image 
                        src="/teste.png" 
                        alt="Caixa surpresa GeekPop com Funkos"
                        fill
                        sizes="50vw"
                        className="object-cover p-8"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}