// app/page.tsx
import { Hero } from '@/components/Hero'
import { CTA } from '@/components/CTA'
import { Services } from '@/components/Services'
import { TechStack } from '@/components/TechStack'
import { Process } from '@/components/Process'
import { Projects } from '@/components/Projects'

import { services } from '@/data/services'
import { projects } from '@/data/projects'



export default function HomePage() {
  return (
    <main>
      <Hero />
      <CTA />
      <Services services={services} />
      <TechStack />
      <Projects projects={projects} />
      <Process />
    </main>
  )
}










// import { Navbar } from '@/components/Navbar'
// import { Hero } from '@/components/Hero'
// import { Services } from '@/components/Services'
// import { TechStack } from '@/components/TechStack'
// import { Projects } from '@/components/Projects'
// import { CTA } from '@/components/CTA'
// import { Process } from '@/components/Process'
// import { Testimonials } from '@/components/Testimonials'
// import Footer from '@/components/Footer'



// export default function HomePage() {
  

//   return (
//     <main className="min-h-screen bg-white dark:bg-neutral-950">
//       <Navbar />
//       <Hero />
//       <CTA />
//       <Services services={services} />
//       <TechStack />
//       <Projects projects={projects} />
//       <Process />
//       {/* <Testimonials testimonials={testimonials} /> */}
//       <CTA />

//       <Footer />
      
//     </main>
//   )
// }







