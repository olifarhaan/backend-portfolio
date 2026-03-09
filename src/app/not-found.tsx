import { Nav } from "@/components/Nav";
import { Terminal, Prompt, Output } from "@/components/Terminal";
import data from "@/data/portfolio.json";

export default function NotFound() {
  return (
    <div className="pt-6 pb-6">
      <Nav />

      <main className="max-w-4xl mx-auto border-x border-neutral-200 dark:border-neutral-800 min-h-screen relative">
        <div className="hidden lg:block absolute top-0 left-0 right-0">
          <div className="relative h-px bg-neutral-200 dark:bg-neutral-800">
            <div className="cross-marker left-0" />
            <div className="cross-marker left-full" />
          </div>
        </div>

        <div className="px-5 md:px-10 pt-32 md:pt-44 pb-16 md:pb-20 flex flex-col items-center text-center relative overflow-hidden">
          <div className="grid-bg" />
          <div className="relative z-10">
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight shimmer-text">
              404
            </h1>
            <p className="text-neutral-400 dark:text-neutral-500 text-xs uppercase tracking-[0.3em] mt-6 mb-12">
              Page not found
            </p>

            <div className="max-w-md mx-auto text-left">
              <Terminal>
                <Prompt>cd /lost-page</Prompt>
                <Output>bash: cd: /lost-page: No such file or directory</Output>
                <Prompt>echo $SUGGESTION</Prompt>
                <Output>Maybe try the homepage?</Output>
              </Terminal>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 text-xs justify-center">
              <a
                href="/"
                className="text-white dark:text-black bg-black dark:bg-white px-5 py-3 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors uppercase tracking-widest text-center"
              >
                Go Home
              </a>
              <a
                href={`mailto:${data.personal.email}`}
                className="text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-5 py-3 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors uppercase tracking-widest text-center"
              >
                Report Issue
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-0 left-0 right-0">
          <div className="relative h-px bg-neutral-200 dark:bg-neutral-800">
            <div className="cross-marker left-0" />
            <div className="cross-marker left-full" />
          </div>
        </div>
        <div className="lg:hidden h-px bg-neutral-200 dark:bg-neutral-800" />
      </main>

      <footer className="max-w-4xl mx-auto text-center py-8">
        <p className="text-neutral-400 dark:text-neutral-600 text-[11px] tracking-widest uppercase">
          Made with love by {data.personal.footerName} &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
