"use client";
import Link from "next/link";
import { MapPin, Phone, Mail} from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValue, formSchema } from "@/schema/form";

export default function ContatoPage() {
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copiado para a área de transferência!`);
  };  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValue>({resolver: zodResolver(formSchema), defaultValues: {
      nome: "",
      email: "",
      assunto: "",
      mensagem: ""
    }});

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! Em breve retornaremos.");
        reset();
      } else {
        const errorData = await response.json();
        console.error("Erro detalhado do Resend:", errorData);
        alert("Ocorreu um erro ao enviar.");
      }
    } catch (error) {
      console.error("Erro de requisição:", error);
      alert("Ocorreu um erro inesperado.");
    }
  };

  return (
    <div className="w-full bg-[#0D0F11] min-h-screen py-16 text-[#F5F5F5] flex justify-center">
        <div className="w-full px-6 md:w-10/12 md:px-0 max-w-6xl">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-black mb-4">FALE CONOSCO</h1>
                <p className="text-[#C0C0C0] max-w-xl mx-auto">Tem alguma dúvida, sugestão ou precisa de ajuda com seu pedido? Nossa equipe de especialistas está pronta para ajudar você.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#171A1D] rounded-2xl p-8 border border-[#3B3B40] flex flex-col gap-6">
                    <h2 className="text-2xl font-bold mb-4">Envie uma Mensagem</h2>    
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <h3>Nome</h3>
                            <input {...register("nome")} type="text" placeholder="Seu nome completo" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40]" />
                            {errors.nome && <span className="text-red-500 text-sm">{errors.nome?.message}</span>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3>Email</h3>
                            <input {...register("email")} type="email" placeholder="seu@email.com" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40]" />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email?.message}</span>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3>Assunto</h3>
                            <input {...register("assunto")} type="text" placeholder="Qual o motivo do contato?" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40]" />
                            {errors.assunto && <span className="text-red-500 text-sm">{errors.assunto?.message}</span>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3>Mensagem</h3>
                            <textarea {...register("mensagem")} placeholder="Escreva sua mensagem aqui" rows={5} className="p-3 resize-none bg-[#0D0F11] rounded-lg border border-[#3B3B40]" />
                            {errors.mensagem && <span className="text-red-500 text-sm">{errors.mensagem?.message}</span>}
                        </div>
                        
                        <button type="submit" className="w-full bg-[#05AC4B] hover:bg-[#049340] transition-colors font-bold rounded-lg py-3 mt-4 cursor-pointer">
                            Enviar Mensagem
                        </button>
                    </form>                    
                </div>
                <div className="flex flex-col gap-8">
                    <div className="bg-[#1C1F22] rounded-2xl p-8 border border-[#3B3B40]">
                        <h2 className="text-xl font-bold mb-6">Nossos Contatos</h2>
                        <div>
                            <div className="flex flex-col gap-6">
                                <div onClick={() => handleCopy("(32) 99999-9999", "Telefone")} className="flex items-center gap-4">
                                    <div className="w-13 h-13 rounded-lg bg-[#0D0F11] border border-[#2A2E33] flex items-center justify-center">
                                        <Phone size={20} className="text-[#073968]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#F5F5F5]">Telefone / WhatsApp</h3>
                                        <p className="text-[#C0C0C0] cursor-pointer  hover:text-white transition-colors">(32) 99999-9999</p>
                                    </div>
                                </div>
                                <div onClick={() => handleCopy("contato@geekpop.com.br", "E-mail")} className="flex items-center gap-4">
                                    <div className="w-13 h-13 rounded-lg bg-[#0D0F11] border border-[#2A2E33] flex items-center justify-center">
                                        <Mail size={20} className="text-[#073968]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#F5F5F5]">E-mail</h3>
                                        <p className="text-[#C0C0C0] cursor-pointer  hover:text-white transition-colors">contato@geekpop.com.br</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-[#3B3B40] my-8"></div>
                        <h3 className=" font-bold mb-6">Siga nossas Redes Sociais</h3>
                        <div className="flex gap-4">
                        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0D0F11] border border-[#3B3B40] rounded-lg hover:bg-[#1473CD] hover:text-white transition-colors flex items-center justify-center">
                            <FaInstagram size={20} />
                        </Link>
                        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0D0F11] border border-[#3B3B40] rounded-lg hover:bg-[#1473CD] hover:text-white transition-colors flex items-center justify-center">
                            <FaFacebookF size={20} />
                        </Link>
                        <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0D0F11] border border-[#3B3B40] rounded-lg hover:bg-[#1473CD] hover:text-white transition-colors flex items-center justify-center">
                            <FaXTwitter size={20} />
                        </Link>
                        </div>
                    </div>
                    <div className="bg-[#1C1F22] rounded-2xl p-8 border border-[#3B3B40]">
                        <h2 className="text-xl font-bold mb-6">Nosso Endereço</h2>
                        <div className="flex items-center gap-4">
                            <div className="w-13 h-13 rounded-lg bg-[#0D0F11] border border-[#2A2E33] flex items-center justify-center">
                            <MapPin size={20} className="text-[#073968]" />
                            </div>
                            <div>
                            <h3 className="font-bold text-[#F5F5F5]">Endereço da Loja Física</h3>
                            <p className="text-[#C0C0C0]">UFJF, St. D - Campus, Via Local, 4569 <br/> São Pedro, Juiz de Fora - MG</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.0972624523015!2d-43.37452938871271!3d-21.776496398373425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b9e2bea807b%3A0x7ac85ca76e3d3d1d!2sCode%20Empresa%20Jr.%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1785298606366!5m2!1spt-BR!2sbr" 
                                width="100%" 
                                height="250" 
                                style={{ border: 0, borderRadius: "0.75rem" }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}