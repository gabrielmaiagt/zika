import { PageClient } from '@/components/landing/page-client';

export default function Home() {
  const config = {
    preco: "9,90",
    dePreco: "49,90",
    vagas: 47,
    checkoutUrl: "#checkout", // Anchor link for in-page navigation
    finalCheckoutUrl: "https://seguropagamentos.com.br/grau" // Real checkout link
  };

  return (
    <PageClient config={config} />
  );
}
