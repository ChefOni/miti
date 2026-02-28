// data/features.ts
import type { FAQItem, FeatureCardProps } from './types';
import { IdCard,BookSearch, ScanSearch, Map, Shield, Cctv } from 'lucide-react';


export const mitiFeatures: FeatureCardProps[] = [
  {
    id: 'smart-onboarding',
    heading: 'Your Health Passport',
    subtitle: 'Create a personalized safety profile. Tell Miti about your allergies, pregnancy status, and current medications to get tailored warnings.',
    imageSrc: '/assets/features/onboarding-profile.png', 
    imageAlt: 'A user profile screen showing health tags like "Pregnancy" and "Hypertension"',
    tags: ['Live'],
    ctaText: 'Complete Profile',
    icon: IdCard

  },
  {
    id: 'herb-directory',
    heading: 'The African Herb Encyclopedia',
    subtitle: 'Identify herbs by local names (e.g., Zobo, Agbo) and scientific classification. Know exactly what you are taking.',
    imageSrc: '/assets/features/herb-directory-grid.png',
    imageAlt: 'A grid of card components showing different African herbs with high-quality photos',
    tags: ['Live'],
    ctaText: 'Browse Herbs',
    icon: BookSearch
  },
  {
    id: 'smart-search',
    heading: 'Symptom & Remedy Finder',
    subtitle: 'Search not just by name, but by what you feel. Filter remedies by ailment (e.g., Malaria), plant part (Roots/Leaves), or Region.',
    imageSrc: '/assets/features/search-filters.png',
    imageAlt: 'A search bar with active filters for "Malaria" and "West Africa"',
    tags: ['Beta'],
    ctaText: 'Start Searching',
    icon: ScanSearch
  },
  {
    id: 'location-map',
    heading: 'Herb Geo-Locator',
    subtitle: 'Traveling? Find out which medicinal plants are native to the region you are currently visiting.',
    imageSrc: '/assets/features/map-view.png',
    imageAlt: 'A map of Africa with pin drops showing herb availability in different regions',
    tags: ['Beta'],
    icon: Map
    
  },
  {
    id: 'ai-context',
    heading: 'Context-Aware Safety',
    subtitle: 'Miti remembers your chats. If you mention "Heachache" today and "Ginger" tomorrow, it checks if they are safe together.',
    imageSrc: '/assets/features/ai-chat-bubble.png',
    imageAlt: 'A chat interface where the AI suggests a safety warning based on previous messages',
    tags: ['Coming Soon'],
    icon: Shield
  },
  {
    id: 'community-surveys',
    heading: 'Wisdom Exchange',
    subtitle: 'Earn free AI credits by contributing your local knowledge to our herb database. Help us digitize ancestral wisdom.',
    imageSrc: '/assets/features/survey-reward.png',
    imageAlt: 'A success screen showing "5 Credits Earned" after submitting a herb survey',
    tags: ['Coming Soon'],
    icon: Cctv
  }
];

export const mitiFaqs: FAQItem[] = [
  {
    id: "what-is-miti",
    question: "How does Miti check for drug and herb interactions?",
    answer: "Miti uses an AI-powered Interaction Engine. Once you add your current hospital medications to your Health Passport, you can search for or snap a photo of a local African herb. Miti cross-references them and gives you a safety 'Traffic Light': Green (Safe), Yellow (Moderate Risk), or Red (High Risk)."
  },
  {
    id: "medical-advice",
    question: "Is Miti a replacement for my doctor or traditional healer?",
    answer: "No. Miti is designed to act as a safety guardian and educational directory, not a medical professional. It helps bridge the information gap between ancestral wisdom and modern medicine, but you should always consult a certified healthcare provider before starting or stopping any treatment."
  },
  {
    id: "data-privacy",
    question: "Is my personal health data and medication list secure?",
    answer: "Absolutely. We take your privacy seriously. The health information you provide—such as allergies, pregnancies, or current medications—is encrypted and used strictly to calculate your personal safety warnings. We do not sell your medical profile to third parties."
  },
  {
    id: "herb-database",
    question: "What if Miti cannot identify the herb I snapped?",
    answer: "Our Herb Directory is constantly growing. If our AI cannot identify a specific root or leaf with high confidence, it will not guess. Instead, you can search our directory by ailment or local name, or contribute to our Wisdom Exchange to help us verify and add the plant to the database."
  }
];