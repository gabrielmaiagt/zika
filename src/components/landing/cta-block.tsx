import { Button } from '@/components/ui/button';
import { CountdownTimer } from './countdown-timer';
import { DownloadIcon, LockIcon, UsersIcon } from './icons';

type CtaBlockProps = {
    vagas: number;
    preco: string;
    checkoutUrl: string;
}

export function CtaBlock({ vagas, preco, checkoutUrl }: CtaBlockProps) {
  return (
    <section id="checkout" className="w-full flex justify-center">
        <div className="w-full max-w-2xl bg-brand-red/90 border-2 border-brand-yellow-border rounded-xl shadow-glow-yellow p-6 md:p-10 space-y-6 text-center text-primary-foreground flex flex-col items-center">
            
            <div className="flex items-center gap-2 font-semibold bg-black/20 px-4 py-2 rounded-full">
                <UsersIcon className="w-5 h-5"/>
                <span>RESTAM APENAS {vagas} VAGAS HOJE</span>
            </div>

            <p className="text-5xl md:text-6xl font-black">
                R$<span className="text-brand-yellow">{preco}</span>
            </p>

            <p className="font-bold text-lg uppercase tracking-wider">
                Acesso Imediato Após Pagamento
            </p>

            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="w-full h-16 text-lg md:text-xl font-bold rounded-full bg-gradient-to-r from-brand-yellow to-amber-300 text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">
                    <DownloadIcon className="w-6 h-6 mr-2" />
                    DESBLOQUEAR AGORA
                </Button>
            </a>

            <div className="flex items-center gap-2 text-brand-yellow font-semibold">
                <span className="uppercase text-sm">Tempo Esgotando:</span>
                <CountdownTimer />
            </div>

            <div className="flex items-center gap-2 text-sm pt-4">
                <LockIcon className="w-4 h-4 text-green-400"/>
                <span className="font-semibold">PAGAMENTO 100% SEGURO</span>
            </div>

        </div>
    </section>
  );
}
