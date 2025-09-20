export interface CVData {
  name: string;
  title: string;
  profileImage: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    github: string;
  };
  profileSummary: string;
  education: {
    institution: string;
    field: string;
  };
  experience: {
    role: string;
    company: string;
    tech: string[];
  };
  skills: string[];
}

export const cvData: CVData = {
  name: "Fathurrahman",
  title: "Frontend & Fullstack Developer",
  profileImage: "https://avatars.githubusercontent.com/u/115223251?v=4",
  contact: {
    phone: "0877-8710-8086",
    email: "fathurrahman.work@gmail.com",
    location: "Bekasi, Indonesia",
    github: "github.com/fathurrahman1221",
  },
  profileSummary:
    "I am a fresh graduate of Software Engineering with experience building web apps using React, Next.js, and Hono. I focus on the frontend but also explore the backend to become a more complete software engineer.",
  education: {
    institution: "Universitas Bina Sarana Informatika",
    field: "Rekayasa Perangkat Lunak",
  },
  experience: {
    role: "Frontend Intern",
    company: "PT Widya Informasi Nusantara",
    tech: ["React", "Next.js", "Tailwind"],
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Bootstrap",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Hono.js",
    "Express.js",
    "Prisma ORM",
  ],
};
