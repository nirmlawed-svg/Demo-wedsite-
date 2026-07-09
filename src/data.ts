import { Course, Teacher, Result, Testimonial, GalleryImage, FAQItem } from './types';

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Class 6–8 Foundation',
    category: 'foundation',
    description: 'Build a rock-solid foundation in Mathematics and Science to foster logic, reasoning, and early conceptual interest.',
    duration: '1 Year Program',
    keyFeatures: [
      'Conceptual base-building for School Exams',
      'Mental Maths & Quantitative Aptitude drills',
      'Interactive hands-on science activities',
      'Early preparation for Olympiads (IMO, NSO)'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'course-2',
    title: 'Class 9–10 Math & Science',
    category: 'secondary',
    description: 'Rigorous CBSE / ICSE board preparation coupled with analytical problem-solving skills for senior secondary streams.',
    duration: '1 Year Program',
    keyFeatures: [
      'Complete Board Syllabus with intensive revision',
      'Regular subject-wise descriptive tests',
      'Special sessions on Board presentation skills',
      'Doubt solving support by core faculty'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'course-3',
    title: 'Class 11–12 PCM',
    category: 'senior',
    description: 'Comprehensive study program covering Mathematics, Physics, and Chemistry for State & National Boards.',
    duration: '2 Years Program',
    keyFeatures: [
      'Detailed study of Mechanics, Calculus & Organic Chemistry',
      'Weekly descriptive tests with detailed feedback',
      'Special mock drills for practical examinations',
      'Comprehensive custom-authored study material'
    ],
    iconName: 'FileText'
  },
  {
    id: 'course-4',
    title: 'JEE Foundation',
    category: 'entrance',
    description: 'Early JEE Main & Advanced prep designed to transition Class 9-11 students smoothly into complex engineering analytics.',
    duration: '1 / 2 Years Program',
    keyFeatures: [
      'Advanced Mathematics (Calculus, Coordinate Geometry)',
      'Physics problem solving via first principles',
      'Computer-Based Testing (CBT) mock simulators',
      'Formula booklets and high-speed calculation tips'
    ],
    iconName: 'Calculator'
  },
  {
    id: 'course-5',
    title: 'NEET Foundation',
    category: 'entrance',
    description: 'Rigorous prep for medical aspirants focusing heavily on Zoology, Botany, and numerical-based Physics/Chemistry.',
    duration: '1 / 2 Years Program',
    keyFeatures: [
      'In-depth study of Cell Biology, Genetics & Physiology',
      'Fast-paced Chemistry stoichiometry and organic drills',
      'Extensive MCQ worksheets and timed mock tests',
      'Daily Practice Papers (DPPs) with video hints'
    ],
    iconName: 'HeartPulse'
  },
  {
    id: 'course-6',
    title: 'Olympiad Preparation',
    category: 'olympiad',
    description: 'Specialized high-order thinking course to crack regional, national, and international Math & Science olympiads.',
    duration: '1 Year Program',
    keyFeatures: [
      'Pre-RMO, RMO, INMO level Mathematics concepts',
      'NSEP, NSEC, NSEB level Physics, Chemistry & Biology',
      'Mentorship by top faculty and national medalists',
      'Critical analysis of non-routine competitive questions'
    ],
    iconName: 'Award'
  }
];

export const FACULTY: Teacher[] = [
  {
    id: 'faculty-1',
    name: 'Prof. Nimai Sen',
    qualification: 'M.Sc. in Mathematics, IIT Kharagpur',
    experience: '15+ Years Experience',
    subject: 'Founder & Head of Mathematics',
    photo: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400',
    bio: 'Dedicated to turning abstract formulas into physical realities. Over 1,200 students mentored into premier IITs and NITs. Author of the celebrated "Nimai Algebra series" for JEE.',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'nimai.sen@classes.edu'
    }
  },
  {
    id: 'faculty-2',
    name: 'Dr. Ananya Sharma',
    qualification: 'Ph.D. in Physics, IISc Bangalore',
    experience: '10+ Years Experience',
    subject: 'Head of Science (Physics)',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Physics enthusiast who believes electrodynamics and wave mechanics should be witnessed, not memorized. Uses interactive digital simulations in every classroom lecture.',
    socials: {
      linkedin: '#',
      email: 'ananya.sharma@classes.edu'
    }
  },
  {
    id: 'faculty-3',
    name: 'Prof. Rajeev Verma',
    qualification: 'B.Tech, IIT Delhi',
    experience: '8+ Years Experience',
    subject: 'Senior Chemistry Consultant',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    bio: 'Specialist in organic reactions, inorganic trends, and thermodynamics. Renowned for visual memory maps that reduce reaction-mechanism study times by 50%.',
    socials: {
      twitter: '#',
      email: 'rajeev.verma@classes.edu'
    }
  },
  {
    id: 'faculty-4',
    name: 'Dr. Sneha Rao',
    qualification: 'MBBS, KGMU Lucknow',
    experience: '7+ Years Experience',
    subject: 'Senior Biology Mentor',
    photo: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400',
    bio: 'Leverages her clinical insights to train medical aspirants. Known for hand-drawn histological diagrams and active medical mnemonics that make memorization fun.',
    socials: {
      linkedin: '#',
      email: 'sneha.rao@classes.edu'
    }
  }
];

export const RESULTS: Result[] = [
  {
    id: 'res-1',
    name: 'Aarav Singhania',
    score: '99.95%ile',
    schoolName: 'Delhi Public School (DPS), R.K. Puram',
    achievement: 'JEE Main State Topper & IIT Bombay CSE',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    examName: 'jee',
    badge: 'AIR 142'
  },
  {
    id: 'res-2',
    name: 'Meera Nair',
    score: '98.8%',
    schoolName: 'National Public School (NPS)',
    achievement: 'Class 12 Board Topper - 100/100 Math & Chem',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
    examName: 'board-12',
    badge: 'PCM 1st'
  },
  {
    id: 'res-3',
    name: 'Rohan Gupta',
    score: '695/720',
    schoolName: 'Kendriya Vidyalaya, Andrews Ganj',
    achievement: 'Secured Maulana Azad Medical College (MAMC)',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    examName: 'neet',
    badge: 'AIR 420'
  },
  {
    id: 'res-4',
    name: 'Diya Patel',
    score: 'State Rank 3',
    schoolName: 'Ryan International School',
    achievement: 'International Math Olympiad (IMO) Gold Medalist',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    examName: 'olympiad',
    badge: 'Gold'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    authorName: 'Mr. Alok Singhania',
    role: 'parent',
    content: 'Enrolling Aarav at Nimai Classes was the best choice we made. The individual focus, high-quality material, and strict testing cycles took his Physics skills to another level. Prof. Nimai Sen has built a highly supportive learning environment!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200',
    relation: 'Parent of Aarav (IIT Bombay CSE)'
  },
  {
    id: 'test-2',
    authorName: 'Meera Nair',
    role: 'student',
    content: 'Nimai classes changed my attitude towards Math. Instead of memorizing formulas, we derived them together. Dr. Ananyas visual demonstrations meant I never had to mug physics laws again. I scored 100 in Boards because of them!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    relation: 'Class 12 Boards (98.8%)'
  },
  {
    id: 'test-3',
    authorName: 'Mrs. Sunita Nair',
    role: 'parent',
    content: 'What makes Nimai classes stand out is their structural transparency. Parents get detailed weekly test reports and teacher commentary. They knew exactly where my daughter was lagging and supported her dedicatedly.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200',
    relation: 'Parent of Meera (PCM Topper)'
  },
  {
    id: 'test-4',
    authorName: 'Rohan Gupta',
    role: 'alumnus',
    content: 'Rajeev Sirs Organic reaction roadmaps were absolute life savers for Chemistry, while Sneha Maam held daily interactive sessions on Biology diagrams. The Computer-Based Mock tests set the exact environment needed to conquer NEET.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    relation: 'NEET Scholar (MAMC Delhi)'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600',
    category: 'classroom',
    caption: 'Dynamic modern classroom discussion led by Prof. Nimai Sen.'
  },
  {
    id: 'gal-2',
    src: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600',
    category: 'exhibition',
    caption: 'Students demonstrating electrostatic physics models at our Science Exhibition.'
  },
  {
    id: 'gal-3',
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600',
    category: 'event',
    caption: 'A packed interactive seminar on JEE & NEET test strategy.'
  },
  {
    id: 'gal-4',
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    category: 'exhibition',
    caption: 'Chemistry lab session mapping crystal lattices and acid reactions.'
  },
  {
    id: 'gal-5',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600',
    category: 'awards',
    caption: 'Celebrating our top board and Olympiad rankers during the annual Convocation.'
  },
  {
    id: 'gal-6',
    src: 'https://images.unsplash.com/photo-1568658176307-e726879463ae?auto=format&fit=crop&q=80&w=600',
    category: 'classroom',
    caption: 'Smart classroom interactive screens for multi-dimensional physics modeling.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the admission and enrollment process?',
    answer: 'Admissions begin with the Nimai Scholastic Aptitude Test (NSAT), a diagnostic tool assessing baseline mathematical logical and observational science skills. Based on NSAT, we chart an optimal learning pathway and offer merit-based scholarships.'
  },
  {
    id: 'faq-2',
    question: 'How are fees structured and are scholarship waivers available?',
    answer: 'Our fee structure is extremely competitive with flexible installment plans. Scholarships are granted on two paths: performing exceptionally well in our NSAT (up to 100% tuition waiver) or securing a top 3 school rank in Class Boards.'
  },
  {
    id: 'faq-3',
    question: 'What are the batch sizes and timings?',
    answer: 'To sustain active conceptual engagement, we restrict batch sizes to a maximum of 20-25 students. Evening batches are tailored for school-going students, running from 4:30 PM to 6:00 PM and 6:15 PM to 7:45 PM.'
  },
  {
    id: 'faq-4',
    question: 'Do you offer free trial or demo classes?',
    answer: 'Yes! We encourage parents and students to attend two trial/demo classes for free. This helps them witness our high-tech smart board interface, structured notes, and unique teaching styles firsthand.'
  },
  {
    id: 'faq-5',
    question: 'How are parent progress reports managed?',
    answer: 'Every student performance metrics are synced in real-time on our local server. Parents receive SMS notifications regarding attendance, weekly descriptive/objective test grades, and a comprehensive qualitative review every quarter.'
  }
];
