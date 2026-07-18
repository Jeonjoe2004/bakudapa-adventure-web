export interface Mountain {
  id: string;
  name: string;
  slug: string;
  location: string;
  elevation: number;
  difficulty: "mudah" | "sedang" | "sulit" | "ekstrem";
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  estimatedTime: string;
  bestSeason: string;
  popularity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
}

export interface WaitingListEntry {
  id?: string;
  name: string;
  email: string;
  whatsapp: string;
  kota: string;
  created_at?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}
