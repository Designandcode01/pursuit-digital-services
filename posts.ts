export interface IPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
}

export const posts: IPost[] = [
  {
    title: "Cybersecurity in 2024: Protecting Your Digital Assets",
    slug: "cybersecurity-in-2024-protecting-your-digital-assets",
    author: "Jason Wong",
    date: "2024-01-25",
    category: "Cybersecurity",
    thumbnail: "/images/thumbnails/cybersecurity.jpg",
  },
  {
    title: "Mastering React Hooks: A Comprehensive Guide",
    slug: "mastering-react-hooks-a-comprehensive-guide",
    author: "Michael Chen",
    date: "2024-02-20",
    category: "React",
    thumbnail: "/images/thumbnails/react-hooks.jpg",
  },
  {
    title: "Optimizing Next.js Applications for Maximum Performance",
    slug: "optimizing-nextjs-applications-for-maximum-performance",
    author: "David Kim",
    date: "2024-04-05",
    category: "Performance",
    thumbnail: "/images/thumbnails/nextjs-optimizing.jpg",
  },
  {
    title: "Why TypeScript Will Transform Your JavaScript Development",
    slug: "why-typescript-will-transform-your-javascript-development",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    category: "TypeScript",
    thumbnail: "/images/thumbnails/typescript.jpg",
  },
];
