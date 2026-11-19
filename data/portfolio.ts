export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  challenge: string;
  approach: string;
  features: string[];
  liveUrl?: string;
  repositoryUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "everyday-store",
    title: "Everyday Store",
    category: "E-commerce",
    description:
      "A considered shopping experience, from finding the right product to managing an order.",
    technologies: ["React", "Node.js", "MongoDB"],
    challenge:
      "Design a shopping journey that keeps product discovery and order management easy to understand.",
    approach:
      "A reusable product catalog, a dedicated order service, and a responsive interface with clear loading and error states.",
    features: [
      "Searchable product catalog and category filters",
      "Shopping cart and checkout flow",
      "Inventory and order management dashboard",
    ],
  },
  {
    slug: "teamflow",
    title: "Teamflow",
    category: "Productivity",
    description:
      "A shared workspace for planning projects, organizing tasks, and keeping a team aligned.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    challenge:
      "Help a small team understand priorities and ownership without spreading updates across multiple tools.",
    approach:
      "Organize work around projects and tasks, with typed APIs, role-based access, and an accessible task board.",
    features: [
      "Project boards with task status and ownership",
      "Milestones, due dates, and activity history",
      "Team roles and progress summaries",
    ],
  },
  {
    slug: "cloudpulse",
    title: "CloudPulse",
    category: "Cloud engineering",
    description:
      "An operations dashboard that makes service health, incidents, and cloud usage easier to follow.",
    technologies: ["TypeScript", "AWS", "Node.js"],
    challenge:
      "Bring service signals together so a team can spot problems and understand their impact quickly.",
    approach:
      "Collect service metrics through an API layer, summarize them in a dashboard, and surface actionable alerts.",
    features: [
      "Service health overview and metric trends",
      "Incident timeline and alert summaries",
      "Cloud usage and cost breakdowns",
    ],
  },
];

export type Credential = {
  id: string;
  category: "Education" | "Certification" | "Training" | "Achievement";
  title: string;
  organization: string;
  period?: string;
  description: string;
  verificationUrl?: string;
};

export const cv = {
  url: "/documents/Mercy_Maloba_CV.pdf",
  filename: "Mercy_Maloba_CV.pdf",
};

export const credentials: Credential[] = [
  {
    id: "degree",
    category: "Education",
    title: "Bachelor of Business Innovation Technology Management",
    organization: "Jomo Kenyatta University of Agriculture and Technology",
    period: "August 2016 – April 2021",
    description: "First Class Honours · GPA 3.59/4.",
  },
  {
    id: "moringa",
    category: "Training",
    title: "Software Development",
    organization: "Moringa School",
    period: "May – October 2021",
    description: "Graduated with Distinction.",
  },
  {
    id: "cpa",
    category: "Education",
    title: "Certified Public Accountant I",
    organization: "Mwangaza College",
    period: "January – May 2016",
    description: "Graduated with Distinction.",
  },
  {
    id: "aws",
    category: "Certification",
    title: "AWS AI Practitioner",
    organization: "AWS",
    period: "April 2026",
    description:
      "Listed under professional courses and certifications in my CV.",
  },
  {
    id: "react",
    category: "Training",
    title: "Ultimate React Course",
    organization: "Professional development",
    period: "March 2024",
    description: "Specialized React training.",
  },
  {
    id: "analytics",
    category: "Certification",
    title: "Google Data Analytics",
    organization: "Google",
    period: "November 2022",
    description: "Professional course in data analytics.",
  },
  {
    id: "pm",
    category: "Certification",
    title: "Project Management",
    organization: "Google",
    period: "September 2022",
    description: "Professional course in project management.",
  },
  {
    id: "cyberops",
    category: "Certification",
    title: "CyberOps Associate",
    organization: "Cisco Networking Academy",
    period: "August 2022",
    description: "Cybersecurity operations training.",
  },
  {
    id: "oracle",
    category: "Certification",
    title: "Oracle Cloud Infrastructure Foundations Associate",
    organization: "Oracle University",
    period: "May 2022",
    description: "Cloud infrastructure foundations.",
  },
  {
    id: "support",
    category: "Certification",
    title: "Google IT Support Professional Certificate",
    organization: "Google",
    period: "January 2022",
    description: "Professional IT support training.",
  },
  {
    id: "web",
    category: "Training",
    title: "Basics of Web Development and Coding",
    organization: "University of Michigan",
    period: "December 2020",
    description: "Web development foundations.",
  },
  {
    id: "ip",
    category: "Training",
    title: "General Course on Intellectual Property",
    organization: "WIPO Academy",
    period: "August 2019",
    description: "Intellectual property foundations.",
  },
  {
    id: "patents",
    category: "Training",
    title: "Searching Prior Art Based on Patent Applications",
    organization: "EPO Academy",
    period: "June 2019",
    description: "Prior-art research and patent search training.",
  },
  {
    id: "pdtp",
    category: "Training",
    title: "Presidential Digital Talent Program · Cohort VII",
    organization: "ICT Authority",
    period: "November 2021 – March 2022",
    description:
      "Worked as a Networks and Security Officer supporting network security, infrastructure, and data-centre operations.",
  },
  {
    id: "banking",
    category: "Achievement",
    title: "Delivering measurable banking improvements",
    organization: "Diamond Trust Bank",
    description:
      "Developed a consent management portal serving 50,000+ customers and a loan dashboard that reduced manual processing time by 40%.",
  },
  {
    id: "delivery",
    category: "Achievement",
    title: "Reliable delivery & faster systems",
    organization: "Diamond Trust Bank",
    description:
      "100+ merged pull requests; helped reduce deployment errors by 20% and improved PostgreSQL query response speeds by 50%.",
  },
  {
    id: "mentoring",
    category: "Achievement",
    title: "Mentorship & community service",
    organization: "Daring Distant Dreams · President’s Award Scheme",
    description:
      "Mentors young graduates in personal and professional development. Gold Award champion of the President’s Award Scheme.",
  },
  {
    id: "leadership",
    category: "Achievement",
    title: "Team leadership in sport",
    organization: "Provincial table tennis",
    description:
      "Led a team of seven players competing at provincial level, earning trophies and recognition.",
  },
];

export const skillAreas = [
  {
    title: "Frontend development",
    description:
      "Responsive interfaces for digital banking, payments, and enterprise applications.",
    tools: "React / Next.js / Angular / JavaScript / TypeScript / HTML5 / CSS3",
  },
  {
    title: "Backend & data",
    description:
      "API integrations and data-driven services that connect business workflows.",
    tools: "Node.js / PHP / Python / RESTful APIs / MySQL / PostgreSQL",
  },
  {
    title: "AI & intelligent applications",
    description:
      "Tools and approaches for building applications with generative AI.",
    tools: "RAG / Amazon Bedrock / AWS PartyRock / LLMs / MCP / Agentic AI",
  },
  {
    title: "Design & styling",
    description: "From interface design to adaptable frontend styling.",
    tools:
      "SASS / Bootstrap / Tailwind CSS / Figma / Adobe Photoshop / Adobe Illustrator",
  },
  {
    title: "Delivery & infrastructure",
    description:
      "Collaborative delivery, containerized services, and dependable deployments.",
    tools: "Git / Azure DevOps / Netlify / Docker / Kubernetes / Azure / Nginx",
  },
  {
    title: "Analytics & quality",
    description:
      "End-to-end testing, performance improvements, and analytics to inform decisions.",
    tools:
      "Google Analytics / Firebase / End-to-end testing / PostgreSQL optimization",
  },
];
