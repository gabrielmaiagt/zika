import { Button } from '@/components/ui/button';
import { CountdownTimer } from './countdown-timer';
import { DownloadIcon, LockIcon, UsersIcon } from './icons';

type CtaBlockProps = {
    vagas: number;
    preco: string;
    checkoutUrl: string;
}

export function CtaBlock({ vagas, preco, checkoutUrl }: CtaBlockProps) {
  const [priceInteger, priceFraction] = preco.split(',');

  return (
    <section id="checkout" className="w-full flex justify-center">
        <div className="w-full max-w-2xl bg-gradient-to-br from-brand-red/95 via-red-900/90 to-black/80 border-2 border-brand-yellow-border rounded-xl shadow-glow-yellow p-6 md:p-8 space-y-6 text-center text-primary-foreground flex flex-col items-center backdrop-blur-sm">
            
            <div className="flex items-center gap-2 font-semibold bg-black/30 px-4 py-2 rounded-full border border-white/10 text-xs sm:text-base">
                <UsersIcon className="w-5 h-5 text-brand-yellow"/>
                <span className="text-white/90">RESTAM APENAS <span className="font-bold text-brand-yellow">{vagas}</span> VAGAS HOJE</span>
            </div>

            <div className="flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-white/80 -translate-y-2 mr-1">R$</span>
                <span className="text-7xl md:text-8xl font-black text-brand-yellow leading-none">{priceInteger}</span>
                <span className="text-2xl sm:text-3xl font-bold text-brand-yellow -translate-y-2 ml-1">,{priceFraction}</span>
            </div>

            <p className="font-bold text-base sm:text-lg uppercase tracking-wider text-white/80">
                Acesso Imediato Após Pagamento
            </p>

            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="w-full h-14 sm:h-16 text-base sm:text-xl font-bold rounded-md bg-gradient-to-r from-brand-yellow to-amber-300 text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 border-t-2 border-white/50">
                    <DownloadIcon className="w-6 h-6 mr-2" />
                    DESBLOQUEAR ACESSO IMEDIATO
                </Button>
            </a>

            <div className="flex items-center gap-2 text-brand-yellow font-semibold">
                <span className="uppercase text-sm">OFERTA EXPIRA EM:</span>
                <CountdownTimer />
            </div>

            <div className="flex items-center gap-2 text-sm pt-4 text-green-300/80">
                <LockIcon className="w-4 h-4 text-green-400"/>
                <span className="font-semibold">PAGAMENTO 100% SEGURO</span>
            </div>

        </div>
    </section>
  );
}
