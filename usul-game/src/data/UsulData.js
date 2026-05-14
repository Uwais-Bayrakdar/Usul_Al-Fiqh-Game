// The categories for the Main Menu
export const TOPICS = [
  {
    id: 'taklifi',
    title: 'الأحكام التكليفية',
    icon: '⚖️',
    description: 'تتعلق بأفعال المكلف من حيث الطلب أو التخيير.',
    targetType: 'taklifi',
    slotsCount: 5,
  },
  {
    id: 'wadi',
    title: 'الأحكام الوضعية',
    icon: '📍',
    description: 'الأوصاف التي نصبها الشارع معرفات للأحكام.',
    targetType: 'wadi',
    slotsCount: 5,
  },
  {
    id: 'adillah',
    title: 'الأدلة المتفق عليها',
    icon: '📖',
    description: 'المصادر الأربعة الأساسية للتشريع الإسلامي.',
    targetType: 'source_agreed',
    slotsCount: 4,
  }
];

// The full pool of terms from your summary
export const ALL_CARDS = [
  // Taklifi Rules
  { id: 'ijab', title: 'إيجاب', type: 'taklifi', desc: 'Required' },
  { id: 'nadb', title: 'ندب', type: 'taklifi', desc: 'Recommended' },
  { id: 'tahrim', title: 'تحريم', type: 'taklifi', desc: 'Prohibited' },
  { id: 'karaha', title: 'كراهة', type: 'taklifi', desc: 'Disliked' },
  { id: 'ibaha', title: 'إباحة', type: 'taklifi', desc: 'Permissible' },
  
  // Wad'i Rules
  { id: 'sabab', title: 'السبب', type: 'wadi', desc: 'The Cause' },
  { id: 'shart', title: 'الشرط', type: 'wadi', desc: 'The Condition' },
  { id: 'mani', title: 'المانع', type: 'wadi', desc: 'The Obstacle' },
  { id: 'sihha', title: 'الصحة والفساد', type: 'wadi', desc: 'Validity' },
  { id: 'rukhsa', title: 'العزيمة والرخصة', type: 'wadi', desc: 'Exemption' },
  
  // Agreed Sources
  { id: 'quran', title: 'القرآن', type: 'source_agreed', desc: 'The Book' },
  { id: 'sunnah', title: 'السنة', type: 'source_agreed', desc: 'Prophetic Path' },
  { id: 'ijma', title: 'الإجماع', type: 'source_agreed', desc: 'Consensus' },
  { id: 'qiyas', title: 'القياس', type: 'source_agreed', desc: 'Analogy' },
];