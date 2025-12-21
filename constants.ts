import { PortfolioData, BlogPost } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Mohd Wajeethu Ali",
  title: "Full Stack Developer",
  about: "FullStack Developer with 2+ years of experience in building scalable and efficient web applications using a range of technologies. Proficient in HTML, CSS, JavaScript, and C#. Strong understanding of database design, development, and deployment.",
  skills: [
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "ASP.Net", level: 80, category: "Backend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Docker", level: 75, category: "Tools" },
    { name: "AWS", level: 70, category: "Tools" },
    { name: "MySQL", level: 85, category: "Backend" },
    { name: "MongoDB", level: 80, category: "Backend" },
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Orient Technology FZCO, Dubai, UAE",
      period: "Oct 2023 - Aug 2025",
      description: "Building user interfaces and client-side logic using HTML, CSS, and JavaScript. Building server-side logic, database integration, and API connectivity using Python and ASP.Net. Designing, implementing, and managing databases to store and retrieve data. Building and integrating APIs to enable communication between front-end and back-end systems.",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqlD8dM3ceBNOgip-LQ93kdG9c1-D9pX1bSrKtsRd8qIOxpHspnHPRmY&s=10",
      companyUrl: "https://www.orientindia.in/"
    },
    {
      role: "Senior Web Analyst",
      company: "Orient Technology FZCO, Dubai, UAE",
      period: "Jun 2021 - Sept 2023",
      description: "Analyzing website data to identify trends, patterns, and insights. Developing and implementing web analytics strategies to drive business growth. Creating reports and dashboards to communicate insights and recommendations to stakeholders.",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqlD8dM3ceBNOgip-LQ93kdG9c1-D9pX1bSrKtsRd8qIOxpHspnHPRmY&s=10",
      companyUrl: "https://www.orientindia.in/"
    },
    {
      role: "Front End Developer",
      company: "Orient Technology FZCO, Dubai, UAE",
      period: "Aug 2018 - May 2021",
      description: "Creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript. Writing clean, efficient, and well-documented front-end code. Ensuring that web applications are responsive and work well on different devices and screen sizes.",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqlD8dM3ceBNOgip-LQ93kdG9c1-D9pX1bSrKtsRd8qIOxpHspnHPRmY&s=10",
      companyUrl: "https://www.orientindia.in/"
    },
    {
      role: "Senior Document Specialist",
      company: "RRD India Outsourcing Pvt. Ltd, IND",
      period: "Jul 2017 - Jun 2018",
      description: "Implementing and maintaining document control systems, version control, and access protocols to ensure efficient document management. Working with cross-functional teams, subject matter experts, and stakeholders to gather information.",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/RR_Donnelley_logo.svg/1200px-RR_Donnelley_logo.svg.png",
      companyUrl: "https://www.rrd.com"
    }
  ],
  projects: [
    {
      id: "node-student-db",
      title: "Student Academic Suite",
      description: "Advanced Node.js backend repository for managing academic student records.",
      longDescription: "A comprehensive backend system designed for high-availability academic management. Implements RBAC (Role Based Access Control), automated report generation, and an optimized MongoDB schema for fast searching of over 100k student records.",
      tags: ["Node.js", "Express", "MongoDB", "Mongoose"],
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "Backend"
    },
    {
      id: "node-employee-db",
      title: "Enterprise HR Dashboard",
      description: "Node.js powered repository for corporate HR management and resource planning.",
      longDescription: "An internal ERP tool built with NestJS and PostgreSQL. It streamlines employee onboarding, performance reviews, and salary disbursement workflows using Prisma as the ORM and BullMQ for background processing.",
      tags: ["Node.js", "NestJS", "PostgreSQL", "Prisma"],
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "Fullstack"
    },
    {
      id: "node-movie-booking",
      title: "CineReserve Engine",
      description: "Scalable Node.js system for real-time cinema reservations with seat mapping.",
      longDescription: "A high-concurrency reservation engine using Redis for real-time seat locking and WebSockets for live seat availability updates across clients. Integrated with Stripe for secure transactional processing.",
      tags: ["Node.js", "Socket.io", "Redis", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "Systems"
    },
    {
      id: "node-ecommerce-adv",
      title: "E-Commerce Core",
      description: "Comprehensive Node.js e-commerce engine supporting multi-vendor catalogs.",
      longDescription: "A headless e-commerce backend built with Fastify and GraphQL. Features include image processing via AWS Lambda, inventory management, and a robust cart persistence strategy using a multi-layered cache.",
      tags: ["Node.js", "Fastify", "GraphQL", "AWS S3"],
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "Backend"
    },
    {
      id: "node-grade-system",
      title: "Insight Grades",
      description: "Data-driven Node.js analytics repository for academic grading and trends.",
      longDescription: "A specialized data processing tool that aggregates student performance metrics. It provides statistical insights using D3-inspired data structures and generates secure PDF report cards automatically on a scheduled basis.",
      tags: ["Node.js", "TypeScript", "Chart.js", "PDFKit"],
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "Systems"
    }
  ]
};

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Frontend Architecture",
    excerpt: "Exploring the shift from monolithic SPAs to island architecture and server components.",
    content: "In recent years, we've seen a massive shift in how we build web applications. The era of the massive client-side bundle is slowly fading, replaced by smarter, server-aware frameworks.",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    tags: ["React", "Architecture", "Performance"],
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS Patterns",
    excerpt: "How to keep your utility classes organized and maintainable in large-scale applications.",
    content: "Tailwind CSS has revolutionized styling, but without discipline, your HTML can quickly become cluttered. The key to maintainability lies in component abstraction.",
    date: "Nov 05, 2023",
    readTime: "4 min read",
    tags: ["CSS", "Tailwind", "Tips"],
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800"
  }
];

export const NAV_LINKS = [
  { name: 'About', href: '#hero' },
  { name: 'Core Competencies', href: '#competencies' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];
