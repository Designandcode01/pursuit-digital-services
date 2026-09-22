

import { Service } from "@/types";
import { Code2, Database, Palette, Rocket, Settings, Zap, type LucideIcon } from "lucide-react";
import { Icons } from "./icons";


interface ServicesProps {
  services: Service[];
}

// Local shape for rendering — decoupled from Payload's generated type
// (which includes createdAt/updatedAt and collection-managed fields).
type ServiceCard = {
  id: string | number;
  title: string;
  description: string;
  icon: Service["icon"]; // literal union from Payload, includes null/undefined
};

const fallbackServices: ServiceCard[] = [
  {
    id: 1,
    title: "Next.js Development",
    description:
      "Blazing-fast, SEO-optimized applications built with the App Router and React Server Components.",
    icon: "zap",
  },
  {
    id: 2,
    title: "Payload CMS",
    description:
      "Custom content management systems tailored to your workflow — flexible, type-safe, and developer-friendly.",
    icon: "database",
  },
  {
    id: 3,
    title: "Full-Stack Apps",
    description:
      "End-to-end development from database design to deployment. Postgres, tRPC, and modern tooling.",
    icon: "code",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Clean, accessible interfaces designed in Figma and shipped with TailwindCSS and ShadCN.",
    icon: "palette",
  },
  {
    id: 5,
    title: "Performance Audits",
    description:
      "Deep-dive optimization of your existing site — Core Web Vitals, bundle size, and database queries.",
    icon: "rocket",
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description:
      "Ongoing retainers for updates, feature work, and peace of mind so you can focus on your business.",
    icon: "settings",
  },
];

// Map Payload's enum values → Lucide icon components.
// NonNullable strips null/undefined so Record keys are exhaustive.
const ICONS: Record<NonNullable<Service["icon"]>, LucideIcon> = {
  zap: Zap,
  database: Database,
  code: Code2,
  palette: Palette,
  rocket: Rocket,
  settings: Settings,
};

const FALLBACK_ICON: LucideIcon = Zap;

// Normalize Payload's Service into the card shape we render.
function toCard(s: Service): ServiceCard {
  return {
    id: s.id,
    title: s.title,
    description: s.description,
    icon: s.icon,
  };
}

export function Services({ services }: ServicesProps) {
  const list: ServiceCard[] =
    services.length > 0 ? services.map(toCard) : fallbackServices;

  return (
    <section id="services" className="py-24 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            Everything you need to launch
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            From concept to deployment — I handle the entire lifecycle of your
            web project.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => {
            const Icon =
              (service.icon && ICONS[service.icon]) ?? FALLBACK_ICON;

            return (
              <div
                key={service.id}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                  {/* <Icons size={20} /> */}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}











// import { Code2, Database, Palette, Rocket, Settings, Zap } from 'lucide-react'

// interface Service {
//   id: string
//   title: string
//   description: string
//   icon?: string
// }

// interface ServicesProps {
//   services: Service[]
// }

// const fallbackServices: Service[] = [
//   {
//     id: '1',
//     title: 'Next.js Development',
//     description:
//       'Blazing-fast, SEO-optimized applications built with the App Router and React Server Components.',
//     icon: 'zap',
//   },
//   {
//     id: '2',
//     title: 'Payload CMS',
//     description:
//       'Custom content management systems tailored to your workflow — flexible, type-safe, and developer-friendly.',
//     icon: 'database',
//   },
//   {
//     id: '3',
//     title: 'Full-Stack Apps',
//     description:
//       'End-to-end development from database design to deployment. Postgres, tRPC, and modern tooling.',
//     icon: 'code',
//   },
//   {
//     id: '4',
//     title: 'UI/UX Design',
//     description:
//       'Clean, accessible interfaces designed in Figma and shipped with TailwindCSS and ShadCN.',
//     icon: 'palette',
//   },
//   {
//     id: '5',
//     title: 'Performance Audits',
//     description:
//       'Deep-dive optimization of your existing site — Core Web Vitals, bundle size, and database queries.',
//     icon: 'rocket',
//   },
//   {
//     id: '6',
//     title: 'Maintenance & Support',
//     description:
//       'Ongoing retainers for updates, feature work, and peace of mind so you can focus on your business.',
//     icon: 'settings',
//   },
// ]

// const iconMap: Record<string, React.ReactNode> = {
//   zap: <Zap size={20} />,
//   database: <Database size={20} />,
//   code: <Code2 size={20} />,
//   palette: <Palette size={20} />,
//   rocket: <Rocket size={20} />,
//   settings: <Settings size={20} />,
// }

// export function Services({ services }: ServicesProps) {
//   const list = services.length > 0 ? services : fallbackServices

//   return (
//     <section id="services" className="py-28 md:py-36">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="mx-auto max-w-2xl text-center">
//           <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
//             SERVICES
//           </p>
//           <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
//             Everything you need to launch
//           </h2>
//           <p className="mt-4 text-neutral-600 dark:text-neutral-400">
//             From concept to deployment — I handle the entire lifecycle of your
//             web project.
//           </p>
//         </div>

//         <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {list.map((service) => (
//             <div
//               key={service.id}
//               className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
//             >
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
//                 {iconMap[service.icon || 'zap'] || <Zap size={20} />}
//               </div>
//               <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
//                 {service.title}
//               </h3>
//               <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


















// // import {
// //   Zap,
// //   Database,
// //   Code,
// //   Palette,
// //   Rocket,
// //   Settings,
// //   type LucideIcon,
// // } from "lucide-react";
// // import type { Service } from "@/payload-types";

// // type ServicesProps = {
// //   services: Service[];
// // };

// // // Map Payload's enum values → Lucide icons.
// // // NonNullable strips `null | undefined` from the keys.
// // const ICONS: Record<NonNullable<Service["icon"]>, LucideIcon> = {
// //   zap: Zap,
// //   database: Database,
// //   code: Code,
// //   palette: Palette,
// //   rocket: Rocket,
// //   settings: Settings,
// // };

// // const FALLBACK_ICON: LucideIcon = Settings;

// // export function Services({ services }: ServicesProps) {
// //   return (
// //     <section id="services" className="py-24">
// //       <div className="container mx-auto px-6">
// //         <div className="grid md:grid-cols-3 gap-6">
// //           {services.map((service) => {
// //             const Icon =
// //               (service.icon && ICONS[service.icon]) ?? FALLBACK_ICON;

// //             return (
// //               <div
// //                 key={service.id}
// //                 className="glass rounded-2xl p-6 space-y-4"
// //               >
// //                 <div className="p-3 rounded-xl bg-primary/10 w-fit">
// //                   <Icon className="w-6 h-6 text-primary" />
// //                 </div>
// //                 <h3 className="text-xl font-semibold">{service.title}</h3>
// //                 {service.description && (
// //                   <p className="text-muted-foreground text-sm">
// //                     {service.description}
// //                   </p>
// //                 )}
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }








// // // import { Code2, Database, Palette, Rocket, Settings, Zap } from 'lucide-react'

// // // interface Service {
// // //   id: number
// // //   // id: string
// // //   title: string
// // //   description: string
// // //   icon?: string
// // // }

// // // interface ServicesProps {
// // //   services: Service[]
// // // }

// // // const fallbackServices: Service[] = [
// // //   {
// // //     id: 1,
// // //     title: 'Next.js Development',
// // //     description:
// // //       'Blazing-fast, SEO-optimized applications built with the App Router and React Server Components.',
// // //     icon: 'zap',
// // //   },
// // //   {
// // //     id: 2,
// // //     title: 'Payload CMS',
// // //     description:
// // //       'Custom content management systems tailored to your workflow — flexible, type-safe, and developer-friendly.',
// // //     icon: 'database',
// // //   },
// // //   {
// // //     id: 3,
// // //     title: 'Full-Stack Apps',
// // //     description:
// // //       'End-to-end development from database design to deployment. Postgres, tRPC, and modern tooling.',
// // //     icon: 'code',
// // //   },
// // //   {
// // //     id: 4,
// // //     title: 'UI/UX Design',
// // //     description:
// // //       'Clean, accessible interfaces designed in Figma and shipped with TailwindCSS and ShadCN.',
// // //     icon: 'palette',
// // //   },
// // //   {
// // //     id: 5,
// // //     title: 'Performance Audits',
// // //     description:
// // //       'Deep-dive optimization of your existing site — Core Web Vitals, bundle size, and database queries.',
// // //     icon: 'rocket',
// // //   },
// // //   {
// // //     id: 6,
// // //     title: 'Maintenance & Support',
// // //     description:
// // //       'Ongoing retainers for updates, feature work, and peace of mind so you can focus on your business.',
// // //     icon: 'settings',
// // //   },
// // // ]

// // // const iconMap: Record<string, React.ReactNode> = {
// // //   zap: <Zap size={20} />,
// // //   database: <Database size={20} />,
// // //   code: <Code2 size={20} />,
// // //   palette: <Palette size={20} />,
// // //   rocket: <Rocket size={20} />,
// // //   settings: <Settings size={20} />,
// // // }

// // // export function Services({ services }: ServicesProps) {
// // //   const list = services.length > 0 ? services : fallbackServices

// // //   return (
// // //     <section id="services" className="py-24 md:py-32">
// // //       <div className="mx-auto max-w-7xl px-6">
// // //         <div className="mx-auto max-w-2xl text-center">
// // //           <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
// // //             SERVICES
// // //           </p>
// // //           <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
// // //             Everything you need to launch
// // //           </h2>
// // //           <p className="mt-4 text-neutral-600 dark:text-neutral-400">
// // //             From concept to deployment — I handle the entire lifecycle of your
// // //             web project.
// // //           </p>
// // //         </div>

// // //         <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
// // //           {list.map((service) => (
// // //             <div
// // //               key={service.id}
// // //               className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
// // //             >
// // //               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
// // //                 {iconMap[service.icon || 'zap'] || <Zap size={20} />}
// // //               </div>
// // //               <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
// // //                 {service.title}
// // //               </h3>
// // //               <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
// // //                 {service.description}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }