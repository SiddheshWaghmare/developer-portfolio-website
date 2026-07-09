export const CONTACT = {
  name: 'Siddhesh Waghmare',
  phone: '9730774380',
  email: 'siddheshwaghmare30@gmail.com',
  linkedin: 'siddhesh-waghmare',
  linkedinUrl: 'https://www.linkedin.com/in/siddhesh-waghmare-31a9a3412/',
  github: 'SiddheshWaghmare',
  githubUrl: 'https://github.com/SiddheshWaghmare',
  location: 'Pune, Maharashtra',
  resumeUrl: '/JavaFullstackResume-SiddheshWaghmare.pdf',
}

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const HERO_TITLES = [
  'Java Fullstack Developer',
  'Backend Engineer',
  'Spring Boot Specialist',
]

export const STATS = [
  { label: 'Years Experience', value: 1.5, suffix: '+', decimals: 1 },
  { label: 'Projects', value: 2, suffix: '+', decimals: 0 },
  { label: 'APIs Built', value: 40, suffix: '+', decimals: 0 },
]

export type SkillCategory = {
  title: string
  skills: { name: string; level: number }[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'Java 8+', level: 92 },
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring MVC', level: 82 },
      { name: 'Spring Core', level: 85 },
      { name: 'Microservices', level: 80 },
      { name: 'Hibernate', level: 85 },
      { name: 'Spring Data JPA', level: 85 },
      { name: 'RESTful Web Services', level: 90 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular', level: 72 },
      { name: 'TypeScript', level: 75 },
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 82 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 85 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    title: 'DevOps / Tools',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'Maven', level: 82 },
      { name: 'Gradle', level: 75 },
      { name: 'Jenkins', level: 70 },
      { name: 'GitHub Actions', level: 72 },
      { name: 'CI/CD', level: 75 },
      { name: 'Docker', level: 68 },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'JUnit 5', level: 85 },
      { name: 'Mockito', level: 82 },
      { name: 'Postman', level: 90 },
      { name: 'Swagger', level: 85 },
    ],
  },
  {
    title: 'Cloud',
    skills: [
      { name: 'AWS EC2', level: 70 },
      { name: 'AWS S3', level: 72 },
      { name: 'AWS RDS', level: 70 },
      { name: 'Kafka', level: 65 },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'SonarQube', level: 72 },
      { name: 'Agile / Scrum', level: 85 },
      { name: 'GitHub Copilot', level: 80 },
      { name: 'AI-Assisted Dev', level: 80 },
    ],
  },
]

export const EXPERIENCE = [
  {
    role: 'Software Developer',
    company: 'Intent Software Solutions',
    period: 'Jan 2025 – Present',
    location: 'Pune, Maharashtra',
    points: [
      'Built backend services using Java 21, Spring Boot 3.4, Hibernate 6.6, and Spring Data JPA for enterprise applications.',
      'Designed and implemented RESTful APIs supporting business workflows and multi-stage approval processes.',
      'Worked with PostgreSQL 16 for database design, query optimization, and schema management.',
      'Implemented validation, exception handling, and business logic for reliability and data integrity.',
      'Documented REST APIs using Swagger / OpenAPI to support integration and testing.',
      'Wrote and executed unit tests using JUnit 5 and Mockito to improve code quality.',
      'Performed API testing and debugging using Postman, resolving defects during development.',
      'Contributed to feature development and enhancements in an Agile Scrum environment.',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'FinLogic',
    tagline: 'Loan Management Platform',
    summary:
      'Backend platform handling the complete loan lifecycle — from onboarding and approvals to disbursement and repayment scheduling.',
    details: [
      'Built backend services for loan onboarding, approval workflows, disbursement, repayment scheduling, and contract lifecycle management.',
      'Designed REST APIs for customer operations, loan validation, and multi-stage approval workflow management.',
      'Implemented business logic and transactional operations ensuring ACID compliance and data consistency.',
      'Added validation and exception handling to improve API reliability; documented all APIs using Swagger.',
      'Performed end-to-end API testing using Postman ensuring seamless integration across loan modules.',
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Hibernate', 'REST API'],
    github: 'https://github.com/SiddheshWaghmare',
  },
  {
    name: 'SupplySphere',
    tagline: 'Inventory & Supply Chain System',
    summary:
      'Inventory and supply chain management system automating warehouse operations from goods receiving to dispatch.',
    details: [
      'Developed backend services for inventory tracking, stock allocation, warehouse transfers, and order management.',
      'Built RESTful APIs for goods receiving, bin allocation, picking, packing, dispatch, and automated stock updates.',
      'Implemented transactional flows ensuring inventory accuracy with exception handling layers across all APIs.',
      'Wrote unit tests using JUnit 5 and Mockito; performed end-to-end API testing using Postman.',
      'Reduced manual intervention in stock updates via automated inventory reconciliation workflows.',
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'],
    github: 'https://github.com/SiddheshWaghmare',
  },
]

export const EDUCATION = {
  degree: 'B.Tech in Computer Science & Engineering',
  school: 'N. K. Orchid College of Engineering & Technology',
  location: 'Solapur, Maharashtra',
  year: '2025',
}
