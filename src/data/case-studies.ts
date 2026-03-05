export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  description: string;
  industry: string;
  image: string;
  content: {
    overview: string;
    challenge: string;
    approach: string;
    solution: string;
    impact: string[];
    stack: string[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'fashion-resale-scaling',
    title: 'US Fashion Resale Platform scales to 100K monthly transactions',
    description: 'How we helped a leading resale marketplace handle explosive growth through backend optimization.',
    industry: 'E-commerce',
    image: 'https://picsum.photos/seed/fashion/800/600',
    content: {
      overview: 'A rapidly growing US-based fashion resale platform was struggling with performance bottlenecks during peak traffic hours.',
      challenge: 'The existing monolithic architecture could not handle the concurrent user load, leading to frequent timeouts and lost sales.',
      approach: 'We migrated critical services to a microservices architecture and implemented a robust caching layer.',
      solution: 'Developed a scalable Node.js backend with Redis caching and a PostgreSQL database optimized for high-frequency writes.',
      impact: [
        '100% uptime during high-traffic sales events',
        '50% reduction in page load times',
        'Scaled to support 100K+ monthly transactions'
      ],
      stack: ['Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Kubernetes']
    }
  },
  {
    id: '2',
    slug: 'hospitality-ai-reconciliation',
    title: 'Hospitality AI platform reconciles $300M OTA commissions automatically',
    description: 'Automating complex financial reconciliation for a global hospitality group.',
    industry: 'Travel and Hospitality',
    image: 'https://picsum.photos/seed/hotel/800/600',
    content: {
      overview: 'Manual reconciliation of Online Travel Agency (OTA) commissions was costing a hospitality giant thousands of man-hours annually.',
      challenge: 'Inconsistent data formats from different OTAs made automated matching extremely difficult.',
      approach: 'We built an AI-powered data ingestion engine that standardizes and matches transactions across disparate sources.',
      solution: 'A Python-based AI engine using machine learning to identify and reconcile commission discrepancies with 99.9% accuracy.',
      impact: [
        '$300M in commissions reconciled automatically',
        '95% reduction in manual labor costs',
        'Identified $2M in previously unclaimed commissions'
      ],
      stack: ['Python', 'TensorFlow', 'Snowflake', 'Azure Functions']
    }
  },
  {
    id: '3',
    slug: 'furniture-leader-shopify',
    title: 'Pakistan Furniture Leader Shopify migration drives 55% growth',
    description: 'Modernizing the digital presence of a traditional furniture powerhouse.',
    industry: 'Retail and CPG',
    image: 'https://picsum.photos/seed/furniture/800/600',
    content: {
      overview: 'A legacy furniture brand needed to transition from a brick-and-mortar focus to a digital-first strategy.',
      challenge: 'The existing website was slow, not mobile-responsive, and lacked modern e-commerce features.',
      approach: 'We executed a full migration to Shopify Plus with a custom-built headless frontend for maximum performance.',
      solution: 'A bespoke Shopify Plus implementation with integrated inventory management and AR product visualization.',
      impact: [
        '55% increase in online sales within 6 months',
        '70% improvement in mobile conversion rate',
        'Seamless integration with 15+ physical showrooms'
      ],
      stack: ['Shopify Plus', 'React', 'Hydrogen', 'Tailwind CSS']
    }
  },
  {
    id: '4',
    slug: 'fintech-ai-modeling',
    title: 'US Fintech AI financial modeling secures $2M funding',
    description: 'Building the core technology for a disruptive fintech startup.',
    industry: 'Finance and Banking',
    image: 'https://picsum.photos/seed/fintech/800/600',
    content: {
      overview: 'A fintech startup needed a sophisticated financial modeling engine to prove their concept to investors.',
      challenge: 'The engine required real-time processing of massive market datasets with high precision.',
      approach: 'We developed a high-performance distributed computing architecture to handle the modeling workloads.',
      solution: 'A Rust-based calculation engine with a React frontend for interactive data visualization.',
      impact: [
        'Secured $2M in Seed funding',
        '10x faster modeling cycles than competitors',
        'Successfully processed $500M+ in simulated assets'
      ],
      stack: ['Rust', 'React', 'D3.js', 'Google Cloud Platform']
    }
  }
];
