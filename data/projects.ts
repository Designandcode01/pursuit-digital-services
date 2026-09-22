import type { Project } from "@/types";

export const projects: Project[] = [
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