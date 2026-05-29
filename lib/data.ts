import { Project, Skill, Experience } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, inventory management, and user authentication.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time collaborative task management application with drag-and-drop functionality.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'AI Chat Assistant',
    description: 'An intelligent chat application powered by machine learning with natural language processing.',
    technologies: ['Python', 'React', 'TensorFlow', 'FastAPI'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard for real-time analytics and reporting.',
    technologies: ['Next.js', 'D3.js', 'PostgreSQL', 'Recharts'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Firebase'],
  },
  {
    category: 'Other',
    items: ['UI/UX Design', 'Problem Solving', 'Agile', 'Figma', 'Testing'],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Company Inc',
    position: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Led the development of modern web applications using React and Next.js, mentored junior developers, and improved application performance by 40%.',
  },
  {
    id: 2,
    company: 'Digital Solutions Ltd',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained full-stack web applications, implemented REST APIs, and collaborated with cross-functional teams.',
  },
  {
    id: 3,
    company: 'Startup Hub',
    position: 'Junior Developer',
    period: '2018 - 2020',
    description: 'Built responsive web interfaces and worked on bug fixes and feature implementations for multiple projects.',
  },
];
