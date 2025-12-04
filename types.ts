export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  flavors?: string[];
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}