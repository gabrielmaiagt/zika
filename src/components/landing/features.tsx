import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon } from './icons';

const featuresList = [
  {
    title: "+30 TEMPLATES PRONTOS",
    description: "Cola seu vídeo e tá feito. Efeitos profissionais em 2 cliques."
  },
  {
    title: "EFEITOS DE IMPACTO",
    description: "Glitch, zoom, blur, pancada seca. Aqueles cortes que chamam atenção."
  },
  {
    title: "PACK DE ÁUDIO BRABO",
    description: "Funk pesado, motor acelerando, corte seco sincronizado."
  },
  {
    title: "LEGENDAS AUTOMÁTICAS",
    description: "Estilo quebrada, aquelas frases de impacto que viralizam."
  },
  {
    title: "MOLDURAS PRA THUMB",
    description: "Capa pronta pra deixar seu vídeo irresistível no feed."
  },
  {
    title: "TUTORIAL COMPLETO",
    description: "Passo a passo de como aplicar tudo, mesmo sendo iniciante."
  }
];

function FeatureCard({ title, description }: { title: string, description: string }) {
  return (
    <Card className="bg-card border-2 border-brand-yellow-border/50 shadow-inner-dark hover:border-brand-yellow-border transition-colors duration-300">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4 md:p-6">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brand-red to-brand-yellow flex items-center justify-center">
            <CheckIcon className="w-5 h-5 text-primary-foreground" />
        </div>
        <CardTitle className="text-base md:text-xl font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6 pt-0">
        <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
      </CardContent>
    </Card>
  );
}


export function Features() {
  return (
    <section className="w-full flex flex-col items-center space-y-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-center uppercase">
        <span className="text-brand-red">O que vem</span><br className="sm:hidden" /> <span className="text-brand-yellow">no pack?</span>
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {featuresList.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
}
