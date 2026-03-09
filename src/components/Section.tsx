import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      {/* Vercel-style cross line with + markers */}
      <div className="hidden lg:block relative -mx-5 md:-mx-10 mb-8">
        <div className="relative h-px bg-neutral-200 dark:bg-neutral-800">
          <div className="cross-marker left-0" />
          <div className="cross-marker left-full" />
        </div>
      </div>
      <h2 className="text-sm text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
