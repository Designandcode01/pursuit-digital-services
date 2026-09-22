// types/index.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // path under /public
  url?: string;  // external link, optional
}