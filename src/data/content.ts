export const SITE = {
  name: 'GYANVI ACCOUNTING',
  tagline: '& TAX CONSULTANT',
  phone: '0120-4987133',
  phoneAlt: '+91 8279469387',
  email: 'info@gyanvitax.com',
  whatsapp: '918279469387',
  address:
    'Shop No. 2, Shree Ganesh Complex, Vrindavan Garden, Near Aaradhana Cinema, Sahibabad, Ghaziabad, UP',
  rating: '4.9/5',
}

export const ROUTES = {
  home: '/',
  services: '/services',
  about: '/about',
  contact: '/contact',
  locations: '/locations',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  refund: '/refund-policy',
} as const

export const NAV_LINKS = [
  { label: 'HOME', to: ROUTES.home },
  { label: 'SERVICES', to: ROUTES.services },
  { label: 'ABOUT US', to: ROUTES.about },
  { label: 'CONTACT', to: ROUTES.contact },
]

export const LOCATIONS = [
  { label: 'Delhi', to: `${ROUTES.locations}#delhi` },
  { label: 'Ghaziabad', to: `${ROUTES.locations}#ghaziabad` },
  { label: 'Meerut', to: `${ROUTES.locations}#meerut` },
  { label: 'Hapur', to: `${ROUTES.locations}#hapur` },
]

export const LOCATION_PAGES = [
  {
    id: 'delhi',
    name: 'Delhi',
    headline: 'Tax & Compliance Services in Delhi',
    description:
      'Expert GST registration, ITR filing, and company formation for startups and businesses across Delhi NCR.',
    highlights: ['GST Registration & Filing', 'ITR Filing', 'Company/LLP Setup', 'TDS Compliance'],
  },
  {
    id: 'ghaziabad',
    name: 'Ghaziabad',
    headline: 'Tax Consultants in Ghaziabad & Sahibabad',
    description:
      'Our main office serves Sahibabad, Vaishali, Indirapuram and all Ghaziabad with CA-led tax and accounting support.',
    highlights: ['Main Office – Sahibabad', 'Monthly GST Returns', 'Part-Time Accounting', 'MSME Registration'],
  },
  {
    id: 'meerut',
    name: 'Meerut',
    headline: 'Accounting & Tax Services in Meerut',
    description:
      'Reliable compliance and registration services for traders, manufacturers, and professionals in Meerut.',
    highlights: ['ITR Filing', 'GST Compliance', 'Bookkeeping', 'Business Registration'],
  },
  {
    id: 'hapur',
    name: 'Hapur',
    headline: 'ITR & GST Services in Hapur',
    description:
      'Affordable tax filing and registration support for small businesses and individuals in Hapur district.',
    highlights: ['ITR Filing in Hapur', 'GST Registration', 'Tax Planning', 'Startup Advisory'],
  },
]

export const LEGAL_PAGES = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Information We Collect',
        body: 'We collect information you provide through callback forms, phone calls, and email — including name, mobile number, city, and service requirements.',
      },
      {
        heading: 'How We Use Your Data',
        body: 'Your information is used solely to respond to inquiries, provide tax and compliance services, and improve our customer support. We do not sell your data to third parties.',
      },
      {
        heading: 'Data Security',
        body: 'We take reasonable measures to protect your personal information. Communication via WhatsApp and email should not include sensitive passwords or banking credentials.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    sections: [
      {
        heading: 'Services',
        body: 'Gyanvi Accounting & Tax Consultant provides tax, accounting, and compliance advisory. Final outcomes depend on government processing and client-provided documentation.',
      },
      {
        heading: 'Fees & Payment',
        body: 'Service fees are communicated before engagement. Prices listed on the website are starting rates and may vary based on complexity.',
      },
      {
        heading: 'Client Responsibilities',
        body: 'Clients must provide accurate documents and information on time. Delays in document submission may affect filing deadlines.',
      },
    ],
  },
  refund: {
    title: 'Refund Policy',
    sections: [
      {
        heading: 'Government Fees',
        body: 'Government filing fees and statutory charges are non-refundable once paid to authorities on your behalf.',
      },
      {
        heading: 'Professional Fees',
        body: 'If we are unable to initiate your service due to our error, a partial or full refund of professional fees may be considered on a case-by-case basis.',
      },
      {
        heading: 'Contact',
        body: 'For refund requests, contact us at info@gyanvitax.com or call 0120-4987133 within 7 days of payment.',
      },
    ],
  },
}

export const SERVICE_OPTIONS = [
  'GST Registration',
  'GST Return Filing',
  'Company Registration',
  'LLP Registration',
  'ITR Filing',
  'MSME Registration',
  'Part-Time Accounting',
  'Trademark Registration',
  'PF & ESI Compliance',
  'Insurance Services',
  'Other',
]

export const HERO_STATS = [
  { value: '500+', label: 'Clients Served', sub: '' },
  { value: '5+', label: 'Years Exp.', sub: '' },
  { value: '100%', label: 'Online Process', sub: 'PROFESSIONAL' },
  { value: 'Expert', label: 'Support', sub: '' },
]

export const MAIN_SERVICES = [
  {
    id: 'gst',
    title: 'GST SERVICES',
    titleHi: 'जीएसटी सेवाएं',
    price: '₹1,999',
    items: [
      'GST Registration',
      'GST Notice Reply',
      'GST Return Filing',
      'Cancellation & Amendment',
    ],
    bonus: '✨ Free MSME Registration',
    sideCards: [
      { title: 'MSME & Startup', desc: 'Udyam & Startup India Registration' },
      { title: 'Trademark & Insurance', desc: 'Brand Protection & Business Insurance' },
    ],
  },
  {
    id: 'company',
    title: 'COMPANY REGISTRATION',
    titleHi: 'कंपनी पंजीकरण',
    price: '₹7,999',
    items: [
      'Private Limited Company',
      'LLP Registration',
      'OPC Registration',
      'Partnership & Proprietorship',
    ],
    bonus: '✨ Free MSME Registration',
    sideCards: [
      { title: 'Part-Time Accounting Monthly', desc: 'Bookkeeping & Financial Reports' },
    ],
  },
  {
    id: 'income-tax',
    title: 'INCOME TAX',
    titleHi: 'आयकर सेवाएं',
    price: '₹999',
    items: [
      'ITR Filing (All Types)',
      'Tax Planning',
      'TDS Return Filing',
      'Tax Audit Support',
    ],
    bonus: '✨ Free MSME Registration',
    sideCards: [
      { title: 'PF & ESI Compliance', desc: 'Monthly Compliance & Registration' },
    ],
  },
]

export const TRUST_BADGES = [
  { title: 'ISO Certified', desc: 'Quality Assured', image: '/iso.png' },
  { title: 'MSME Registered', desc: 'Govt. Recognized', image: '/msme.png' },
  { title: 'CA, CS, CMA', desc: 'Expert Team', image: '/ca_cs.png' },
  { title: '4.9/5 Rating', desc: 'Customer Trust', image: '/rating_start.png' },
]

export const TESTIMONIALS = [
  {
    quote:
      "Gyanvi Accounting & Tax Consultant made our company registration a breeze. The CA, CS, CMA team's expertise and 100% online process saved us weeks. Highly recommended for startups in Ghaziabad.",
    name: 'Rahul Sharma',
    role: 'Tech Startups India',
    location: 'Ghaziabad',
    initial: 'R',
  },
  {
    quote:
      'Excellent GST services. They handle my monthly returns flawlessly. Transparent pricing and always available on WhatsApp for quick queries.',
    name: 'Priya Singh',
    role: 'E-commerce Seller',
    location: 'Sahibabad',
    initial: 'P',
  },
  {
    quote:
      'Got my MSME and GST registration done within 3 days. Very professional and helpful team. They guided me through every step.',
    name: 'Amit Kumar',
    role: 'Retail Store Owner',
    location: 'Delhi NCR',
    initial: 'A',
  },
]

export const COMMITMENT = [
  {
    title: '10+ Years Experience',
    desc: 'Proven track record in tax advisory, compliance, and consulting for all business sizes.',
  },
  {
    title: 'PAN India Coverage',
    desc: 'From Delhi to Mumbai, Bengaluru to Lucknow – trusted by clients in over 20 states.',
  },
  {
    title: 'All-in-One Services',
    desc: 'GST, ITR, FSSAI, MSME, Bookkeeping, Insurance, Trademark – All Under One Roof.',
  },
]

export const PROFESSIONAL_SERVICES = [
  {
    title: 'GST Filing & Registration',
    desc: 'Stay compliant with timely GST returns and professional advisory.',
  },
  {
    title: 'Income Tax Return (ITR) Filing',
    desc: "Whether you're salaried, self-employed, or a business owner — we file accurate returns on time, with maximum tax-saving support.",
  },
  {
    title: 'FSSAI License Registration',
    desc: 'Start or regularize your food business with FSSAI Basic, State, or Central licenses. Fast, affordable & hassle-free.',
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect your brand identity. We help file and manage your trademark applications with expert documentation and tracking.',
  },
  {
    title: 'MSME Registration',
    desc: 'MSME (Udyam) Registration helps you unlock government benefits, subsidies, and priority lending with full guidance from documentation to certification.',
  },
  {
    title: 'Insurance Services',
    desc: "We help safeguard your life, assets, and business through smart insurance planning — health, life, motor, or business insurance.",
  },
]

export const TEAM = [
  {
    name: 'Sunil Chauhan',
    role: 'Founder & Chief Tax Consultant',
    image: '/sunil_chauhan.avif',
  },
  {
    name: 'Gurdeep Singh',
    role: 'Senior GST & Compliance Expert',
    image: '/gurdeep_singh.avif',
  },
  {
    name: 'Rinki Singh',
    role: 'Tax Return Filing Executive',
    image: '/rinki_singh.avif',
  },
  {
    name: 'Riya Singh',
    role: 'Legal & Documentation Advisor',
    image: '/riya_singh.avif',
  },
  {
    name: 'Pooja Rajput',
    role: 'Insurance & Investment Consultant',
    image: '/pooja_rajput.avif',
  },
]

export const FOOTER_SERVICES = [
  'GST Registration & Filing',
  'Company/LLP Formation',
  'Part-Time Accounting',
  'MSME & Startup India',
  'Trademark & PF/ESI',
  'Income Tax Return (ITR)',
]

export const FOOTER_AREAS = [
  'Company Registration in Sahibabad',
  'GST Services in Ghaziabad',
  'Tax Consultants in Garhmukteshwar',
  'ITR Filing in Hapur',
  'Business Setup in Delhi NCR',
]
