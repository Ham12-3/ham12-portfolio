export const profile = {
  firstName: "Abdulhamid",
  fullName: "Abdulhamid Sonaike",
  logo: { light: "abdul", bold: "hamid." },
  tagline: "A software engineer & AI specialist currently based in London",
  resume: "/abulhamid_sonaike_verified-resume.pdf",
  photo: "/images/profile.jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulhamid-sonaike/" },
  { label: "GitHub", href: "https://github.com/Ham12-3" },
  { label: "Twitter", href: "https://x.com/AbdulSonaike" },
  { label: "Instagram", href: "https://www.instagram.com/sonaike.ai/" },
];

export interface Work {
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  domain: string;
}

export const works: Work[] = [
  {
    title: "PulsePM",
    category: "AI Project Management",
    description:
      "Project management where the AI does the admin — turns a whiteboard photo into a full plan, flags what's slipping, and writes the status report.",
    image: "/images/projects/pulsepm.png",
    url: "https://www.pulsepm.ai/",
    domain: "pulsepm.ai",
  },
  {
    title: "Genie AI",
    category: "AI Platform",
    description:
      "Enterprise-grade AI platform transforming how users interact with intelligent systems.",
    image: "/images/projects/genie-ai.png",
    url: "https://genieai.io/",
    domain: "genieai.io",
  },
  {
    title: "LotusBPM",
    category: "EdTech · AI Docs Copilot",
    description:
      "Helping students study 70% faster, with a 30,000+ user waitlist eager for launch.",
    image: "/images/projects/lotusbpm-ai.png",
    url: "https://lotusbpm.ai/",
    domain: "lotusbpm.ai",
  },
  {
    title: "Opsis AI",
    category: "AI Storyboarding",
    description:
      "AI assistant helping 2D and 3D animators create beautiful storyboards, saving 4–5 hours per project.",
    image: "/images/projects/opsis-ai.png",
    url: "https://www.opsislabs.com/",
    domain: "opsislabs.com",
  },
];

export const services = [
  "AI Applications",
  "Full Stack",
  "Cloud & AWS",
  "UI/UX Design",
];

// Rendered as wordmarks in the marquee — companies, institutions and tools I've worked with
export const brands = [
  { name: "PulsePM", className: "font-bold tracking-tight" },
  { name: "genie ai", className: "font-semibold tracking-tight" },
  { name: "OPSIS", className: "font-bold tracking-[0.2em]" },
  { name: "lotusbpm", className: "font-semibold italic" },
  { name: "aws", className: "font-bold" },
  { name: "Barclays", className: "font-medium" },
  { name: "Stanford", className: "font-serif font-semibold" },
  { name: "Aston", className: "font-semibold tracking-wide" },
  { name: "openai", className: "font-medium tracking-tight" },
];

export interface Impact {
  value: string;
  label: string;
  context: string;
  statement: string;
}

export const impact: Impact[] = [
  {
    value: "30K+",
    label: "Waitlist users",
    context: "LotusBPM & Opsis AI",
    statement:
      "Grew a waitlist past 30,000 users through social campaigns I created and managed — before a single line of the product shipped.",
  },
  {
    value: "55%",
    label: "Faster responses",
    context: "Genie AI",
    statement:
      "Cut API response time from 420 ms to 190 ms and brought crash rates down to 0.3% with async code and smarter database indexes.",
  },
  {
    value: "70%",
    label: "Faster learning",
    context: "AI Docs Copilot",
    statement:
      "Built an AI docs copilot that helps students learn 70% faster and improve their grades by up to 90%.",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Genie AI",
    period: "Sep 2025 – Present",
    location: "Toronto, Canada · Remote",
    summary:
      "Leading development of enterprise-grade AI applications that transform how businesses interact with intelligent systems.",
    achievements: [
      "Made the app faster: response time went from 420 ms to 190 ms (55% quicker)",
      "Reduced crashes to 0.3% by using async code and better database indexes",
      "Built scalable solutions using Next.js, FastAPI, and AWS services",
    ],
  },
  {
    role: "Software Engineer",
    company: "Opsis AI",
    period: "Jul 2025 – Sep 2025",
    location: "United States · Remote",
    summary:
      "Led development of an AI assistant helping 2D and 3D animators create beautiful storyboards.",
    achievements: [
      "Built a platform saving animators 4–5 hours per project; resulted in thousands of pounds saved",
      "Grew waitlist to 30,000+ users through social media campaigns I created and managed",
      "Developed AI-powered storyboard generation using advanced machine learning models",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "LOTUS BPM AI Services",
    period: "Jan 2025 – Aug 2025",
    location: "United States · Remote",
    summary:
      "Built the AI DOCS COPILOT application helping students learn 70% faster and improve grades by 90%.",
    achievements: [
      "Integrated OpenAI, Claude, Stripe for payments, and Langchain for AI functionality",
      "Developed scalable cloud infrastructure using AWS (S3, EC2, RDS, Lambda)",
      "Created an intuitive interface with Next.js and React for seamless document interaction",
    ],
  },
  {
    role: "Software Engineer",
    company: "Open Source Technology Community",
    period: "Jan 2024 – Dec 2024",
    location: "London, UK",
    summary:
      "Contributed to open source projects and built an engaged community through technical writing and development.",
    achievements: [
      "Wrote 20+ technical articles about software development and cloud computing best practices",
      "Built a community of nearly 5,000 followers across LinkedIn, Instagram, and Twitter",
      "Improved the Dottie AI application and TheTechCommute website performance by 30%",
    ],
  },
  {
    role: "Professional Development Programmes",
    company: "Amazon Web Services & Barclays",
    period: "May 2024 – Jun 2024",
    location: "London, UK",
    summary:
      "Completed comprehensive training programmes in cloud computing and finance technology.",
    achievements: [
      "Completed AWS Developer training and earned the AWS Certified Developer Associate certification",
      "Took part in the Barclays Finance Technology programme through Springboard",
      "Gained deep knowledge of AWS services, cloud architecture, and financial technology systems",
    ],
  },
];

export const education = [
  {
    title: "BSc Computer Science",
    meta: "Ongoing - Aston University",
  },
  {
    title: "Machine Learning & Artificial Intelligence",
    meta: "Distinction - Stanford University (Online)",
  },
  {
    title: "Extended National Diploma in IT",
    meta: "2025 - Lewisham College · Distinction (A*A*A equivalent)",
  },
  {
    title: "AWS Certified Developer – Associate",
    meta: "2024 - Amazon Web Services",
  },
  {
    title: "Finance Technology Programme",
    meta: "2024 - Barclays Springboard",
  },
];

export const faqs = [
  {
    question: "What types of projects do you handle?",
    answer:
      "I specialise in AI-powered applications, web development, and full-stack solutions — educational platforms, AI tools, and scalable cloud applications built with Next.js, FastAPI, AWS, and the major AI APIs.",
  },
  {
    question: "How fast can you deliver?",
    answer:
      "A typical MVP ships in 4–6 weeks; more complex applications take 8–12 weeks. I prioritise quality and thorough testing before delivery — let's discuss your timeline.",
  },
  {
    question: "What is your development process?",
    answer:
      "Discovery call to understand your vision, then planning, design, development, and iterative testing — with clear communication and regular progress updates throughout.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. I offer maintenance and support covering bug fixes, updates, performance optimisation, and new features, tailored to what you need.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Next.js, React, TypeScript, Python, FastAPI, AWS, OpenAI, Claude, Langchain, and Stripe — and I keep up with the latest tools to deliver the best solution.",
  },
];
