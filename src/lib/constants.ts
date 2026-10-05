export const SITE = {
  name: "MORNINGSTARR AI",
  tagline: "AI Automation Partner for Marketing Agencies",
  description:
    "MorningstarrAI builds AI systems that take the manual work off marketing agencies: replying to comments and DMs, chasing new leads, turning one piece of content into ten, reporting and admin. Take on more clients without hiring more people.",
  url: "https://morningstarr.asendify.co",
  email: "manthanbhendkaaar@gmail.com",
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
  "Comment & DM Replies",
  "Content Repurposing",
  "Client Onboarding",
  "Lead-to-Call Systems",
  "Outbound Engines",
  "n8n · Make · Apps Script",
] as const;

export const NAV_LINKS = [
  { label: "Systems", href: "/#gallery" },
  { label: "Proof", href: "/#case-studies" },
  { label: "Engagements", href: "/#engagements" },
  { label: "Content Engine", href: "/content-engine" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
] as const;

/** AI Content Engine: done-for-you faceless YouTube channel in the client's cloned voice (page: /content-engine) */
export const CONTENT_ENGINE = {
  price: "£3,000",
  setup: "£1,500",
  minimum: "3-month",
  spots: 3,
  firstVideos: "7 days",
  volume: "30 Shorts and 8 long videos a month",
  includes: [
    "Your own voice, cloned from a 2-minute sample (with your written consent)",
    "30 Shorts + 8 long-form videos every month",
    "Topic research and every script written for your niche and offer",
    "Editing, B-roll, captions and music built for retention",
    "Uploaded and scheduled to your YouTube channel",
    "First videos live within 7 days",
    "Monthly performance report and strategy call",
  ],
} as const;

/** Promises shown under the hero (no invented results) */
export const HERO_PILLARS = [
  { display: "5 days", label: "From kickoff to first system live" },
  { display: "Your stack", label: "Built on the tools you already use" },
  { display: "You own it", label: "Every workflow, account and login" },
  { display: "Weekly", label: "Monitoring and fixes on retainer" },
] as const;

export const HERO_COPY = {
  eyebrow: "AI Automation for Marketing Agencies",
  headline: "TAKE ON MORE CLIENTS",
  headlineHighlight: "WITHOUT HIRING",
  subheadline:
    "Tell us the job your team still does by hand every day. We build an AI system that does it for them: replying to comments and DMs, chasing new leads, turning one piece of content into ten. Your team spends its hours on the work clients actually pay for.",
  primaryCta: "Book a Consultation Call",
  secondaryCta: "See Engagements",
  secondaryHref: "#engagements",
} as const;

export const HERO_BENEFITS = [
  "Comments and DMs drafted in each brand's voice",
  "One piece of content turned into ten",
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

/** Premium engagements (Sprint is a fixed price; larger builds are "from" — final scope agreed on the call) */
export const ENGAGEMENTS = [
  {
    name: "Automation Sprint",
    price: "£4,500",
    cadence: "fixed price",
    summary: "One production system, scoped around your biggest bottleneck.",
    points: [
      "Workflow audit and system design",
      "One process automated, tested and live in 5 days",
      "Handover docs and a recorded walkthrough",
      "30 days of fixes included",
    ],
    featured: false,
  },
  {
    name: "AI Outbound Engine",
    price: "£4,500",
    cadence: "fixed price",
    summary: "The cold-email system we run every day across 19 inboxes, set up on yours.",
    points: [
      "Daily lead finding into your own sheet",
      "A personal first line for every lead, written from their website",
      "2 follow-ups to people who don't reply",
      "AI answers every reply within minutes, qualifies the lead and sends your booking link; tricky replies come to you",
      "Deliverability setup: warm-up, sending limits, spam checks",
      "Daily report: sent, replies, calls booked",
      "Live in 5 days",
    ],
    featured: false,
  },
  {
    name: "Agency Operating System",
    price: "from £12,000",
    cadence: "one-off",
    summary: "Replies, lead-to-call, content and delivery ops, connected.",
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
  "Your first system goes live within 5 days of kickoff, or we keep building at no extra cost until it does.";

export const CTAS = {
  bookAudit: "Book a Consultation Call",
  bookAutomationAudit: "Book Your Consultation Call",
  getAutomationPlan: "Get My Automation Plan",
  calculateLostRevenue: "Calculate Lost Revenue",
  seeOpportunityScore: "See My Opportunity Score",
  watchLiveDemo: "Watch Live Demo",
} as const;
