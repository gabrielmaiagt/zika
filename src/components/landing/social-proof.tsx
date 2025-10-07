import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { FireIcon } from './icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  { handle: "@motoka_sp", text: "Postei com esse pack e bati 12K em 1h mano", views: "12.3K", avatarId: "testimonial-1" },
  { handle: "@graubrabo021", text: "Os mlk tão achando q sou editor profissa kkkkk", views: "27.1K", avatarId: "testimonial-2" },
  { handle: "@wheeling_rj", text: "@motokalokorj me repostou depois que usei", views: "8.9K", avatarId: "testimonial-3" },
  { handle: "@quebrada_grau", text: "Meu vídeo mais viral saiu desse pack slk", views: "41.5K", avatarId: "testimonial-4" },
];

function TestimonialCard({ handle, text, views, avatarId }: typeof testimonials[0]) {
  const avatar = PlaceHolderImages.find(img => img.id === avatarId);
  return (
    <Card className="bg-card border border-white/10 shadow-inner-dark w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-brand-yellow p-0.5">
             <Image 
                src={avatar?.imageUrl || `https://picsum.photos/seed/${avatarId}/48/48`} 
                alt={`Avatar de ${handle}`} 
                width={48} 
                height={48}
                data-ai-hint="profile picture"
                className="rounded-full bg-background"
              />
          </div>
          <p className="font-bold text-foreground">{handle}</p>
        </div>
        <p className="text-sm text-muted-foreground">{views} visualizações</p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <blockquote className="text-foreground italic">“{text}”</blockquote>
        <div className="flex items-center gap-1 mt-3 text-brand-yellow">
          {[...Array(5)].map((_, i) => <FireIcon key={i} className="w-4 h-4 stroke-current" fill="none" />)}
        </div>
      </CardContent>
    </Card>
  );
}

export function SocialProof() {
  return (
    <section className="w-full flex flex-col items-center space-y-12">
      <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-center uppercase bg-gradient-to-r from-brand-red to-brand-yellow bg-clip-text text-transparent">
        Quem Usou, Já Viralizou
      </h2>
      <div className="w-full columns-1 md:columns-2 gap-6 space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="break-inside-avoid">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
}
