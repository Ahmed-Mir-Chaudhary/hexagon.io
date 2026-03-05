export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: 'Engineering' | 'Data' | 'Cloud' | 'QA' | 'AI';
  content: {
    overview: string;
    whatYouGet: string[];
    timeline: string;
    techStack: string[];
    deliverables: string[];
  };
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'staff-augmentation',
    title: 'Staff Augmentation',
    description: 'Scale your team with top-tier offshore developers who integrate seamlessly into your workflow.',
    icon: 'Users',
    category: 'Engineering',
    content: {
      overview: 'Our staff augmentation service allows you to bypass the lengthy recruitment process and immediately access a pool of pre-vetted, highly skilled engineers.',
      whatYouGet: [
        'Dedicated full-time developers',
        'Direct communication and management',
        'Seamless integration with your tools (Jira, Slack, etc.)',
        'Flexible scaling options'
      ],
      timeline: '2-4 weeks for onboarding',
      techStack: ['React', 'Node.js', 'Python', 'Java', 'Go'],
      deliverables: ['Full-time engineering support', 'Daily stand-up participation', 'Code contributions']
    }
  },
  {
    id: '2',
    slug: 'data-engineering',
    title: 'Data Engineering',
    description: 'Build robust data pipelines and architectures to turn your raw data into actionable insights.',
    icon: 'Database',
    category: 'Data',
    content: {
      overview: 'We design and implement scalable data infrastructures that handle high-volume processing and complex analytics requirements.',
      whatYouGet: [
        'ETL/ELT pipeline development',
        'Data warehouse architecture',
        'Real-time data processing',
        'Data quality monitoring'
      ],
      timeline: 'Project-based (typically 3-6 months)',
      techStack: ['Snowflake', 'dbt', 'Airflow', 'Spark', 'AWS Glue'],
      deliverables: ['Data architecture diagrams', 'Automated pipelines', 'Clean, structured datasets']
    }
  },
  {
    id: '3',
    slug: 'cloud-services',
    title: 'Cloud Services',
    description: 'Modernize your infrastructure with cloud-native solutions, DevOps automation, and cost optimization.',
    icon: 'Cloud',
    category: 'Cloud',
    content: {
      overview: 'Transition to a more resilient and scalable infrastructure with our comprehensive cloud migration and management services.',
      whatYouGet: [
        'Cloud migration strategy',
        'Infrastructure as Code (Terraform)',
        'CI/CD pipeline automation',
        'Cloud cost auditing'
      ],
      timeline: 'Ongoing or project-based',
      techStack: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
      deliverables: ['Cloud infrastructure setup', 'Deployment scripts', 'Security audit reports']
    }
  },
  {
    id: '4',
    slug: 'quality-assurance',
    title: 'Quality Assurance',
    description: 'Ensure your software is bug-free and performs at its best with our comprehensive testing services.',
    icon: 'ShieldCheck',
    category: 'QA',
    content: {
      overview: 'Our QA experts implement rigorous testing frameworks to maintain high software quality and user satisfaction.',
      whatYouGet: [
        'Automated regression testing',
        'Manual functional testing',
        'Performance and load testing',
        'Security vulnerability scanning'
      ],
      timeline: 'Continuous integration',
      techStack: ['Selenium', 'Cypress', 'Playwright', 'JMeter'],
      deliverables: ['Test plans', 'Bug reports', 'Automation scripts', 'QA dashboards']
    }
  },
  {
    id: '5',
    slug: 'generative-ai',
    title: 'Generative AI',
    description: 'Leverage the power of LLMs and AI to automate operations and create innovative user experiences.',
    icon: 'Cpu',
    category: 'AI',
    content: {
      overview: 'Integrate state-of-the-art AI models into your business processes to drive efficiency and innovation.',
      whatYouGet: [
        'Custom LLM integration',
        'RAG (Retrieval-Augmented Generation) systems',
        'AI-powered chatbots',
        'Automated content generation'
      ],
      timeline: '8-12 weeks for MVP',
      techStack: ['OpenAI', 'LangChain', 'Pinecone', 'Python', 'PyTorch'],
      deliverables: ['AI model integration', 'Prompt engineering library', 'Performance benchmarks']
    }
  }
];
