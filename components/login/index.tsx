"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [nomeCadastro, setNomeCadastro] = useState("");
    const [emailCadastro, setEmailCadastro] = useState("");
    const [senhaCadastro, setSenhaCadastro] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [loadingCadastro, setLoadingCadastro] = useState(false);

    const handleLogin = async (e: React.SyntheticEvent) => {
        e.preventDefault(); 
        if (!emailLogin || !senhaLogin) {
            alert("Preencha todos os campos!");
            return;
        }
        setLoadingLogin(true);
        try {
            const resposta = await fetch("https://treinamentoapi.codejr.com.br/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    email: emailLogin,
                    password: senhaLogin,
                }),
            });
            const dados = await resposta.json();
            if (resposta.ok) {
                localStorage.setItem("token-geekpop", dados.token); 
                alert("Login realizado com sucesso!");
                router.push("/gerenciamento");
            } else {
                alert("Credenciais inválidas.");
            }
            setLoadingLogin(false);
        } catch (erro) {
            console.log(erro);
            alert("Deu erro na API");
            setLoadingLogin(false);
        }
    };
    const handleCadastro = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!nomeCadastro || !emailCadastro || !senhaCadastro || !confirmarSenha) {
            alert("Preencha todos os campos!");
            return;
        }
        if (senhaCadastro !== confirmarSenha) {
            alert("Senhas precisam ser iguais!");
            return;
        }
        setLoadingCadastro(true);
        try {
            const resposta = await fetch("https://treinamentoapi.codejr.com.br/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: nomeCadastro,
                    email: emailCadastro,
                    password: senhaCadastro,
                }),
            });
            const dados = await resposta.json();
            if (resposta.ok) {
                localStorage.setItem("token-geekpop", dados.token); 
                alert("Cadastro realizado com sucesso!");
                setIsLogin(true);
            } else {
                alert("Erro ao cadastrar: " + (dados.message || "Verifique os dados."));
            }   
            setLoadingCadastro(false);
        } catch {
            alert("Erro de conexão com o servidor.");
            setLoadingCadastro(false);
        }
    };

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
                <Link href="/" className="flex items-center gap-2 text-[#C0C0C0] hover:text-[#F5F5F5]">
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
                <form onSubmit={handleLogin} className={`w-full md:w-1/2 h-full p-8 md:p-12 flex-col ${isLogin ? "flex" : "hidden md:flex"}`}>
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
                            <input 
                                type="email" 
                                placeholder="seu@email.com" 
                                value={emailLogin}
                                onChange={(e) => setEmailLogin(e.target.value)}
                                className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#1473CD]" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3>Senha</h3>
                            <div className="relative w-full">
                                <input 
                                    type={showLoginPassword ? "text" : "password"} 
                                    placeholder="*******" 
                                    value={senhaLogin}
                                    onChange={(e) => setSenhaLogin(e.target.value)}
                                    className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] w-full pr-10 focus:outline-none focus:border-[#1473CD]" 
                                />
                                <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C0C0C0] hover:text-[#F5F5F5] cursor-pointer">
                                    {showLoginPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <button type="submit" disabled={loadingLogin} className="w-full bg-[#1473CD] hover:bg-[#105DA8] text-[#F5F5F5] font-bold rounded-lg py-3 mt-4 cursor-pointer disabled:opacity-50">
                            {loadingLogin ? "Entrando..." : "Login"}
                        </button>
                    </div>
                </form>
                <form onSubmit={handleCadastro} className={`w-full md:w-1/2 h-full p-8 md:p-12 flex-col ${!isLogin ? "flex" : "hidden md:flex"}`}>
                    <h2 className="text-3xl font-black mb-1">CADASTRO</h2>
                    <p className="text-sm text-[#C0C0C0] mb-8">
                        Faça seu cadastro ou{' '}
                        <span onClick={() => setIsLogin(true)} className="text-[#05AC4B] cursor-pointer hover:underline font-bold">
                            faça login
                        </span>
                    </p>
                    <div className="w-full flex flex-col gap-4 text-[#C0C0C0]">
                        <div className="flex flex-col gap-1">
                            <h3>Nome</h3>
                            <input 
                                type="text" 
                                placeholder="Seu nome Completo" 
                                value={nomeCadastro}
                                onChange={(e) => setNomeCadastro(e.target.value)}
                                className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#05AC4B]" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3>Email</h3>
                            <input 
                                type="email" 
                                placeholder="seu@email.com" 
                                value={emailCadastro}
                                onChange={(e) => setEmailCadastro(e.target.value)}
                                className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#05AC4B]" 
                            />
                        </div>
                        <div className="flex gap-4 w-full">
                            <div className="flex flex-col gap-1 w-1/2">
                                <h3>Senha</h3>
                                <div className="relative w-full">
                                    <input 
                                        type={showRegisterPassword ? "text" : "password"} 
                                        placeholder="*******" 
                                        value={senhaCadastro}
                                        onChange={(e) => setSenhaCadastro(e.target.value)}
                                        className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] w-full pr-10 focus:outline-none focus:border-[#05AC4B]" 
                                    />
                                    <button type="button" onClick={() => setShowRegisterPassword(!showRegisterPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C0C0C0] hover:text-[#F5F5F5] cursor-pointer">
                                        {showRegisterPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 w-1/2">
                                <h3>Confirmar</h3>
                                <div className="relative w-full">
                                    <input 
                                        type={showConfirmPassword ? "text" : "password"} 
                                        placeholder="*******" 
                                        value={confirmarSenha}
                                        onChange={(e) => setConfirmarSenha(e.target.value)}
                                        className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] w-full pr-10 focus:outline-none focus:border-[#05AC4B]" 
                                    />
                                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C0C0C0] hover:text-[#F5F5F5] cursor-pointer">
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <button type="submit" disabled={loadingCadastro} className="w-full bg-[#05AC4B] hover:bg-[#049340] text-[#F5F5F5] font-bold rounded-lg py-3 mt-4 cursor-pointer disabled:opacity-50">
                            {loadingCadastro ? "Cadastrando..." : "Cadastro"}
                        </button>
                    </div>
                </form>
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