import type { ComponentType, SVGProps } from 'react';

export type FeatureTag = 'Live' | 'Beta' | 'Coming Soon';

export interface FeatureCardProps {
  id: string;
  heading: string;
  subtitle: string;
  imageSrc: string; 
  imageAlt: string; 
  tags: FeatureTag[];
  ctaText?: string; 
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}