import  { ReactNode } from 'react';

export interface StatsCard {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export interface Plan {
  id: number;
  name: string;
  price: number;
  billing: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

export interface Student {
  id: number;
  name: string;
  age: number;
  joinDate: string;
  lastVisit: string;
  attendance: number;
  riskLevel: 'low' | 'medium' | 'high';
}
 