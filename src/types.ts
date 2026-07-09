export type CourseCategory = 'foundation' | 'secondary' | 'senior' | 'entrance' | 'olympiad';

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  description: string;
  duration: string;
  keyFeatures: string[];
  iconName: string; // Used to map to Lucide icons dynamically
}

export interface Teacher {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  subject: string;
  photo: string;
  bio: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Result {
  id: string;
  name: string;
  score: string; // e.g. "98.4%", "AIR 45", "99.92 Percentile"
  schoolName: string;
  achievement: string; // e.g. "JEE Advanced Qualified", "Class 10 District Topper"
  photo: string;
  examName: 'board-10' | 'board-12' | 'jee' | 'neet' | 'olympiad';
  badge: string; // e.g. "100/100 Math"
}

export interface Testimonial {
  id: string;
  authorName: string;
  role: 'parent' | 'student' | 'alumnus';
  content: string;
  rating: number;
  photo: string;
  relation: string; // e.g., "Parent of Ayush, NEET ranker"
}

export interface GalleryImage {
  id: string;
  src: string;
  category: 'classroom' | 'event' | 'exhibition' | 'awards';
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DemoBooking {
  id: string;
  studentName: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  classLevel: string;
  preferredSlot: string;
  preferredDate: string;
  subjectInterest: 'math' | 'science' | 'both';
  createdAt: string;
  status: 'confirmed' | 'pending';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}
