'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#work',     label: 'Work' },
  { href: '/#process',  label: 'Process' },
  { href: '/blog',      label: 'Blog' },
  { href: '/#contact',  label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  // useEffect(() => {
  //   setOpen(false)
  // }, [pathname])
  // ✅ keep — this is a valid use of useEffect
useEffect(() => {
  document.body.style.overflow = open ? 'hidden' : ''
  return () => {
    document.body.style.overflow = ''
  }
}, [open])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Pursuit Digital Services — Home">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-neutral-950 sm:h-14 sm:w-14">
            <Image
              src="/pursuitdigitalservices.png"
              alt="Pursuit Digital Services Logo"
              fill
              className="object-contain"
              priority
              sizes="56px"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  'text-sm transition hover:text-neutral-900 dark:hover:text-white ' +
                  (active
                    ? 'font-medium text-neutral-900 dark:text-white'
                    : 'text-neutral-600 dark:text-neutral-400')
                }
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/#contact"
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 md:hidden dark:text-neutral-200 dark:hover:bg-neutral-800"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-neutral-200 bg-white px-6 py-4 md:hidden dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    'block py-3 text-base transition ' +
                    (active
                      ? 'font-medium text-neutral-900 dark:text-white'
                      : 'text-neutral-600 dark:text-neutral-400')
                  }
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}








// 'use client'

// import Link from 'next/link'
// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'
// import Image from 'next/image'

// const navLinks = [
//   { href: '#services', label: 'Services' },
//   { href: '#work', label: 'Work' },
//   { href: '#process', label: 'Process' },
//   { href: '#contact', label: 'Contact' },
// ]

// export function Navbar() {
//   const [open, setOpen] = useState(false)

//   return (
//     <header className="fixed top-0 z-50 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
//         <Link href="/" className="flex items-center gap-2">
//   <div className="relative h-37 w-37 rounded-full overflow-hidden bg-gray-100">
//    <Image
//     src="/pursuitdigitalservices.png"
//     alt="Pursuit Digital Services Logo"
//     fill
//     className="object-contain bg-gray-950" // Add padding if needed
//     priority
//     sizes="200px"
//    />
//  </div> 

//           {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
//             <span className="font-bold">P</span>
//           </div> */}
//           {/* <span className="font-semibold tracking-tight">Pursuit Digital</span> */}
//         </Link>
  

//         <div className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
//             >
//               {link.label}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
//           >
//             Start a Project
//           </a>
//         </div>

//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden"
//           aria-label="Toggle menu"
//         >
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {open && (
//         <div className="border-t border-neutral-200 px-6 py-4 md:hidden dark:border-neutral-800">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={() => setOpen(false)}
//               className="block py-2 text-neutral-600 dark:text-neutral-400"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>
//       )}
//     </header>
//   )
// }