export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'cloud-computing-small-business',
    title: 'How Cloud Computing Can Transform Small Businesses',
    excerpt: 'Discover how migrating to the cloud can level the playing field for small enterprises by providing enterprise-grade tools at a fraction of the cost.',
    date: 'Oct 12, 2023',
    author: 'Zain Shah',
    category: 'Cloud',
    image: 'https://picsum.photos/seed/cloud-blog/800/600'
  },
  {
    id: '2',
    slug: 'custom-web-app-development',
    title: 'Custom Web Application Development: Everything You Need to Know',
    excerpt: 'A comprehensive guide on why custom software often outperforms off-the-shelf solutions for growing businesses.',
    date: 'Nov 05, 2023',
    author: 'Muhammad Imran Shafiq',
    category: 'Development',
    image: 'https://picsum.photos/seed/dev-blog/800/600'
  },
  {
    id: '3',
    slug: 'trends-of-mobile-design',
    title: "Trends of Mobile Design: What's Next for Your Business",
    excerpt: 'Explore the latest shifts in mobile UI/UX and how to stay ahead of user expectations in 2024.',
    date: 'Dec 15, 2023',
    author: 'Saqib Naseer',
    category: 'Design',
    image: 'https://picsum.photos/seed/mobile-blog/800/600'
  },
  {
    id: '4',
    slug: 'generative-ai-transforming-operations',
    title: 'How Generative AI is Transforming Business Operations',
    excerpt: 'From automated customer support to intelligent data analysis, see how AI is reshaping the corporate landscape.',
    date: 'Jan 20, 2024',
    author: 'Zain Shah',
    category: 'AI',
    image: 'https://picsum.photos/seed/ai-blog/800/600'
  }
];
