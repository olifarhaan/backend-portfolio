"use client";

import { ReactNode } from "react";

interface TerminalProps {
  children: ReactNode;
}

export function Terminal({ children }: TerminalProps) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 sm:p-5 md:p-6 text-sm leading-[1.9] overflow-x-auto">
      {children}
    </div>
  );
}

export function Prompt({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-2 items-start">
      <span className="text-neutral-400 dark:text-neutral-500 shrink-0">
        $
      </span>
      <span className="text-neutral-800 dark:text-neutral-200">
        {children}
      </span>
    </div>
  );
}

export function Output({ children }: { children: ReactNode }) {
  return (
    <div className="text-neutral-500 dark:text-neutral-400 ml-4 mt-1 mb-3">
      {children}
    </div>
  );
}
