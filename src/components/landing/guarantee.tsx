import { ShieldCheckIcon } from './icons';

export function Guarantee() {
  return (
    <section className="w-full flex justify-center z-10 relative">
      <div className="w-full max-w-2xl flex flex-col items-center gap-4 rounded-xl bg-card border-2 border-brand-yellow-border/50 p-6 text-center shadow-lg">
          <ShieldCheckIcon className="w-14 h-14 text-green-400" />
          <h3 className="text-2xl font-bold uppercase text-foreground">Garantia Incondicional</h3>
          <p className="text-muted-foreground max-w-md">
            Você tem <strong>7 dias para testar tudo</strong>. Se não gostar, é só pedir o reembolso e devolvemos 100% do seu dinheiro, sem burocracia.
          </p>
      </div>
    </section>
  );
}
