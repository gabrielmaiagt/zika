import { Button } from '@/components/ui/button';
import { FireIcon } from './icons';

export function StickyCta({ checkoutUrl }: { checkoutUrl: string }) {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-gradient-to-t from-black via-black/90 to-transparent">
            <a href={checkoutUrl} className="w-full">
                <Button size="lg" className="w-full h-14 text-lg font-bold rounded-full bg-gradient-to-r from-brand-red to-brand-yellow text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 animate-pulse">
                    <FireIcon className="w-6 h-6 mr-2" />
                    QUERO VIRALIZAR MEUS GRAU
                </Button>
            </a>
        </div>
    );
}
