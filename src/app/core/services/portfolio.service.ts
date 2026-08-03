import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile, Skill, Project, Experience } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private profile: Profile = {
    name: 'Taranjit Singh',
    title: 'Full Stack Developer',
    subTitle: 'Full Stack Developer at Dept. of Good Governance and IT, Punjab',
    bio: 'Dedicated Full Stack Developer with 4+ years of experience building secure, scalable, and responsive E-Governance web applications and API architectures for the Government of Punjab. Proven expertise in frontend frameworks, backend web APIs (ASP.NET Core, Node.js), database design, and AI-powered integrations like face verification and document training.',
    avatarUrl: 'assets/avatar.png',
    socials: {
      github: 'https://github.com/Taranjit97Singh',
      linkedin: 'https://www.linkedin.com/in/taranjit-singh-3aa829130/',
      email: 's.taranjit97@gmail.com',
      phone: '+91 8699747574'
    },
    resumeUrl: '#'
  };

  private skills: Skill[] = [
    // Languages
    { name: 'TypeScript', level: 90, category: 'languages' },
    { name: 'JavaScript', level: 92, category: 'languages' },
    { name: 'Python', level: 80, category: 'languages' },
    { name: 'C / C++', level: 75, category: 'languages' },
    
    // Frontend
    { name: 'Angular', level: 90, category: 'frontend' },
    { name: 'AngularJS', level: 85, category: 'frontend' },
    { name: 'React.js', level: 70, category: 'frontend' },
    { name: 'HTML5 & CSS3', level: 95, category: 'frontend' },
    { name: 'jQuery', level: 90, category: 'frontend' },
    { name: 'Vanilla JavaScript', level: 92, category: 'languages' },

    
    // Backend
    { name: 'ASP.NET Core', level: 92, category: 'backend' },
    { name: 'Node.js & Express', level: 85, category: 'backend' },
    { name: 'REST APIs', level: 95, category: 'backend' },
    { name: 'JWT Security & Auth', level: 90, category: 'backend' },
    { name: 'Rate Limiting', level: 90, category: 'backend' },

    
    // Databases
    { name: 'SQL Server', level: 90, category: 'databases' },
    { name: 'MySQL', level: 85, category: 'databases' },
    { name: 'MongoDB', level: 80, category: 'databases' },

    // DevOps & Tools
    { name: 'Git & GitHub', level: 90, category: 'devops' },
    { name: 'GitLab', level: 85, category: 'devops' },
    { name: 'Azure Blob Storage', level: 80, category: 'devops' },
    { name: 'Docker', level: 85, category: 'devops' },
    
    // AI/ML
    { name: 'TensorFlow & Keras', level: 78, category: 'ai-ml' },
    { name: 'PyTorch', level: 75, category: 'ai-ml' },
    { name: 'OpenAI & Azure AI', level: 82, category: 'ai-ml' },
    { name: 'YOLOv8 & MTCNN (Face)', level: 80, category: 'ai-ml' }
  ];

  private projects: Project[] = [
    {
      id: '1',
      title: 'Beneficiary Satyapan App (BSA) Backend',
      description: 'Production-ready secure backend enabling verification of pension beneficiaries for Department of Social Security and Women & Child Development.',
      longDescription: 'Implemented JWT-based authentication/authorization, token encryption/decryption, rate limiting, and URL-based access control. Designed robust database schemas and secure RESTful APIs consumed by the mobile application to protect against brute-force and unauthorized access.',
      tech: ['ASP.NET Core', 'SQL Server', 'JWT Security', 'REST APIs', 'Rate Limiting'],
      category: 'backend',
      imageName: 'synergy_cloud', // Maps to custom css gradient classes
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: '2',
      title: 'Punjab AI-Powered Chatbot',
      description: 'An intelligent chatbot facilitating public inquiry and documentation workflows for the Government of Punjab.',
      longDescription: 'Enhanced UI/UX engagement and integrated document-based training using OpenAI on Azure. Implemented secure citizen interaction modules for automated support.',
      tech: ['Vanilla Js', 'Python', 'OpenAI API', 'Azure Blob', 'HTML/CSS'],
      category: 'fullstack',
      imageName: 'neuralsynth_ai',
      liveUrl: 'https://connect.punjab.gov.in/',
      featured: true
    },
    {
      id: '3',
      title: 'E-Sewa Portal & Doorstep Delivery',
      description: 'Unified government API module supporting doorstep service delivery and AI-based biometric face verification.',
      longDescription: 'Developed APIs for doorstep service requests and integrated face verification using Keras, TensorFlow, PyTorch, and YOLOv8-Face. Migrated backend systems from ASP.NET Core 2.1 to 8.0 for 40% performance gains.',
      tech: ['Angular js','ASP.NET Core 8.0', 'TensorFlow', 'YOLOv8-Face', 'MTCNN', 'SQL Server'],
      category: 'frontend',
      imageName: 'apex_dashboard',
      featured: true
    },
    {
      id: '4',
      title: 'Connect Punjab Web Portal',
      description: 'State-wide citizen grievance and service portal built in compliance with NESDA standards.',
      longDescription: 'Developed frontend modules matching NESDA accessibility guidelines. Implemented secure International OTP integration for robust cross-border user authentication.',
      tech: ['Angular','REST APIs', 'SQL','OTP Integration', 'Bootstrap'],
      category: 'fullstack',
      imageName: 'horizon_analytics',
      liveUrl: 'https://connect.punjab.gov.in/',
      featured: true
    },
    {
      id: '5',
      title: 'NSAP Pension API Integration',
      description: 'Consolidated National Social Assistance Programme (NSAP) data integration for 34 lakh pension beneficiaries.',
      longDescription: 'Integrated NSAP API endpoints, created data schemas, and cleaned/consolidated multiple state data tables into a single efficient dataset. Drastically improved reporting speed and administrative query access.',
      tech: ['ASP.NET Core', 'SQL Server', 'API Integration'],
      category: 'backend',
      imageName: 'synergy_cloud',
      featured: false
    },
    {
      id: '6',
      title: 'E-Punjab Portal - Teacher Transfer',
      description: 'Statewide transfer management and School Management Committee (SMC) governance modules for Punjab School Education Board.',
      longDescription: 'Designed and built the automated Teachers Transfer module using ASP.NET to streamline transfers. Developed the SMC module to facilitate Parent-Teacher school governance committees and oversight activities.',
      tech: ['ASP.NET Web Forms', 'SQL Server','HTML','JavaScript', 'jQuery', 'CSS','SQL'],
      category: 'fullstack',
      imageName: 'apex_dashboard',
      featured: false
    },
    {
      id: '7',
      title: 'EKYC Survey & Verification Module',
      description: 'Multi-role survey and verification modules for the Department of Food Civil Supplies and Consumer Affairs.',
      longDescription: 'Designed secure dashboard reports at district and state levels. Migrated photo assets to Azure Blob Storage and delivered analytic reporting tools.',
      tech: ['ASP.NET Web Forms', 'SQL Server', 'Azure Blob Storage', 'jQuery', 'HTML','CSS'],
      category: 'fullstack',
      imageName: 'horizon_analytics',
      featured: false
    },
    {
      id: '8',
      title: 'Higher Education Aspiration Survey',
      description: 'Web-based student career aspiration data collection and reporting dashboard for Punjab Government.',
      longDescription: 'Delivered responsive web forms for students across ITI, Polytechnic, and colleges. Built analytical reporting dashboards to support state policy-making.',
      tech: ['Angular'],
      category: 'fullstack',
      imageName: 'neuralsynth_ai',
      featured: false
    }
  ];

  private experiences: Experience[] = [
    {
      role: 'Full Stack Developer',
      company: 'Dept. of Good Governance and IT, Government of Punjab',
      location: 'Punjab, India',
      period: 'Dec 2022 - Present',
      current: true,
      description: [
        'Deputed to the Dept. of Social Security, Women & Child Development: Integrated NSAP API for 34 lakh beneficiaries and engineered secure JWT/auth backends for the Beneficiary Satyapan App.',
        'Deputed to the Dept. of Food Civil Supplies: Designed survey verification modules for EKYC Project and migrated data assets to Azure Blob Storage.',
        'Deputed to the Punjab School Education Board: Developed automated Teachers Transfer and School Management Committee modules on E-Punjab Portal.',
        'Deputed to the Chief Electoral Office Punjab: Designed and maintained state elections inventory management systems.',
        'Refactored legacy backends from ASP.NET Core 2.1 to 8.0, improving query transaction speeds by 35%.'
      ],
      tech: [ 'Angular', 'Angular Js','ASP.NET Core','SQL Server','Python', 'Node.js','Git','Gitlabs']
    }
  ];

  getProfile(): Observable<Profile> {
    return of(this.profile);
  }

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }
}
