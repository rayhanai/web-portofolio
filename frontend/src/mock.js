// Mock data for portfolio

export const personalInfo = {
  name: "Rayhan Aby Imtiyaz",
  initials: "RAI",
  tagline: "Bridging the Gap Between Complex Data and Business Strategy",
  subtitle: "Data Analyst & BI Consultant | Specializing in Power BI, LLM Workflows, and ETL Pipelines",
  status: "Open for Consultancy",
  education: "Biomedical Engineering, ITB",
  bio: "With a foundation in Biomedical Engineering, I bring analytical rigor and systematic thinking to data challenges. My approach combines technical precision with business acumen to transform complex datasets into actionable insights.",
  social: {
    linkedin: "https://linkedin.com/in/rayhan-imtiyaz",
    github: "https://github.com/rayhan-imtiyaz",
    email: "rayhan.imtiyaz@example.com"
  }
};

export const techStack = [
  { name: "Power BI", category: "bi" },
  { name: "Python", category: "programming" },
  { name: "SQL Server", category: "database" },
  { name: "Azure", category: "cloud" },
  { name: "Tableau", category: "bi" },
  { name: "OpenAI API", category: "ai" },
  { name: "Power Automate", category: "automation" },
  { name: "LangChain", category: "ai" },
  { name: "Pandas", category: "programming" },
  { name: "SQL", category: "database" },
  { name: "ETL Pipelines", category: "engineering" },
  { name: "Vector DBs", category: "ai" }
];

export const experiences = [
  {
    id: 1,
    year: "2024",
    company: "L'Oreal Indonesia",
    role: "Transformation Office Analyst",
    type: "Business Intelligence",
    highlights: [
      "Sales & Market Share Dashboard",
      "Cross-functional data integration",
      "Executive reporting automation"
    ],
    metrics: "Improved decision-making efficiency by 40%"
  },
  {
    id: 2,
    year: "2023",
    company: "Kitameraki",
    role: "Jr. Data Scientist",
    type: "Consultancy & Training",
    highlights: [
      "BI Consultancy for SMEs",
      "Data Analytics Training Programs",
      "Dashboard Development"
    ],
    metrics: "Trained 50+ professionals across 5 organizations"
  },
  {
    id: 3,
    year: "2023",
    company: "Stealth AI Startup",
    role: "LLM Research Associate",
    type: "AI & Machine Learning",
    highlights: [
      "Vector Database Implementation",
      "Prompt Engineering Optimization",
      "Document Processing Pipelines"
    ],
    metrics: "Achieved 95% accuracy in document extraction"
  },
  {
    id: 4,
    year: "2022",
    company: "Telin (Telkom)",
    role: "Data Engineer Intern",
    type: "Data Engineering",
    highlights: [
      "Large-scale data processing",
      "ETL pipeline development",
      "Database optimization"
    ],
    metrics: "Processed 10M+ rows of telecom data"
  }
];

export const projects = [
  {
    id: 1,
    title: "L'Oreal Brand Performance Dashboard",
    category: "Business Intelligence",
    description: "Comprehensive Power BI dashboard tracking brand performance, market share, and sales trends across multiple product lines and regions.",
    tags: ["Power BI", "SQL Server", "DAX", "Power Query"],
    metrics: [
      "40% faster executive reporting",
      "15+ KPIs tracked in real-time",
      "Cross-functional data integration"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "LLM Document Extraction System",
    category: "LLM & AI",
    description: "Intelligent document processing system using LangChain and OpenAI API for automated data extraction from unstructured documents.",
    tags: ["Python", "LangChain", "OpenAI API", "Vector DB"],
    metrics: [
      "95% extraction accuracy",
      "100,000+ documents processed",
      "80% time reduction in manual processing"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Sales Forecasting Model",
    category: "Business Intelligence",
    description: "Predictive analytics solution combining Python machine learning with Power BI visualization for accurate sales forecasting.",
    tags: ["Python", "Power BI", "Scikit-learn", "Pandas"],
    metrics: [
      "92% forecast accuracy",
      "3-month rolling predictions",
      "Integrated with existing BI infrastructure"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false
  },
  {
    id: 4,
    title: "ETL Pipeline Automation",
    category: "Data Engineering",
    description: "Scalable ETL pipeline for telecom data processing, handling millions of records with automated error handling and monitoring.",
    tags: ["Python", "SQL", "Azure", "Power Automate"],
    metrics: [
      "10M+ rows processed daily",
      "99.8% pipeline reliability",
      "60% reduction in processing time"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Customer Segmentation Analytics",
    category: "Business Intelligence",
    description: "Advanced customer segmentation using clustering algorithms and interactive Tableau dashboards for targeted marketing strategies.",
    tags: ["Tableau", "Python", "SQL", "K-Means"],
    metrics: [
      "5 distinct customer segments identified",
      "25% improvement in campaign targeting",
      "Interactive drill-down analytics"
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    featured: false
  },
  {
    id: 6,
    title: "AI-Powered Chatbot for Data Queries",
    category: "LLM & AI",
    description: "Natural language interface for business users to query databases using conversational AI, powered by GPT-4 and custom prompt engineering.",
    tags: ["OpenAI API", "LangChain", "Python", "SQL"],
    metrics: [
      "500+ queries processed daily",
      "85% user satisfaction rate",
      "Reduced analyst workload by 30%"
    ],
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80",
    featured: true
  }
];

export const categories = [
  "All Projects",
  "Business Intelligence",
  "LLM & AI",
  "Data Engineering"
];