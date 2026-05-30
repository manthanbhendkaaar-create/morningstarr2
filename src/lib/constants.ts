export const SITE = {
  name: "MORNINGSTARR AI",
  tagline: "AI Automation Agency",
  description:
    "Stop losing leads to slow follow-up. MorningstarrAI builds done-for-you automation for AI lead generation, appointment booking, CRM automation, and WhatsApp follow-up — so you capture more revenue without hiring more staff.",
  url: "https://morningstarrai.com",
  email: "manthanbhendkaar@gmail.com",
  whatsapp: "+91 75884 68884",
  linkedin: "https://www.linkedin.com/in/manthan-bhendkar-93b452395/",
  location: "Dubai Downtown",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/manthanbhendkaaar/30min",
} as const;

/** Single source of truth for all booking CTAs */
export const CALENDLY_URL = SITE.calendlyUrl;

export const DEMO_VIDEO_SRC = "/demo-video.mp4";

export const FOUNDER = {
  name: "Manthan Bhendkar",
  title: "Founder & AI Automation Strategist",
  subtitle:
    "Helping businesses scale through AI-powered systems, workflow automation, and intelligent operations.",
  imageSrc: "/profile.png",
  imageAlt: "Manthan Bhendkar, Founder of MorningstarrAI",
  stats: [
    { value: "50+", label: "Automation Workflows" },
    { value: "24/7", label: "Systems Built" },
    { value: "100%", label: "Custom Solutions" },
  ],
} as const;

export const EXPERTISE_TAGS = [
  "CRM Automation",
  "WhatsApp Automation",
  "Lead Generation",
  "AI Agents",
  "Workflow Automation",
] as const;

export const NAV_LINKS = [
  { label: "Solutions", href: "#workforce" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "ROI Calculator", href: "#roi-calculator" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Shared platform metrics — used in hero trust strip & success metrics section */
export const PLATFORM_METRICS = [
  { value: 7, suffix: "+", label: "Industries Served", display: "7+" },
  { value: 500000, suffix: "+", label: "Conversations Automated", display: "500K+" },
  { value: 50000, suffix: "+", label: "Leads Processed", display: "50K+" },
  { value: 2500, suffix: "+", label: "Appointments Booked", display: "2,500+" },
] as const;

export const HERO_COPY = {
  eyebrow: "AI Lead Generation & Appointment Booking",
  headline: "STOP LOSING LEADS TO",
  headlineHighlight: "SLOW FOLLOW-UP",
  subheadline:
    "Every hour you wait, a competitor closes your lead. We install done-for-you systems that respond instantly, qualify prospects, book appointments, and stop revenue from slipping through the cracks — without adding headcount.",
  primaryCta: "Book Free Audit",
  secondaryCta: "Calculate Lost Revenue",
  secondaryHref: "#roi-calculator",
} as const;

export const HERO_BENEFITS = [
  "Recover leads lost to slow response",
  "Book more appointments on autopilot",
  "Eliminate manual follow-up bottlenecks",
  "Stop revenue leakage from missed inquiries",
  "Scale without hiring more staff",
] as const;

export const TRUST_CATEGORIES = [
  "Agencies",
  "Coaches",
  "Real Estate",
  "Consultants",
  "Service Businesses",
  "Local Businesses",
  "Scaling Startups",
] as const;

export const CTAS = {
  bookAudit: "Book Free Audit",
  bookAutomationAudit: "Book Your Free Automation Audit",
  getAutomationPlan: "Get My Automation Plan",
  calculateLostRevenue: "Calculate Lost Revenue",
  seeOpportunityScore: "See My Opportunity Score",
  watchLiveDemo: "Watch Live Demo",
} as const;
