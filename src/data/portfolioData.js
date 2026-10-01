import profileImg from '../assets/heyanthi.jpg';

export const portfolioData = {
  personalInfo: {
    name: "Heyanthi Devi Abotula",
    role: "Full-Stack Web Developer & Cyber Security Engineer",
    subheading: "B.Tech in CSE (Cyber Security) | AI/ML & Spring Boot Developer",
    location: "Vizianagaram, Andhra Pradesh, India",
    email: "heyanthidevi@gmail.com",
    phone: "+91-9154934667",
    github: "https://github.com/Heyanthi-hub",
    githubUsername: "Heyanthi-hub",
    linkedin: "https://www.linkedin.com/in/heyanthi-devi-abotula-849a35365/",
    linkedinUsername: "heyanthi-devi-abotula-849a35365",
    image: profileImg,
    summary: `Recent B.Tech graduate in Computer Science and Engineering (Cyber Security) with solid proficiency in Python, Java, SQL, Spring Boot, and modern web technologies. Experienced in building full-stack web applications, RESTful APIs, and implementing machine learning algorithms through dynamic academic and industry internships.`,
    stats: [
      { label: "B.Tech CGPA", value: "7.85" },
      { label: "Internships", value: "3+" },
      { label: "Projects Built", value: "5+" },
      { label: "Certifications", value: "5" }
    ]
  },

  pillars: [
    {
      icon: "ShieldAlert",
      title: "Cyber Security & Ethical Hacking",
      description: "Vulnerability assessments, penetration testing, network security fundamentals, and security toolkits.",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400"
    },
    {
      icon: "Code2",
      title: "Full-Stack Web Development",
      description: "Spring Boot backends, React frontends, RESTful APIs, SQL database architecture, and secure Web UI.",
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400"
    },
    {
      icon: "BrainCircuit",
      title: "AI & Machine Learning",
      description: "Machine learning models engineering, evaluation pipelines, data preprocessing, and real-time vulnerability tools.",
      color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400"
    }
  ],

  experiences: [
    {
      id: "blackbucks",
      company: "Blackbucks Education Pvt. Ltd.",
      role: "AI & ML Engineering Intern",
      period: "Dec 2025 – Mar 2026",
      type: "Internship",
      location: "Hybrid",
      summary: "Focused on machine learning model design, evaluation, and end-to-end data preprocessing pipelines.",
      highlights: [
        "Developed custom machine learning models and implemented comprehensive evaluation frameworks.",
        "Engineered data preprocessing pipelines using Python for feature extraction, normalization, and model tuning.",
        "Enhanced analytical thinking and algorithmic problem-solving abilities by tackling real-world predictive modeling tasks."
      ],
      skills: ["Python", "Machine Learning", "Data Preprocessing", "Model Evaluation"]
    },
    {
      id: "tanasvi",
      company: "Tanasvi Technologies Pvt. Ltd.",
      role: "Java Web Development Intern",
      period: "May 2025 – Jul 2025",
      type: "Internship",
      location: "On-site",
      summary: "Engineered robust backend web services with Spring Boot and integrated relational SQL databases.",
      highlights: [
        "Developed Java-based enterprise web applications leveraging Spring Boot framework and integrated relational SQL databases.",
        "Designed and consumed RESTful APIs, gaining hands-on exposure to scalable backend architecture, business logic, and component integration.",
        "Collaborated on database query optimization and clean API response formatting."
      ],
      skills: ["Java", "Spring Boot", "RESTful APIs", "SQL", "MySQL"]
    },
    {
      id: "datapro",
      company: "Data Pro Institute",
      role: "Ethical Hacking Intern",
      period: "May 2023 – Jun 2023",
      type: "Internship",
      location: "On-site",
      summary: "Conducted security audits, vulnerability scanning, and implemented network security strategies.",
      highlights: [
        "Performed vulnerability assessments and penetration testing to identify key security flaws and attack surfaces.",
        "Implemented network security fundamentals and applied cybersecurity industry best practices utilizing industry-standard security tools.",
        "Documented security audit reports with action plans for risk mitigation."
      ],
      skills: ["Ethical Hacking", "Vulnerability Assessment", "Penetration Testing", "Network Security"]
    }
  ],

  projects: [
    {
      id: "hospital-management",
      title: "Hospital Management System",
      category: "Full-Stack Web App",
      tech: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
      period: "2025",
      badge: "Full-Stack Enterprise",
      description: "A comprehensive enterprise web platform built to automate core hospital administrative and clinical operations with high security and record integrity.",
      details: [
        "Built patient registration module with automated ID generation and demographic tracking.",
        "Designed real-time appointment scheduling calendar for doctors and patients.",
        "Integrated billing workflows and automated invoice generation with secure data auditing.",
        "Engineered medical records management system with role-based access control."
      ],
      github: "https://github.com/Heyanthi-hub/Hospital-Management-System",
      live: "#"
    },
    {
      id: "vulnerability-scanner",
      title: "Secure Web Vulnerability Detection System",
      category: "AI & Cyber Security",
      tech: ["Python", "Machine Learning", "Cyber Security", "Scikit-Learn", "Flask"],
      period: "2025 - 2026",
      badge: "AI Security Tool",
      description: "An AI-assisted real-time web vulnerability scanning tool engineered to detect security threats and recommend mitigation strategies using ML classifiers.",
      details: [
        "Engineered ML classification models to analyze web traffic patterns and detect XSS, SQLi, and common web application attack vectors.",
        "Integrated automated remediation algorithm that generates immediate fix recommendations to fortify web defenses.",
        "Developed interactive security reporting dashboard displaying threat scores and vulnerability ratings."
      ],
      github: "https://github.com/Heyanthi-hub/Secure-Web-Vulnerability-Detection",
      live: "#"
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 90, icon: "FileCode" },
      { name: "Java", level: 88, icon: "Coffee" },
      { name: "C", level: 75, icon: "Code" },
      { name: "SQL", level: 85, icon: "Database" }
    ],
    frameworks: [
      { name: "Spring Boot", level: 85, icon: "Server" },
      { name: "React", level: 82, icon: "Atom" },
      { name: "HTML5 & CSS3", level: 92, icon: "Layout" },
      { name: "REST APIs", level: 88, icon: "Network" }
    ],
    databasesTools: [
      { name: "MySQL & DBMS", level: 85, icon: "Database" },
      { name: "Git & GitHub", level: 88, icon: "GitBranch" },
      { name: "Linux", level: 80, icon: "Terminal" },
      { name: "AWS (Basics)", level: 70, icon: "Cloud" }
    ],
    coreConcepts: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Software Development Life Cycle (SDLC)",
      "Network Security & Penetration Testing",
      "Vulnerability Assessment",
      "Machine Learning Pipelines"
    ]
  },

  education: [
    {
      degree: "B.Tech in CSE (Cyber Security)",
      institution: "Avanthi Research & Tech. Academy",
      period: "2022 – 2026",
      grade: "CGPA: 7.85",
      badge: "Undergraduate",
      details: "Specialized in Computer Science & Cyber Security coursework including Cryptography, Network Security, Web Application Security, Data Structures, and Database Systems."
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College, Vizianagaram",
      period: "2020 – 2022",
      grade: "Score: 76%",
      badge: "Higher Secondary",
      details: "Focus on Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Class 10th (SSC)",
      institution: "AP Model School, Vizianagaram",
      period: "2019 – 2020",
      grade: "Score: 90%",
      badge: "Secondary Education",
      details: "Graduated with distinction."
    }
  ],

  certifications: [
    {
      title: "NPTEL Privacy & Security in Online Social Media",
      issuer: "NPTEL / IIT",
      icon: "ShieldCheck",
      tag: "Cyber Security"
    },
    {
      title: "Python Programming Certification",
      issuer: "Industry Certified",
      icon: "Award",
      tag: "Programming"
    },
    {
      title: "Java Full-Stack Development",
      issuer: "Tanasvi Tech",
      icon: "Coffee",
      tag: "Development"
    },
    {
      title: "HTML5 & CSS3 Modern Web Development",
      issuer: "Certified Developer",
      icon: "Layout",
      tag: "Web Dev"
    },
    {
      title: "AWS DevOps Workshop",
      issuer: "AWS Partner",
      icon: "Cloud",
      tag: "Cloud & DevOps"
    }
  ]
};
