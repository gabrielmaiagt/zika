import { LightningIcon } from './icons';

type AlertBarProps = {
  vagas: number;
};

export function AlertBar({ vagas }: AlertBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 h-10 md:h-12 bg-brand-yellow text-primary-foreground font-bold flex items-center justify-center text-sm md:text-base z-50">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,178,0,0)_0%,rgba(255,255,255,0.4)_50%,rgba(255,178,0,0)_100%)] animate-shimmer"></div>
      <div className="relative flex items-center gap-2">
        <LightningIcon className="w-5 h-5 animate-pulse" />
        <span className="text-center">
          ALERTA: SÓ {vagas} VAGAS HOJE • ACESSO IMEDIATO
        </span>
      </div>
    </div>
  );
}
