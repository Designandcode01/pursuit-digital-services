// components/Projects.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectsProps {
  projects?: Project[];
}

// Mock data — replace `image` and `url` with your real values
const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Pursuit Medical School",
    description:
      "A comprehensive medical school quiz platform with real data visualization.",
    image: "/pms.png", // 👈 replace
    url: "https://pursuitmedicalschoolquiz.vercel.app", // 👈 replace
  },
  {
    id: "2",
    title: "Pursuit Digital Services",
    description:
      "A full-featured digital services platform with booking and admin dashboard.",
    image: "/pds.png", // 👈 replace
    url: "https://pursuit-digital-services.vercel.app", // 👈 replace
  },
  {
    id: "3",
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "/projects/ai-writing-assistant.jpg", // 👈 replace
    url: "https://draftly-ai.com", // 👈 replace
  },
];

export function Projects({ projects }: ProjectsProps) {
  const items = projects && projects.length > 0 ? projects : MOCK_PROJECTS;

  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <header className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              SELECTED WORK
            </p>
            <h2
              id="work-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white"
            >
              Recent projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-white"
          >
            View all projects <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </header>

        {items.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-neutral-300 p-12 text-center dark:border-neutral-700">
            <p className="text-neutral-500">No projects yet.</p>
          </div>
        ) : (
          <ul
            role="list"
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const href = project.url ?? "#";
  const isExternal = Boolean(project.url);

  const linkProps = isExternal
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };

  return (
    <li>
      <Link
        {...linkProps}
        className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-4">
          <h3 className="flex items-center gap-1 text-lg font-semibold text-neutral-900 dark:text-white">
            {project.title}
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="opacity-0 transition group-hover:opacity-100"
            />
          </h3>

          <p className="mt-1 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
        </div>
      </Link>
    </li>
  );
}