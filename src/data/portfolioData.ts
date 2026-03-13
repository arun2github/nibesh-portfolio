// src/data/portfolioData.ts
// Nibhesh Kumar Das - Premium Mathematics Educator Portfolio

// --- INTERFACES ---
export interface ProfileData {
  name: string;
  helloTag: string;
  welcomeTag: string;
  title1: string;
  title2: string;
  about: string;
  about2: string;
  profileIconUrl: string;
  logoUrl: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  skillSet?: { name: string; level: number; color?: string; }[];
}

export interface ExpertisePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
}

export interface ServiceMethodologyStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
}

export interface LearningLibraryMetric {
  metric: string;
  value: string;
  description: string;
}

export interface Credential {
  title: string;
  issuer: string;
  date?: string;
  certificateId?: string;
  description: string;
}

export interface Experience {
  title: string;
  companyName: string;
  date: string;
  points: string[];
  logoUrl: string;
}

export interface EducationEntry {
  title: string;
  collegeName: string;
  date: string;
  branch?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription?: string;
  description: string;
  category?: string;
  tags: { name: string; color?: string; }[];
  imageUrl: string;
  technologiesUsed?: string[];
}

export interface SocialMediaLink {
  name: string;
  iconUrl: string;
  url: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  platform?: string;
  testimonial: string;
  achievement?: string;
}

export interface Service {
  title: string;
  iconUrl: string;
}

export interface Technology {
  name: string;
  iconUrl: string;
}

// --- PROFILE DATA ---
export const profileData: ProfileData = {
  name: "Nibhesh Kumar Das",
  helloTag: "Welcome to KGM CLASSES",
  welcomeTag: "Senior Mathematics Architect & Digital Educator",
  title1: "Senior Mathematics Architect",
  title2: "Digital Educator & GATE Expert",
  about: "With 16+ years of pedagogical expertise, I bridge the gap between conceptual depth and competitive success. Through 15,000+ live sessions and 500+ specialized video lectures, I've mentored thousands in IIT-JEE, Olympiads, GATE, and board examinations.",
  about2: "As a 2× GATE Qualifier (2011 & 2024) with CCNA certification, I combine scholarly rigor with practical expertise to deliver premium mathematics education.",
  profileIconUrl: "/images/nibhesh-profile.jpg",
  logoUrl: "/images/kgm-logo.svg",
  email: "nibhesh.edu@gmail.com",
  phone: "+91 9911318226",
  whatsapp: "919911318226",
  skillSet: [
    { name: "Complex Analysis", level: 95, color: "bg-blue-600" },
    { name: "Linear Algebra", level: 95, color: "bg-indigo-600" },
    { name: "Vector Calculus", level: 95, color: "bg-purple-600" },
    { name: "Differential Equations", level: 95, color: "bg-pink-600" },
    { name: "JEE Problem-Solving", level: 98, color: "bg-blue-500" },
    { name: "GATE Preparation", level: 98, color: "bg-amber-600" },
    { name: "Board Mathematics", level: 92, color: "bg-emerald-600" },
    { name: "Olympiad Mathematics", level: 90, color: "bg-cyan-600" }
  ]
};

// --- EXPERTISE PILLARS ---
export const expertisePillars: ExpertisePillar[] = [
  {
    id: "competitive-mastery",
    title: "Competitive Mastery",
    subtitle: "IIT-JEE & GATE Excellence",
    description: "Leveraging 2024 GATE qualification to teach cutting-edge shortcuts and exam patterns.",
    keyPoints: [
      "2024 GATE Qualification—current patterns & shortcuts",
      "Complex Analysis & Vector Calculus mastery",
      "Linear Algebra for competitive exams",
      "Differential Equations & advanced calculus",
      "Olympiad & JEE Advanced analytical rigor"
    ]
  },
  {
    id: "foundation-excellence",
    title: "Foundation & Board Excellence",
    subtitle: "Grades 8–12 Comprehensive Coverage",
    description: "Mastery across CBSE, ICSE, and IB curricula with concept-driven methodologies.",
    keyPoints: [
      "Complete 8th–12th grade mathematics coverage",
      "CBSE, ICSE, and IB board expertise",
      "Concept engineering methodology",
      "Future-ready analytical thinking",
      "Seamless transition to competitive exam prep"
    ]
  },
  {
    id: "institutional-infrastructure",
    title: "Institutional & Digital Infrastructure",
    subtitle: "Scalable Education Solutions",
    description: "Successfully managed 15,000+ live sessions on Vedantu with secure infrastructure expertise.",
    keyPoints: [
      "15,000+ live sessions on Vedantu platform",
      "Online exam logistics & proctoring setup",
      "CCNA networking expertise",
      "Digital pedagogy & content curation",
      "EdTech platform integration & management"
    ]
  }
];

// --- SERVICE METHODOLOGY ---
export const serviceMethodology: ServiceMethodologyStep[] = [
  {
    stepNumber: 1,
    title: "Diagnostic Profiling",
    description: "1-on-1 assessment to identify conceptual gaps and learning objectives.",
    details: [
      "Individual consultation session",
      "Assessment of current knowledge level",
      "Identification of weak areas",
      "Goal-setting for exam preparation"
    ]
  },
  {
    stepNumber: 2,
    title: "Strategic Exam Roadmap",
    description: "Personalized preparation plan aligned with target exam.",
    details: [
      "Custom curriculum design",
      "Topic-wise priority ranking",
      "Timeline and milestone planning",
      "Resource allocation and scheduling"
    ]
  },
  {
    stepNumber: 3,
    title: "High-Engagement Online Delivery",
    description: "Interactive live sessions with real-time problem-solving.",
    details: [
      "Weekly live interactive sessions",
      "Real-time doubt clarification",
      "Customized problem sets",
      "Advanced concept discussions"
    ]
  },
  {
    stepNumber: 4,
    title: "Parent & Institution Transparency",
    description: "Continuous communication and progress monitoring.",
    details: [
      "Monthly progress reports",
      "Parent-educator consultations",
      "Performance analytics dashboard",
      "Quarterly goal review and adjustment"
    ]
  }
];

// --- SERVICES & TECHNOLOGIES ---
export const services: Service[] = [
  { title: "IIT-JEE Preparation", iconUrl: "/images/service-jee.svg" },
  { title: "GATE Coaching", iconUrl: "/images/service-gate.svg" },
  { title: "Board Examinations", iconUrl: "/images/service-board.svg" },
  { title: "Olympiad Training", iconUrl: "/images/service-olympiad.svg" }
];

export const technologies: Technology[] = [
  { name: "Advanced Calculus", iconUrl: "/images/tech/calculus.svg" },
  { name: "Linear Algebra", iconUrl: "/images/tech/algebra.svg" },
  { name: "Complex Analysis", iconUrl: "/images/tech/complex.svg" },
  { name: "Differential Equations", iconUrl: "/images/tech/differential.svg" },
  { name: "Vector Calculus", iconUrl: "/images/tech/vector.svg" },
  { name: "Probability & Statistics", iconUrl: "/images/tech/probability.svg" }
];

// --- LEARNING LIBRARY METRICS ---
export const learningLibraryMetrics: LearningLibraryMetric[] = [
  {
    metric: "500+",
    value: "JEE Masterclass Videos",
    description: "Comprehensive video library covering all advanced topics"
  },
  {
    metric: "15,000+",
    value: "Live Interactive Sessions",
    description: "Sessions on Vedantu with high engagement rates"
  },
  {
    metric: "50+",
    value: "Structured Autoplay Series",
    description: "Curated content for systematic learning"
  },
  {
    metric: "1,000+",
    value: "Students Mentored",
    description: "Aspirants guided through exam preparation"
  }
];

// --- CREDENTIALS ---
export const credentials: Credential[] = [
  {
    title: "M.Sc Mathematics",
    issuer: "Kuvempu University",
    description: "Advanced mathematics with focus on abstract algebra and real analysis"
  },
  {
    title: "B.Tech Information Technology",
    issuer: "I.E.T.E New Delhi",
    description: "IT engineering with systems design and network expertise"
  },
  {
    title: "GATE Qualified (2011)",
    issuer: "Ministry of Education, India",
    date: "2011",
    description: "Graduate Aptitude Test in Engineering - Mathematics"
  },
  {
    title: "GATE Qualified (2024)",
    issuer: "Ministry of Education, India",
    date: "2024",
    description: "Recent qualification with latest exam insights"
  },
  {
    title: "CCNA Routing & Switching",
    issuer: "Cisco Systems",
    certificateId: "CSCO12812279",
    description: "Cisco Certified Network Associate with secure infrastructure expertise"
  }
];

// --- EXPERIENCES ---
export const experiences: Experience[] = [
  {
    title: "Senior Mathematics Educator & Digital Content Creator",
    companyName: "KGM Classes & Independent Practice",
    date: "2008 - Present | 16+ Years",
    points: [
      "Delivered 2,400+ live mathematics sessions with high engagement",
      "Created 500+ specialized JEE and Olympiad video lectures",
      "Mentored 1,000+ aspirants through competitive exam cycles",
      "Built pedagogical frameworks for advanced mathematics topics",
      "Managed institutional partnerships for curriculum development",
      "Designed premium 1-on-1 counseling methodologies"
    ],
    logoUrl: "/images/logos/kgm-classes.png"
  },
  {
    title: "Senior Educator & Institutional Partner",
    companyName: "Vedantu",
    date: "2015 - 2024 | 9 Years",
    points: [
      "Conducted 15,000+ live mathematics sessions",
      "Achieved 4.8+ rating with consistent student satisfaction",
      "Developed JEE Main, JEE Advanced, and GATE content",
      "Pioneered interactive problem-solving methodologies",
      "Trained junior educators on advanced pedagogy"
    ],
    logoUrl: "/images/logos/vedantu.png"
  }
];

// --- EDUCATION ---
export const education: EducationEntry[] = [
  {
    title: "M.Sc Mathematics",
    collegeName: "Kuvempu University",
    date: "2006 - 2008",
    branch: "Mathematics"
  },
  {
    title: "B.Tech Information Technology",
    collegeName: "I.E.T.E New Delhi",
    date: "2002 - 2006",
    branch: "Information Technology"
  }
];

// --- PROJECTS (Case Studies) ---
export const projects: Project[] = [
  {
    id: "jee-mastery-framework",
    title: "JEE Mastery Framework",
    shortDescription: "Proprietary framework for systematic JEE Advanced preparation",
    description: "A comprehensive, structured approach to JEE Advanced mathematics",
    category: "Educational Framework",
    tags: [
      { name: "JEE Advanced", color: "blueTextGradient" },
      { name: "Problem-Solving", color: "purpleTextGradient" },
      { name: "Advanced Mathematics", color: "yellowTextGradient" }
    ],
    imageUrl: "/images/projects/jee-mastery.jpg",
    technologiesUsed: ["Pedagogical Framework", "Video Content", "Interactive Worksheets"]
  },
  {
    id: "gate-precision-program",
    title: "GATE Precision Program",
    shortDescription: "Advanced GATE mathematics with 2024 qualification insights",
    description: "Utilizing recent GATE qualification for current exam patterns",
    category: "Exam Preparation Program",
    tags: [
      { name: "GATE", color: "amberTextGradient" },
      { name: "Advanced Mathematics", color: "blueTextGradient" },
      { name: "Current Patterns", color: "greenTextGradient" }
    ],
    imageUrl: "/images/projects/gate-program.jpg",
    technologiesUsed: ["Current Exam Analysis", "Video Tutorials", "Mock Tests"]
  }
];

// --- SOCIAL MEDIA LINKS ---
export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "LinkedIn",
    iconUrl: "/images/social/linkedin.svg",
    url: "https://www.linkedin.com/in/nibhesh-kumar-das/"
  },
  {
    name: "YouTube",
    iconUrl: "/images/social/youtube.svg",
    url: "https://www.youtube.com/@takeinmaths"
  },
  {
    name: "Instagram",
    iconUrl: "/images/social/instagram.svg",
    url: "https://www.instagram.com/nibhesh_mathematics/"
  },
  {
    name: "Facebook",
    iconUrl: "/images/social/facebook.svg",
    url: "https://www.facebook.com/nibhesh.mathematics"
  },
  {
    name: "Twitter",
    iconUrl: "/images/social/twitter.svg",
    url: "https://twitter.com/nibhesh_math"
  },
  {
    name: "AtoPlay",
    iconUrl: "/images/social/atoplay.svg",
    url: "https://atoplay.com/channels/e2c32d87-73be-4396-9fa9-a577b4a53135"
  },
  {
    name: "WhatsApp",
    iconUrl: "/images/social/whatsapp.svg",
    url: "https://wa.me/919911318226"
  }
];

// --- ACHIEVEMENTS ---
export const achievements: Achievement[] = [
  {
    title: "AtoPlay Big Learning Challenge Winner",
    issuer: "AtoPlay Educational Platform",
    date: "2024",
    description: "1st Place Winner - FluteMaths Channel recognized for exceptional educational content and student engagement",
    imageUrl: "/images/atoplay_winner.jpeg"
  },
  {
    title: "2× GATE Qualifier",
    issuer: "Ministry of Education, India",
    date: "2011 & 2024",
    description: "Qualified GATE in Mathematics, demonstrating mastery in advanced concepts",
    imageUrl: "/images/achievements/gate-qualifier.jpg"
  },
  {
    title: "15,000+ Live Sessions Conducted",
    issuer: "Vedantu Educational Platform",
    date: "2015 - 2024",
    description: "High-engagement sessions with consistent 4.8+ ratings",
    imageUrl: "/images/achievements/vedantu-sessions.jpg"
  },
  {
    title: "500+ Video Lectures Published",
    issuer: "YouTube - Take In Maths Channel",
    date: "2018 - Present",
    description: "Specialized lectures for JEE, GATE, and Olympiad preparation",
    imageUrl: "/images/achievements/youtube-videos.jpg"
  },
  {
    title: "CCNA Certified",
    issuer: "Cisco Systems",
    date: "Active",
    description: "Cisco Certified Network Associate with infrastructure expertise",
    imageUrl: "/images/achievements/ccna-certified.jpg"
  }
];

// --- STUDENT TESTIMONIALS ---
export const testimonials: Testimonial[] = [
  {
    name: "Aksita",
    role: "Student (Class 6-12)",
    platform: "Vedantu",
    testimonial: "Nibhesh sir taught me mathematics from class 6 to 12 and that consistency helped me develop very strong concepts. His way of explaining from basics and patiently clearing doubts made learning maths much easier and more enjoyable for me."
  },
  {
    name: "Randip",
    role: "IIT Admit & CBSE Board Topper",
    platform: "Vedantu",
    achievement: "100/100 in Class XII CBSE Mathematics | IIT Admission",
    testimonial: "I was fortunate to learn mathematics from Nibhesh Sir during my CBSE and JEE preparation. His calm, patient teaching style and detailed explanations made a huge difference in my understanding of the subject. With his constant support and guidance, I achieved a perfect 100/100 in Class XII CBSE Mathematics and also earned admission into an IIT. I truly credit a large part of my success to his mentorship."
  },
  {
    name: "Akansha",
    role: "Long-term Student",
    platform: "Vedantu",
    testimonial: "I am happy that I spent several years learning from Nibesh sir, which helped me strengthen my Maths fundamentals. There's a lot of repetition and reinforcement in Nibesh sir's classes, which supports deep, long-term understanding. Key concepts receive regular revision and revisiting, and Nibesh sir solves every problem in class. Overall, the classes are immensely useful for conceptual clarity."
  }
];
