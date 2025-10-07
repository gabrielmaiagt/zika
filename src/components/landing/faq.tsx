import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const faqItems = [
    {
        question: "Funciona no CapCut Free?",
        answer: "SIM! Não precisa de versão PRO, funciona 100% na versão grátis."
    },
    {
        question: "Como recebo o pack?",
        answer: "Acesso IMEDIATO por link de download após confirmação do pagamento."
    },
    {
        question: "Preciso saber editar?",
        answer: "NÃO! Vem tutorial completo ensinando tudo do zero."
    },
    {
        question: "Funciona pra Instagram e TikTok?",
        answer: "SIM! Formato otimizado pra Reels, TikTok e Shorts."
    }
]

export function Faq() {
    return (
        <section id="faq" className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-8 sm:space-y-12 -mt-16 md:-mt-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-center uppercase">
                Dúvidas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-card border-2 border-white/10 rounded-lg shadow-inner-dark px-4">
                        <AccordionTrigger className="text-left text-base sm:text-lg font-bold hover:no-underline text-foreground">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
