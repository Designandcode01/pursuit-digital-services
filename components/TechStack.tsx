const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Payload CMS",
  "TailwindCSS",
  "PostgreSQL",
  "Node.js",
  "Vercel",
  "Figma",
  "ShadCN",
  "tRPC",
  "Prisma",
];

export function TechStack() {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...tech, ...tech];

  return (
    <section className="relative overflow-hidden border-y border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-900/50">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-neutral-50 to-transparent dark:from-neutral-900/50" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-neutral-50 to-transparent dark:from-neutral-900/50" />

      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-neutral-500 dark:text-neutral-500">
          TECHNOLOGIES I WORK WITH
        </p>
      </div>

      {/* Marquee */}
      <div className="group mt-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul
          className="flex shrink-0 animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused]"
          aria-label="Technologies I work with"
        >
          {loop.map((name, i) => (
            <li key={`${name}-${i}`}>
              <span
                className="group/pill inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:text-neutral-900 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.35),0_8px_24px_-8px_rgba(59,130,246,0.45)] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Keyframes — scoped to this component via a plain style tag */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}









// const tech = [
//   'Next.js',
//   'React',
//   'TypeScript',
//   'Payload CMS',
//   'TailwindCSS',
//   'PostgreSQL',
//   'Node.js',
//   'Vercel',
//   'Figma',
//   'ShadCN',
//   'tRPC',
//   'Prisma',
// ]

// export function TechStack() {
//   return (
//     <section className="border-y border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-900/50">
//       <div className="mx-auto max-w-7xl px-6">
//         <p className="text-center text-sm font-medium text-neutral-500 dark:text-neutral-500">
//           TECHNOLOGIES I WORK WITH
//         </p>
//         <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
//           {tech.map((name) => (
//             <span
//               key={name}
//               className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
//             >
//               {name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }