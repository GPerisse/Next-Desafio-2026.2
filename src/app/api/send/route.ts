import { EmailTemplate } from '@/components/email-template';
import { FormValue } from '@/schema/form';
import { Resend } from 'resend';
import * as React from 'react';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body: FormValue = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', 
      to: ['perisseguilhermeg@gmail.com'],
      replyTo: body.email, 
      subject: `GeekPop - Novo Contato: ${body.assunto}`,
      react: EmailTemplate({ 
        nome: body.nome, 
        email: body.email, 
        assunto: body.assunto, 
        mensagem: body.mensagem 
      }) as React.ReactElement,
    });
    if (error) {
      console.error("ERRO DA API DO RESEND:", error); 
      return Response.json({ error: error.message }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    console.error("ERRO INTERNO DO SERVIDOR:", error); 
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";  
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}