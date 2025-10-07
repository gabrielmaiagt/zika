import { Button } from "../ui/button";

export function Footer({ checkoutUrl }: { checkoutUrl: string }) {
    return (
        <footer className="w-full bg-black/50 mt-20 md:mt-32 py-12">
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-8 text-center">
                <a href={checkoutUrl}>
                    <Button size="lg" variant="outline" className="text-lg font-bold rounded-full border-2 border-brand-yellow-border text-brand-yellow-border hover:bg-brand-yellow hover:text-primary-foreground">
                        Comprar Agora
                    </Button>
                </a>
                <div className="text-xs text-muted-foreground space-y-2 max-w-2xl">
                    <p>Este conteúdo é independente, não afiliado ao CapCut, Meta ou TikTok. Todos os direitos reservados © 2025.</p>
                    <p>O uso dos materiais é destinado para fins pessoais e intransferíveis.</p>
                </div>
            </div>
        </footer>
    );
}
