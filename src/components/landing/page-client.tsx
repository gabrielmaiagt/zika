'use client';

import { useRef, useState, useEffect } from 'react';
import { AlertBar } from '@/components/landing/alert-bar';
import { Bonus } from '@/components/landing/bonus';
import { CtaBlock } from '@/components/landing/cta-block';
import { Faq } from '@/components/landing/faq';
import { Features } from '@/components/landing/features';
import { Hero } from '@/components/landing/hero';
import { SocialProof } from '@/components/landing/social-proof';
import { StatsBar } from '@/components/landing/stats-bar';
import { StickyHeader } from '@/components/landing/sticky-header';
import { Guarantee } from './guarantee';

type Config = {
  preco: string;
  dePreco: string;
  vagas: number;
  checkoutUrl: string;
  finalCheckoutUrl: string;
};

export function PageClient({ config }: { config: Config }) {
    const heroRef = useRef<HTMLDivElement>(null);
    const [showStickyHeader, setShowStickyHeader] = useState(false);

    useEffect(() => {
        if (!heroRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowStickyHeader(!entry.isIntersecting);
            },
            { rootMargin: "0px", threshold: 0.1 }
        );

        observer.observe(heroRef.current);
        
        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <>
            <AlertBar vagas={config.vagas} />
            <StickyHeader show={showStickyHeader} />
            <div id="topo" />
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32 py-12">
                <div ref={heroRef}>
                    <Hero
                        dePreco={config.dePreco}
                        preco={config.preco}
                        checkoutUrl={config.checkoutUrl}
                        vagas={config.vagas}
                    />
                </div>
                <StatsBar />
                <Features />
                <Bonus />
                <SocialProof />
                <div>
                    <CtaBlock
                        vagas={config.vagas}
                        preco={config.preco}
                        checkoutUrl={config.finalCheckoutUrl}
                    />
                    <Guarantee />
                </div>
                <Faq />
            </div>
        </>
    );
}
