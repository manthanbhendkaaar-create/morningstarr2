export const SITE = {
  name: "MORNINGSTARR AI",
  tagline: "AI Automation Partner for Marketing Agencies",
  description:
    "MorningstarrAI designs, builds and runs custom AI systems for marketing agencies: client reporting, onboarding, lead response and delivery ops. Take on more clients without hiring more people.",
  url: "https://morningstarr.asendify.co",
  email: "manthanbhendkaar@gmail.com",
  whatsapp: "+91 75884 68884",
  linkedin: "https://www.linkedin.com/in/manthan-bhendkar-93b452395/",
  location: "Dubai Downtown",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/manthanbhendkaaar/30min?utm_source=morningstarr&utm_content=website",
} as const;

/** Single source of truth for all booking CTAs */
export const CALENDLY_URL = SITE.calendlyUrl;

export const DEMO_VIDEO_SRC = "/demo-video.mp4";

export const FOUNDER = {
  name: "Manthan Bhendkar",
  title: "Founder, MorningstarrAI & Asendify",
  subtitle:
    "Builds the AI systems that run his own agency, then builds the same kind of systems for other agencies.",
  imageSrc: "/profile.png",
  imageAlt: "Manthan Bhendkar, Founder of MorningstarrAI",
  stats: [
    { value: "103", label: "Niches in our lead engine" },
    { value: "10+", label: "Inboxes run by our systems" },
    { value: "Daily", label: "We run what we sell" },
  ],
} as const;

export const EXPERTISE_TAGS = [
  "Client Reporting",
  "Client Onboarding",
  "Lead-to-Call Systems",
  "Outbound Engines",
  "AI Agents",
  "n8n · Make · Apps Script",
] as const;

export const NAV_LINKS = [
  { label: "Systems", href: "#gallery" },
  { label: "Proof", href: "#case-studies" },
  { label: "Engagements", href: "#engagements" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Promises shown under the hero (no invented results) */
export const HERO_PILLARS = [
  { display: "21 days", label: "From kickoff to first system live" },
  { display: "Your stack", label: "Built on the tools you already use" },
  { display: "You own it", label: "Every workflow, account and login" },
  { display: "Weekly", label: "Monitoring and fixes on retainer" },
] as const;

export const HERO_COPY = {
  eyebrow: "AI Automation for Marketing Agencies",
  headline: "TAKE ON MORE CLIENTS",
  headlineHighlight: "WITHOUT HIRING",
  subheadline:
    "MorningstarrAI designs, builds and runs custom AI systems for agencies: client reporting, onboarding, lead response and delivery ops. Your team spends its hours on the work clients actually pay for.",
  primaryCta: "Book a Strategy Call",
  secondaryCta: "See Engagements",
  secondaryHref: "#engagements",
} as const;

export const HERO_BENEFITS = [
  "Client reports that build and send themselves",
  "Every inbound lead answered and booked in minutes",
  "Onboarding that runs from signed contract to kickoff",
  "Hours of admin off every account manager",
  "Margins that grow as you add clients",
] as const;

export const TRUST_CATEGORIES = [
  "Performance Agencies",
  "Social Media Agencies",
  "SEO Agencies",
  "PPC Agencies",
  "Content Studios",
  "Creative Agencies",
  "Growth Agencies",
] as const;

/** Premium engagements (prices are "from" — final scope agreed on the call) */
export const ENGAGEMENTS = [
  {
    name: "Automation Sprint",
    price: "from £4,500",
    cadence: "one-off",
    summary: "One production system, scoped around your biggest bottleneck.",
    points: [
      "Workflow audit and system design",
      "One system built, tested and live in 21 days",
      "Handover docs and a recorded walkthrough",
      "30 days of fixes included",
    ],
    featured: false,
  },
  {
    name: "Agency Operating System",
    price: "from £12,000",
    cadence: "one-off",
    summary: "Reporting, onboarding, lead-to-call and delivery ops, connected.",
    points: [
      "3 to 5 connected systems across the agency",
      "Built on your CRM, PM tool and data sources",
      "Team training and a single operations dashboard",
      "60 days of fixes included",
    ],
    featured: true,
  },
  {
    name: "Managed Automation Partner",
    price: "from £2,500",
    cadence: "per month",
    summary: "We run, monitor and extend your systems every month.",
    points: [
      "Weekly monitoring and fixes",
      "New builds every month",
      "Priority support on WhatsApp",
      "Monthly performance review",
    ],
    featured: false,
  },
] as const;

export const GUARANTEE =
  "Your first system goes live within 21 days of kickoff, or we keep building at no extra cost until it does.";

export const CTAS = {
  bookAudit: "Book a Strategy Call",
  bookAutomationAudit: "Book Your Strategy Call",
  getAutomationPlan: "Get My Automation Plan",
  calculateLostRevenue: "Calculate Lost Revenue",
  seeOpportunityScore: "See My Opportunity Score",
  watchLiveDemo: "Watch Live Demo",
} as const;
