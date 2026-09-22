import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { EmailLink } from './EmailLink'

export function CTA() {
  // 👇 Replace with your WhatsApp number (digits only, with country code)
  const whatsappNumber = "923008245133";
  const whatsappMessage = "Hi! I'd like to book a call to discuss a project.";

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl dark:text-white">
          Let&apos;s build something great
        </h2>

        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
          Have a project in mind? I&apos;d love to hear about it. Reach out and
          let&apos;s discuss how I can help.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <EmailLink
            email="epassionate01@gmail.com"
            subject="Project Inquiry"
            body="Hi, I came across your portfolio and would like to discuss a project..."
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          />

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
          >
            <MessageCircle
              size={16}
              aria-hidden="true"
              className="transition group-hover:scale-110"
            />
            Book a call
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}








// import Link from 'next/link'
// import { ArrowRight } from 'lucide-react'
// import { EmailLink } from './EmailLink'

// export function CTA() {
//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden py-24 md:py-32"
//     >
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
//       </div>

//       <div className="mx-auto max-w-4xl px-6 text-center">
//         <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl dark:text-white">
//           Let&apos;s build something great
//         </h2>

//         <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
//           Have a project in mind? I&apos;d love to hear about it. Reach out and
//           let&apos;s discuss how I can help.
//         </p>

//         <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
//           <EmailLink
//             email="epassionate01@gmail.com"
//             subject="Project Inquiry"
//             body="Hi, I came across your portfolio and would like to discuss a project..."
//             className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
//           />

//           <Link
//             href="/contact"
//             className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
//           >
//             Book a call
//             <ArrowRight
//               size={16}
//               className="transition group-hover:translate-x-1"
//               aria-hidden="true"
//             />
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }













// // import Link from 'next/link'
// // import { ArrowRight, Mail } from 'lucide-react'

// // export function CTA() {
// //   return (
// //     <section
// //       id="contact"
// //       className="relative overflow-hidden py-24 md:py-32"
// //     >
// //       <div className="absolute inset-0 -z-10">
// //         <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
// //       </div>

// //       <div className="mx-auto max-w-4xl px-6 text-center">
// //         <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl dark:text-white">
// //           Let's build something great
// //         </h2>
// //         <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
// //           Have a project in mind? I'd love to hear about it. Reach out and
// //           let's discuss how I can help.
// //         </p>
        

// //         <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
// //           <a
// //             href="mailto:epassionate01@gmail.com"
// //             className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
// //           >
// //             <Mail size={16} />
// //             epassionate01@gmail.com
// //           </a>

// //           <Link
// //             href="/contact"
// //             className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
// //           >
// //             Book a call
// //             <ArrowRight
// //               size={16}
// //               className="transition group-hover:translate-x-1"
// //             />
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }