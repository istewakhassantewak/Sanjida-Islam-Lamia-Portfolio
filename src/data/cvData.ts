export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: string;
  year: string;
  cgpa?: string;
  maxGpa?: string;
  field: string;
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: 'Teaching' | 'Creative Crafts' | 'Community';
  description: string;
  responsibilities: string[];
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  grade?: string;
  skillsCovered: string[];
  description: string;
  date?: string;
  color: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage
    status: string;
  }[];
}

export const CV_DATA = {
  name: "Sanjida Islam Lamia",
  banglaName: "সঞ্জিদা ইসলাম লামিয়া",
  headline: "Honours Student in Social Work · Commerce Background",
  subHeadline: "Passionate Home Tutor, Creative Artisan & Certified Tech Practitioner based in Cumilla, Bangladesh.",
  profileSummary:
    "Motivated and disciplined student currently pursuing an Honours degree in Social Work, with a Commerce background and a consistently strong academic record. Experienced in tutoring and creative crafts, with practical computer skills and a basic baking certification. Eager to apply dedication, communication and a service-minded outlook in a professional role.",
  contact: {
    phone: "01817410805",
    intlPhone: "+880 1817410805",
    email: "sanjidalamia01@gmail.com",
    address: {
      house: "House 191, Nanua Dighir Purbo Par",
      area: "Bajrapur (Part), Ward No. 12",
      corporation: "Cumilla City Corporation",
      upazila: "Cumilla Adarsha Sadar",
      postalCode: "Cumilla - 3500",
      division: "Chattogram Division, Bangladesh",
      full: "House 191, Nanua Dighir Purbo Par, Bajrapur (Part), Ward No. 12, Cumilla City Corporation, Cumilla Adarsha Sadar, Cumilla - 3500, Chattogram Division, Bangladesh"
    }
  },
  personalDetails: {
    dateOfBirth: "06 May 2002",
    age: "22 Years",
    gender: "Female",
    maritalStatus: "Married",
    religion: "Islam",
    bloodGroup: "A+",
    fatherName: "Md. Manirul Islam Pinto",
    motherName: "Dr. Nasrin Sultana Shilpi",
    nationality: "Bangladeshi",
    languages: ["Bengali (Native)", "English (Working Proficiency)"]
  },
  education: [
    {
      id: "honours",
      degree: "Honours in Social Work",
      institution: "Comilla Victoria Government College",
      status: "Running | Expected 2027",
      year: "2023 - 2027",
      field: "Social Work & Human Welfare",
      description: "Developing comprehensive knowledge in community welfare, social policy, counseling ethics, and human development at one of Bangladesh's premier historic institutions.",
      highlights: [
        "In-depth research on community-based welfare programs",
        "Field observation and social intervention methodologies",
        "Empathetic counseling and client-centered active listening"
      ]
    },
    {
      id: "hsc",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cumilla Govt. Women's College",
      status: "Completed",
      year: "Completed",
      cgpa: "4.58",
      maxGpa: "5.00",
      field: "Business Studies (Commerce)",
      description: "Excelled in commerce curriculum with outstanding marks in Business Organization, Accounting, and Economics.",
      highlights: [
        "CGPA: 4.58 / 5.00",
        "Strong foundation in accounting principles and financial numeracy",
        "Active student leadership and peer study group facilitator"
      ]
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate (SSC)",
      institution: "Comilla Modern High School",
      status: "Completed",
      year: "Completed",
      cgpa: "4.17",
      maxGpa: "5.00",
      field: "Commerce",
      description: "Maintained a strong, diligent academic trajectory through rigorous board examinations.",
      highlights: [
        "CGPA: 4.17 / 5.00",
        "Solid command over general sciences, mathematics, and commercial subjects"
      ]
    },
    {
      id: "jsc",
      degree: "Junior School Certificate (JSC)",
      institution: "Comilla Modern High School",
      status: "Completed",
      year: "Completed",
      cgpa: "4.50",
      maxGpa: "5.00",
      field: "General Academic Curriculum",
      description: "High academic distinction at Comilla Modern High School junior board level.",
      highlights: [
        "CGPA: 4.50 / 5.00",
        "Recognized for consistency, handwriting, and student discipline"
      ]
    },
    {
      id: "psc",
      degree: "Primary School Certificate (PSC)",
      institution: "YWCA School, Cumilla",
      status: "Completed",
      year: "Completed",
      cgpa: "5.00",
      maxGpa: "5.00",
      field: "Primary Education",
      description: "Achieved the highest academic distinction with a perfect GPA 5.00 Golden grade.",
      highlights: [
        "CGPA: 5.00 / 5.00 (Perfect Score)",
        "Early recognition in creative art, handwriting, and moral values"
      ]
    }
  ] as EducationItem[],
  experience: [
    {
      id: "exp-tutor",
      role: "Home Tutor (Private Tuition)",
      organization: "Private Mentorship Practice",
      period: "Ongoing Practice",
      category: "Teaching",
      description: "Taught students privately at home, supporting their academic progress and building strong communication and patience.",
      responsibilities: [
        "Individualized lesson plans designed around each student's learning pace",
        "Fostered deep comprehension in foundational mathematics, languages, and commerce",
        "Created a gentle, motivating, and patient environment for students",
        "Maintained transparent communication with parents regarding academic progress"
      ],
      tags: ["Private Tuition", "Patience", "Custom Lesson Plans", "Academic Mentoring"]
    },
    {
      id: "exp-crafting",
      role: "Artisan & Creative Crafter",
      organization: "Handmade & Creative Studio",
      period: "Creative Endeavour",
      category: "Creative Crafts",
      description: "Hands-on creative craft work demonstrating creativity, attention to detail and skilled handiwork.",
      responsibilities: [
        "Custom paper crafts, decorative gift boxes, and festive handmade decor",
        "Exemplary attention to color balance, neat finishes, and intricate scissor work",
        "Creative problem-solving through upcycling and artistic crafting materials",
        "Showcasing precision, patience, and aesthetic finesse in each piece"
      ],
      tags: ["Handmade Crafts", "Paper Art", "Detail Precision", "Design Aesthetics"]
    }
  ] as ExperienceItem[],
  certifications: [
    {
      id: "cert-baking",
      title: "Basic Baking Course",
      issuer: "The Cake Fairy",
      skillsCovered: ["Cake Sponge Fundamentals", "Buttercream & Frosting", "Pastry Art", "Food Hygiene & Measurement Precision"],
      description: "Comprehensive hands-on certification in baking science, pastry crafting, oven management, and aesthetic confectionery decoration.",
      color: "from-pink-500 to-rose-400"
    },
    {
      id: "cert-computer",
      title: "Computer Management",
      issuer: "Comilla Victoria Govt. College",
      grade: "A+ Distinction",
      skillsCovered: ["Computer Hardware & Troubleshooting", "MS Word", "MS Excel", "MS PowerPoint", "Internet & Email Communications"],
      description: "Earned highest grade (A+) in professional office productivity, system management, data organization, and digital workflow literacy.",
      color: "from-rose-500 to-pink-600"
    }
  ] as CertificationItem[],
  skillCategories: [
    {
      category: "Office Productivity & Tech",
      iconName: "Laptop",
      description: "Certified with Grade A+ by Comilla Victoria Govt. College in Computer Management.",
      skills: [
        { name: "MS Word (Document Styling & Reports)", level: 95, status: "Advanced" },
        { name: "MS Excel & PowerPoint (Data & Slides)", level: 90, status: "Proficient" },
        { name: "Internet, Email & Digital Workflow", level: 95, status: "Advanced" },
        { name: "Computer Hardware & Troubleshooting", level: 85, status: "Competent" }
      ]
    },
    {
      category: "Creative Arts & Confectionery",
      iconName: "Sparkles",
      description: "Passionate artisan with formal baking credentials from The Cake Fairy and skilled handiwork.",
      skills: [
        { name: "Baking & Cake Decorating (Certified)", level: 90, status: "Certified Artisan" },
        { name: "Handmade Crafting & Paper Art", level: 95, status: "Creative Expert" },
        { name: "Color Harmony & Aesthetic Presentation", level: 90, status: "Proficient" },
        { name: "Attention to Detail & Fine Craftsmanship", level: 95, status: "Distinguished" }
      ]
    },
    {
      category: "Education & Social Work",
      iconName: "HeartHandshake",
      description: "Pursuing Honours in Social Work with extensive home tutoring experience.",
      skills: [
        { name: "Private Teaching & Concept Explaining", level: 92, status: "Experienced" },
        { name: "Active Listening & Empathetic Communication", level: 95, status: "Core Strength" },
        { name: "Patience & Student Motivation", level: 95, status: "Core Strength" },
        { name: "Social Welfare Understanding", level: 88, status: "Honours Scholar" }
      ]
    }
  ] as SkillCategory[],
  hobbies: [
    { name: "Creative Baking & Cake Art", icon: "Cake", note: "Certified by The Cake Fairy" },
    { name: "Handmade Paper Crafting", icon: "Scissors", note: "Fine details & floral craft" },
    { name: "Tutoring & Mentorship", icon: "BookOpen", note: "Helping young minds flourish" },
    { name: "Social Welfare & Community Work", icon: "Heart", note: "Studying Social Work Honours" },
    { name: "Organizing & Digital Documentation", icon: "FileText", note: "A+ in Computer Management" }
  ]
};
