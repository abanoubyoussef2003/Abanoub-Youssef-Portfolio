export interface Social {
  github: string;
  linkedin: string;
  facebook: string;
  email: string;
}

export interface Personal {
  name: string;
  title: string;
  tagline: string;
  avatar: string;
  social: Social;
}

export interface About {
  bio: string[];
  interests: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Experience {
  company: string;
  subcompany: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image1: string;
  image2:string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
  certificate: string;
}

export interface Course {
  name: string;
  provider: string;
  year: string;
  certificate: string;
}
export interface CVData {
  personal: Personal;
  about: About;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  courses: Course[];
}

export const cvData: CVData = {
  personal: {
    name: "Abanoub Youssef Aziz",
    title: "Data Analyst (Excel SQL Power BI  Python)",
    tagline: "Turning business questions into informed decisions through data",
    avatar: "/bio/me.jpg",
    social: {
      github: "http://github.com/abanoubyoussef2003",
      linkedin: "https://www.linkedin.com/in/abanoub-youssef-aziz-7683a3393/",
      facebook: "https://www.facebook.com/share/1XJQCaHgSa/",
      email: "AbanoubYoussefAziz@gmail.com",
    },
  },

  about: {
    bio: [
      "Data Analyst with a background in Computers and Artificial Intelligence, specializing in Scientific Computing.",
      "I help businesses turn messy, complex data into clear insights, interactive dashboards, and actionable reports.",
      "Skilled in Excel, SQL, Power BI, Tableau, and Generative AI, I focus on data cleaning, analysis, and visualization to support smarter decision-making.",
      "My analytical mindset and attention to detail ensure accurate results that drive real business value.",
      "Continuously learning new technologies and improving my skills.",
    ],

    interests: [
      "Data Analysis",
      "Data & Numbers",
      "Business & Decision Making",
      "Visualization & Storytelling",
      "Database Design",
      "Curiosity & Continuous Learning New Technologies",
      "Problem Solving & Logic ",
      "Tools & Technology",
    ],
  },

  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "R", level: 85, icon: "👾" },
        { name: "C++", level: 65, icon: "⚙️" },
        { name: "SQL", level: 95, icon: "🗄️" },
      ],
    },
    {
      category: "Frameworks & Tools",
      items: [
        { name: "Excel", level: 95, icon: "📊" },
        { name: "Power BI", level: 90, icon: "⚡" },
        { name: "Tableau", level: 85, icon: "🧩" },
        { name: "Google Looker Studio", level: 90, icon: "🎨" },
        { name: "Generative AI", level: 80, icon: "🤖" },
      ],
    },
    {
      category: "Databases",
      items: [{ name: "MySQL", level: 95, icon: "🐬" }],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "Git & GitHub", level: 90, icon: "📦" },
        { name: "Command Line (CMD)", level: 85, icon: "💲" },
        { name: "Terminal", level: 85, icon: "🏴" },
      ],
    },
  ],

  experience: [
    {
      company: "Digital Egypt Pioneers Initiative (DEPI) – Data Analysis Track",
      subcompany: "Professional Training Program",
      role: "Intern Trainee",
      period: "Dec 2025 – Present",
      description: [
        "Key Topics:",
        "Prompt Engineering, Foundations of Data & Analytics, Data-Driven Decision Making",
        "Data Preparation (Python), Data Cleaning (SQL), Data Analysis, Tableau Visualization",
        "Intro to Power BI, Dashboard Development (Power BI), Data Governance, Capstone Project",
      ],

      tech: [
        "Microsoft Excel",
        "SQL Server",
        "Python",
        "Power BI",
        "Tableau",
        "Career Planning",
        "Personal Branding",
        "Presentation Skills",
        "Emotional Intelligence",
        "Communication Skills",
        "Freelancing",
        "Coaching",
        "English",
      ],
    },
    {
      company: "Digital Skills Training – 'Tawar w Ghayar' Initiative",
      subcompany:
        "Affiliated with Egyptian MCIT, in partnership with Microsoft",
      role: "Intern Trainee",
      period: "Jan 2021 – Apr 2021",
      description: [
        "Microsoft Excel, Word, PowerPoint, and Outlook",
        "Freelancing fundamentals and professional work environment skills",
        "Personal skill development and career readiness",
      ],

      tech: [
        "Microsoft Excel",
        "Microsoft Word",
        "Microsoft PowerPoint",
        "Microsoft Outlook",
        "Freelancing",
        "Soft Skills",
      ],
    },
    {
      company: "Faculty of Computers and Artificial Intelligence",
      subcompany: "Benha University",
      role: "Academic Student",
      period: "Sep 2020 - May 2024",
      description: [
        "Studied Statistics and Probability for data analysis and decision-making",
        "Learned Database Management using MySQL",
        "Python programming applied in AI and data-related tasks",
        "Developed strong analytical thinking and problem-solving skills through academic projects",
      ],

      tech: [
        "Statistics",
        "Probability",
        "MySQL",
        "Python",
        "AI",
        "analytical thinking",
      ],
    },
  ],

  projects: [
    {
      name: "Sales dashboard",
      description:
        "Interactive dashboard Which show: Total sales Vs Total profit Monthly , Revenue of Category Vs of Cost Category , Total Profits of each Customer , Top 5 cities in terms of Total sales",
      tech: [
        "Excel (Data Cleaning & Preparation)",
        "Pivot Tables & Pivot Charts",
        "Slicers & Timelines",
        "Excel Dashboard Design",
      ],
      link: "",
      github: "https://github.com/abanoubyoussef2003/Sales-Data-Dashboard",
      image1: "/projects/Dashboard1/Sales_Dashboard.png",
      image2: "",
    },
    {
      name: "Sales & Profit Dashboard",
      description:
        "Two Fully Interactive and linked dashboards to analyze business Sales and Profit performance using Microsoft Excel.",
      tech: [
        "Excel (Data Cleaning & Preparation)",
        "Pivot Tables & Pivot Charts",
        "Slicers & Timelines",
        "Excel Dashboard Design",
      ],
      link: "",
      github:
        "https://github.com/abanoubyoussef2003/sales-and-Profits-for-E-commarce-Dashboard-",
      image1: "/projects/Dashboard2/Sales_Dashboard.png",
      image2: "/projects/Dashboard2/Profit_Dashboard.png",
    },
    {
      name: "Executive Banking Overview",
      description:
        "Interactive dashboard which shows:1. Total customers, bank balance, bank transfers, bank loans, outstanding loans for the year, and active cards. 2. Total new customers per month. 3. Comparison between active and inactive cards. 4. Rate of resolved and unresolved issues. 5. Comparison between loan types and amounts, comparison between account types and balances, and monthly and annual transaction trends.",
      tech: [
        "Excel (Data Cleaning & Preparation)",
        "Pivot Tables & Pivot Charts",
        "Slicers & Timelines",
        "Excel Dashboard Design",
      ],
      link: "",
      github: "",
      image1: "/projects/Dashboard3/Executive_Banking_Overview.png",
      image2: "",
    },
  ],

  education: [
    {
      institution: "Benha University",
      degree: "Bachelor of Computers and Artificial Intelligence",
      period: "2020 - 2024",
      details: [
        "Major: Scientific Computing",
        "GPA: 3.43 (Very Good)",
        "Graduation Project: Handwritten Prescription Detection and Question Answering Medical System",
        "Application mobile (Roشtaa App) using Flutter and integrated NLP and CV model",
      ],
      certificate: "/certificates/Collage.jpg",
    },
  ],

  courses: [
    {
      name: "AI Training Program",
      provider: "ITI Menoufia",
      year: "2023",
      certificate: "/certificates/AI.jpg",
    },
    {
      name: "Leadership Training Program",
      provider: "Leadership Center – Benha",
      year: "2021",
      certificate: "/certificates/Leader.jpg",
    },
  ],
};
