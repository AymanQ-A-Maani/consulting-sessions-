export interface QuizOption {
  id: string;
  text: string;
  value: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

export interface PackageInfo {
  id: string;
  name: string;
  title: string;
  whyPerfect: string;
  sessions: string;
  services: {
    session: string;
    description: string;
  }[];
}

export const questions: QuizQuestion[] = [
  {
    id: 'career_stage',
    text: 'ما هي مرحلتك المهنية الحالية؟',
    options: [
      {
        id: 'student',
        text: 'طالب (ثانوي أو السنوات الأولى الجامعية)',
        value: 'student'
      },
      {
        id: 'graduate',
        text: 'خريج جديد أو محترف مبتدئ (0-2 سنة خبرة)',
        value: 'graduate'
      },
      {
        id: 'professional',
        text: 'محترف ذو خبرة (3+ سنوات)',
        value: 'professional'
      }
    ]
  },
  {
    id: 'student_goals',
    text: 'ما هو هدفك الأساسي؟',
    options: [
      {
        id: 'major_selection',
        text: 'اختيار التخصص الجامعي المناسب',
        value: 'major_selection'
      },
      {
        id: 'academic_planning',
        text: 'التخطيط الأكاديمي والنجاح الجامعي',
        value: 'academic_planning'
      },
      {
        id: 'career_guidance',
        text: 'الحصول على إرشاد عام حول المستقبل المهني',
        value: 'career_guidance'
      }
    ]
  },
  {
    id: 'graduate_challenges',
    text: 'ما هو أكبر تحدٍ تواجهه؟',
    options: [
      {
        id: 'resume_linkedin',
        text: 'بناء السيرة الذاتية وملف LinkedIn',
        value: 'resume_linkedin'
      },
      {
        id: 'interview_prep',
        text: 'التحضير للمقابلات الوظيفية',
        value: 'interview_prep'
      },
      {
        id: 'career_path',
        text: 'اختيار المسار المهني المناسب',
        value: 'career_path'
      }
    ]
  }
];

export const packages: Record<string, PackageInfo> = {
  academic_navigator: {
    id: 'academic_navigator',
    name: 'Academic Navigator',
    title: 'الملاح الأكاديمي',
    whyPerfect: 'أنت في مرحلة حاسمة من تحديد مستقبلك الأكاديمي والمهني. تحتاج إلى دليل متخصص لاتخاذ قرارات مدروسة حول تخصصك الجامعي. هذه الحزمة تضع الأساس القوي لهويتك المهنية المستقبلية.',
    sessions: '3 جلسات (180 دقيقة لكل جلسة)',
    services: [
      {
        session: 'الجلسة الأولى',
        description: 'اختبار هولاند النفسي لاكتشاف الشخصية والميول'
      },
      {
        session: 'الجلسة الثانية',
        description: 'إرشاد متخصص لاختيار التخصص الجامعي المناسب'
      },
      {
        session: 'الجلسة الثالثة',
        description: 'وضع خطة أكاديمية واضحة للنجاح الجامعي + بناء الأساس للهوية المهنية المستقبلية + استراتيجيات النجاح الأكاديمي والتفوق الدراسي'
      }
    ]
  },
  career_launchpad: {
    id: 'career_launchpad',
    name: 'Career Launchpad',
    title: 'منصة الانطلاق المهني',
    whyPerfect: 'أنت تقف على أعتاب دخول سوق العمل وتحتاج دليل شامل. تحتاج إلى أدوات قوية وفعالة لتميزك عن المنافسين. هذه الحزمة تحولك من خريج إلى مرشح مثالي للوظائف.',
    sessions: '3 جلسات (180 دقيقة لكل جلسة)',
    services: [
      {
        session: 'الجلسة الأولى',
        description: 'كتابة وتحسين السيرة الذاتية بشكل احترافي + بناء وتطوير ملف LinkedIn قوي وجذاب'
      },
      {
        session: 'الجلسة الثانية',
        description: 'التدريب على المقابلات الوظيفية والتحضير لها + استراتيجيات البحث عن الوظائف والتقديم الفعال'
      },
      {
        session: 'الجلسة الثالثة',
        description: 'تطوير المهارات المهنية والحضور الوظيفي'
      }
    ]
  },
  career_accelerator: {
    id: 'career_accelerator',
    name: 'Career Accelerator',
    title: 'مسرع التطوير المهني',
    whyPerfect: 'أنت محترف لديك خبرة وتريد الانتقال للمستوى التالي. تحتاج إلى استراتيجية واضحة ومكثفة للنمو المهني المتسارع. وقتك ثمين وتحتاج حلول فعالة ومركزة.',
    sessions: 'جلسة واحدة مكثفة (60 دقيقة)',
    services: [
      {
        session: 'الجلسة الوحيدة',
        description: 'تحليل استراتيجي شامل للمسار المهني الحالي + وضع خطة تطوير مهني متقدمة ومخصصة + استراتيجيات الوصول للمناصب القيادية والإدارية + تطوير الحضور التنفيذي والمهارات القيادية + خريطة طريق واضحة للنمو المهني المتسارع'
      }
    ]
  }
};

export const decisionPaths = [
  {
    path: ['student', 'major_selection'],
    result: 'academic_navigator',
    description: 'طالب → اختيار التخصص الجامعي المناسب → Academic Navigator'
  },
  {
    path: ['student', 'academic_planning'],
    result: 'academic_navigator',
    description: 'طالب → التخطيط الأكاديمي والنجاح الجامعي → Academic Navigator'
  },
  {
    path: ['student', 'career_guidance'],
    result: 'academic_navigator',
    description: 'طالب → الحصول على إرشاد عام حول المستقبل المهني → Academic Navigator'
  },
  {
    path: ['graduate', 'resume_linkedin'],
    result: 'career_launchpad',
    description: 'خريج جديد → بناء السيرة الذاتية وملف LinkedIn → Career Launchpad'
  },
  {
    path: ['graduate', 'interview_prep'],
    result: 'career_launchpad',
    description: 'خريج جديد → التحضير للمقابلات الوظيفية → Career Launchpad'
  },
  {
    path: ['graduate', 'career_path'],
    result: 'career_launchpad',
    description: 'خريج جديد → اختيار المسار المهني المناسب → Career Launchpad'
  },
  {
    path: ['professional'],
    result: 'career_accelerator',
    description: 'محترف ذو خبرة (3+ سنوات) → Career Accelerator مباشرةً'
  }
];