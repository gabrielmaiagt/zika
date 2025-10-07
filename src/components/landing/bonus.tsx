import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const bonusList = [
    {
      title: "LISTA DE PÁGINAS DE GRAU",
      description: "Páginas que aceitam repost e vão te dar visibilidade instantânea."
    },
    {
      title: "HASHTAGS E FRASES PRONTAS",
      description: "Copy pronto pra usar nas descrições e bombar o algoritmo."
    }
];

export function Bonus() {
    return (
        <section className="w-full relative py-12 md:py-20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow to-brand-red opacity-80"></div>
            <div className="relative w-full flex flex-col items-center space-y-8 sm:space-y-12 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-center text-primary-foreground uppercase">
                    + 2 Bônus Exclusivos
                </h2>
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {bonusList.map((bonus, index) => (
                        <Card key={index} className="bg-card/80 backdrop-blur-sm border-2 border-brand-yellow-border/50 shadow-lg">
                             <CardHeader>
                                <CardTitle className="text-lg sm:text-xl font-bold text-brand-yellow">{bonus.title}</CardTitle>
                             </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm sm:text-base">{bonus.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
