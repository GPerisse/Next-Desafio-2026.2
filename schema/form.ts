import { z } from "zod";

export const formSchema = z.object({
  nome: z.string().min(5, { message: "Nome deve ter pelo menos 5 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  assunto: z.string().min(3, { message: "O assunto deve ter pelo menos 3 caracteres." }),
  mensagem: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export type FormValue = z.infer<typeof formSchema>;