const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We discuss your goals, audience, and technical requirements. I learn about your business.',
  },
  {
    number: '02',
    title: 'Design & Plan',
    description:
      'Wireframes, content modeling, and a clear roadmap. You approve before any code is written.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Iterative development with weekly check-ins. You see progress in a live staging environment.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'Deployment, training, and ongoing support. Your site goes live and keeps improving.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="border-y border-neutral-200 bg-neutral-50 py-24 md:py-32 dark:border-neutral-800 dark:bg-neutral-900/50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            PROCESS
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            How we'll work together
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            A transparent, collaborative process designed to deliver results
            without surprises.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="text-4xl font-bold text-neutral-300 dark:text-neutral-700">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}