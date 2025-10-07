import { CountdownTimer } from './countdown-timer';

export function StickyHeader({ show }: { show: boolean }) {
  return (
    <div className={`fixed top-10 md:top-12 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-center">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase text-brand-yellow">
          <span>OFERTA EXPIRA EM:</span>
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
}
