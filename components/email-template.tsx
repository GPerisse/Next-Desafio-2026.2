import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nome,
  email,
  assunto,
  mensagem,
}) => (
  <Html>
    <Head />
    <Preview>Novo contato da GeekPop: {assunto}</Preview>
    
    <Body style={main}>
      <Container style={container}>
        <Text style={heading}>Novo contato recebido da loja GeekPop!</Text>
        
        <Text style={paragraph}>
          <strong>Nome:</strong> {nome}
        </Text>
        
        <Text style={paragraph}>
          <strong>E-mail do Cliente:</strong> {email}
        </Text>
        
        <Text style={paragraph}>
          <strong>Assunto:</strong> {assunto}
        </Text>
        
        <Hr style={hr} />
        
        <Text style={paragraph}>
          <strong>Mensagem:</strong>
        </Text>
        <Text style={paragraph}>{mensagem}</Text>
      </Container>
    </Body>
  </Html>
);
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  border: "1px solid #eee",
  borderRadius: "5px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
  textAlign: "center" as const,
};

const paragraph = {
  margin: "0 20px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};