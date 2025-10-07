import { Button } from '@/components/ui/button';
import { CountdownTimer } from './countdown-timer';
import { FireIcon, ClockIcon, LightningIcon } from './icons';

type HeroProps = {
  dePreco: string;
  preco: string;
  checkoutUrl: string;
};

export function Hero({ dePreco, preco, checkoutUrl }: HeroProps) {
  return (
    <section className="w-full text-center flex flex-col items-center space-y-8 pt-16 md:pt-20">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary text-brand-red px-4 py-1.5 text-sm font-semibold animate-pulse">
        <LightningIcon className="w-4 h-4 text-brand-yellow" />
        LANÇAMENTO EXCLUSIVO
      </div>

      <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase">
        Pack de Edição<br/>
        <span className="bg-gradient-to-r from-brand-red to-brand-yellow bg-clip-text text-transparent">Grau</span><br/>
        Capcut
      </h1>

      <p className="max-w-xl text-lg md:text-xl text-muted-foreground font-semibold">
        VIRALIZA SEUS VÍDEOS DE GRAU EM MINUTOS
      </p>

      <div className="w-full max-w-md bg-card border-2 border-brand-yellow-border rounded-xl shadow-glow-yellow p-6 md:p-8 space-y-4 text-center">
        <p className="font-semibold text-muted-foreground">DE <span className="line-through">R${dePreco}</span> POR APENAS</p>
        <p className="text-6xl md:text-7xl font-black text-foreground">
          R$<span className="bg-gradient-to-r from-brand-red to-brand-yellow bg-clip-text text-transparent">{preco}</span>
        </p>
        <p className="font-semibold text-brand-yellow-border tracking-wider text-sm uppercase">
          ACESSO VITALÍCIO • SEM MENSALIDADE
        </p>
      </div>

      <div className="w-full max-w-md flex flex-col items-center space-y-4">
        <a href={checkoutUrl} className="w-full">
          <Button size="lg" className="w-full h-16 text-lg md:text-xl font-bold rounded-full bg-gradient-to-r from-brand-red to-brand-yellow text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">
            <FireIcon className="w-6 h-6 mr-2" />
            QUERO VIRALIZAR MEUS GRAU
          </Button>
        </a>
        <div className="flex items-center gap-2 text-brand-yellow font-semibold">
          <ClockIcon className="w-5 h-5" />
          <span className="uppercase text-sm">Oferta expira em:</span>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
