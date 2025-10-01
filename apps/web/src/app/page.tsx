import Image from "next/image";
import { cva } from 'class-variance-authority';
import Hero from "@/components/ui/hero";
import { UwuHero } from "@/components/ui/section";


const badgeVariants = cva(
  'inline-flex size-7 items-center justify-center rounded-full bg-fd-primary font-medium text-fd-primary-foreground',
);

export default function Home() {

  const gridColor =
    'color-mix(in oklab, var(--color-fd-primary) 10%, transparent)';

  return (
    <>
      <div
        className="absolute inset-x-0 top-[360px] h-[250px] max-md:hidden"
        style={{
          background: `repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px)`,
        }}
      />
      <main className="container relative max-w-[1100px] px-2 py-4 z-2 lg:py-8">
        <div
          style={{
            background:
              'repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)',
          }}
        >
          <div className="relative">
            <Hero />
            <UwuHero/>
          </div>
          {/* <Feedback /> */}
          {/* <Introduction /> */}
          <div
            className="relative overflow-hidden border-x border-t px-8 py-16 sm:py-24"
            style={{
              backgroundImage:
                'radial-gradient(circle at center, var(--color-fd-secondary), var(--color-fd-background) 40%)',
            }}
          >
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              Loved by users.
              <br />
              Built for developers.
            </h2>
          </div>
          {/* <Features /> */}
          {/* <Highlights /> */}
          {/* <Architecture /> */}
          {/* <Why /> */}
          {/* <Contributing /> */}
          {/* <End /> */}
        </div>
      </main>
    </>
  );
}
