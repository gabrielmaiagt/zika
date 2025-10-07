export function StatsBar() {
    const stats = [
      { value: "+2.5K", label: "DOWNLOADS" },
      { value: "+30", label: "TEMPLATES" },
      { value: "9.8/10", label: "AVALIAÇÃO" },
    ];
  
    return (
      <section className="w-full bg-brand-yellow text-primary-foreground py-4 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-around divide-y-2 md:divide-y-0 md:divide-x-2 divide-brand-yellow-border/50">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1 text-center py-3 md:py-0">
              <p className="text-2xl md:text-3xl font-black">{stat.value}</p>
              <p className="text-sm font-semibold tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  