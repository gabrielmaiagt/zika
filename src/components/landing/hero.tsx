import { CountdownTimer } from './countdown-timer';
import { FireIcon, ClockIcon, ShieldCheckIcon, LightningIcon } from './icons';

type HeroProps = {
  dePreco: string;
  preco: string;
  checkoutUrl: string;
  vagas: number;
};

export function Hero({ dePreco, preco, checkoutUrl, vagas }: HeroProps) {
  const [priceInteger, priceFraction] = preco.split(',');

  return (
    <section className="relative overflow-hidden -mt-8 md:-mt-12">
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,185,0,0.18),transparent_60%),radial-gradient(55%_55%_at_50%_50%,rgba(229,9,20,0.15),transparent_65%)]"></div>

      <div className="relative mx-auto max-w-3xl px-4 pt-10 pb-12 sm:pt-14 sm:pb-16">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/60 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-300 shadow-[0_0_20px_rgba(229,9,20,.25)]">
            <LightningIcon className="h-4 w-4 animate-pulse" />
            LANÇAMENTO EXCLUSIVO
          </div>
        </div>

        {/* Headline */}
        <h1 className="mt-6 space-y-1 text-center font-extrabold tracking-tight">
          <span className="block text-3xl sm:text-4xl md:text-5xl text-white">PACK DE EDIÇÃO</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">GRAU</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl text-white/95">CAPCUT</span>
        </h1>

        <p className="mx-auto mt-4 max-w-[42ch] text-center text-base sm:text-lg text-white/80">
          VIRALIZA SEUS VÍDEOS DE GRAU EM MINUTOS
        </p>

        {/* Price Card */}
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-yellow-400/80 bg-[#2a0f0f]/80 p-6 shadow-[0_0_40px_rgba(255,210,64,.25)] ring-1 ring-yellow-300/20">
          <p className="text-center text-sm font-bold tracking-wide text-white/70">
            DE <span className="line-through opacity-80">R${dePreco}</span> POR APENAS
          </p>

          <div className="mt-2 flex items-end justify-center">
            <span className="mr-1 translate-y-1 text-2xl font-extrabold text-white/90">R$</span>
            <span className="text-[56px] sm:text-[72px] leading-none font-black bg-gradient-to-r from-red-500 to-yellow-300 bg-clip-text text-transparent">{priceInteger}</span>
            <span className="ml-1 -translate-y-2 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">,{priceFraction}</span>
          </div>

          <p className="mt-3 text-center text-sm font-extrabold uppercase tracking-wide text-yellow-300">
            ACESSO VITALÍCIO • SEM MENSALIDADE
          </p>
        </div>

        {/* Micro-urgência */}
        <div className="mx-auto mt-5 flex max-w-xl items-center justify-center gap-2 text-center text-sm font-semibold text-red-300">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-red-400/60">⚡</span>
          Restam <span id="vagas" className="mx-1 text-yellow-300 font-extrabold">{vagas}</span> vagas hoje
        </div>

        {/* CTA */}
        <a href={checkoutUrl}
           className="group mx-auto mt-5 flex w-full max-w-xl items-center justify-center gap-2 rounded-full border border-yellow-300/50 bg-gradient-to-r from-red-600 to-yellow-400 px-6 py-4 text-lg font-extrabold text-black shadow-lg transition hover:scale-[1.02] active:scale-95">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          QUERO VIRALIZAR MEUS GRAU
        </a>

        {/* Countdown + trust */}
        <div className="mx-auto mt-4 flex max-w-xl flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-orange-300">
             <ClockIcon className="h-4 w-4" />
            <span>OFERTA EXPIRA EM:</span>
            <CountdownTimer />
          </div>
          <div className="flex items-center gap-2 text-xs text-green-300">
            <ShieldCheckIcon className="h-4 w-4" />
            <span>PAGAMENTO 100% SEGURO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
