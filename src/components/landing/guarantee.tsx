import Image from 'next/image';

export function Guarantee() {
  return (
    <section className="w-full flex justify-center z-10 relative">
      <div className="w-full max-w-2xl flex flex-col items-center gap-4 rounded-xl bg-card border-2 border-brand-yellow-border/50 p-6 text-center shadow-lg">
          <Image 
            src="https://i.postimg.cc/cChjNcxX/Selo-de-Garantia-de-30-Dias-PNG-Transparente-Sem-Fundo.png"
            alt="Selo de Garantia de 7 dias"
            width={100}
            height={100}
            className="w-24 h-24"
            data-ai-hint="guarantee badge"
          />
          <h3 className="text-2xl font-bold uppercase text-foreground -mt-2">Garantia Incondicional</h3>
          <p className="text-muted-foreground max-w-md">
            Você tem <strong>7 dias para testar tudo</strong>. Se não gostar, é só pedir o reembolso e devolvemos 100% do seu dinheiro, sem burocracia.
          </p>
      </div>
    </section>
  );
}
