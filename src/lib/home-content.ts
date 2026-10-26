/**
 * Home page content shared by the visible page and the JSON-LD (so the FAQPage markup matches the FAQ word for word).
 * Everything here is taken from what MorningstarrAI actually sells and builds (see constants.ts); no invented results.
 */
export const LAST_UPDATED = { iso: "2026-10-22", label: "22 October 2026" } as const;

export const FREE_TOOL_URL = "https://morningstarr.asendify.co/automation-roi-calculator/";

export type IncludedItem = { name: string; desc: string };

export const INCLUDED: { group: string; items: IncludedItem[] }[] = [
  {
    group: "Automation Sprint",
    items: [
      { name: "Workflow audit and system design", desc: "we map the process before anything is built" },
      { name: "One process automated end to end", desc: "tested and live within 5 working days after the process call" },
      { name: "Handover docs and a recorded walkthrough", desc: "so your team knows how it works" },
      { name: "30 days of fixes", desc: "included after the Sprint goes live" },
    ],
  },
  {
    group: "AI Outbound Engine",
    items: [
      { name: "Daily lead finding", desc: "new leads added to your own sheet every day" },
      { name: "Personal first lines", desc: "written for every lead from their website" },
      { name: "2 follow-ups", desc: "to people who don't reply" },
      { name: "AI reply handling", desc: "answers every reply within minutes, qualifies the lead and sends your booking link; tricky replies come to you" },
      { name: "Deliverability setup", desc: "warm-up, sending limits and spam checks" },
      { name: "Daily report", desc: "emails sent, replies and calls booked" },
    ],
  },
  {
    group: "Agency Operating System",
    items: [
      { name: "3 to 5 connected systems", desc: "replies, lead-to-call, content and delivery ops across the agency" },
      { name: "Built on your stack", desc: "your CRM, project tool and data sources" },
      { name: "Team training", desc: "your team is walked through every system" },
      { name: "One operations dashboard", desc: "a single view of the systems" },
      { name: "60 days of fixes", desc: "included after go-live" },
    ],
  },
  {
    group: "Managed Automation Partner",
    items: [
      { name: "Weekly monitoring and fixes", desc: "we check and fix your systems every week" },
      { name: "New builds every month", desc: "we keep extending what's automated" },
      { name: "Priority support on WhatsApp", desc: "a direct line when something needs attention" },
      { name: "Monthly performance review", desc: "what ran, what changed and what to build next" },
    ],
  },
  {
    group: "Systems we build",
    items: [
      { name: "Comment & DM Reply Assistant", desc: "drafts replies in each brand's voice and queues them for one-click approval" },
      { name: "Content Repurposing Engine", desc: "turns one video, post or blog into captions, short clips, carousels and posts" },
      { name: "Client Reporting Autopilot", desc: "pulls ads, analytics and social data, writes the commentary and sends a branded report" },
      { name: "Lead-to-Call Engine", desc: "answers every inbound lead in minutes, qualifies it and books the call" },
      { name: "Client Onboarding Autopilot", desc: "intake, folders, channels, tasks and the first call, from signed contract to kickoff" },
      { name: "Ops & CRM Sync", desc: "keeps your CRM, project tool and sheets in sync" },
    ],
  },
  {
    group: "AI Content Engine",
    items: [
      { name: "Your cloned voice", desc: "from a 2-minute sample, with your written consent" },
      { name: "30 Shorts and 8 long-form videos a month", desc: "researched, scripted, edited, uploaded and scheduled to your channel" },
      { name: "Monthly report and strategy call", desc: "first videos live within 7 days" },
    ],
  },
  {
    group: "On every build",
    items: [
      { name: "Works with your tools", desc: "HubSpot, GoHighLevel, ClickUp, Asana, Notion, Slack, Google Workspace, Meta and Google Ads, GA4, Calendly and anything with an API" },
      { name: "Built with n8n, Make, Apps Script and custom code", desc: "whatever fits the job" },
      { name: "You own it", desc: "every workflow, account and login is set up in accounts you own" },
    ],
  },
];

export const INCLUDED_FLAT: IncludedItem[] = INCLUDED.flatMap((g) => g.items);

export const WHO = {
  for: [
    "Marketing agencies with a team and a steady client base: performance, social, SEO, PPC, content and creative agencies.",
    "Agencies whose team spends hours replying to comments and DMs, chasing leads, repurposing content or moving data between tools.",
    "Businesses that already know the one process they want automated and want it live in days.",
  ],
  notFor: [
    "Anyone looking to replace their team: we remove the busywork so your people can handle more clients.",
    "Anyone after an off-the-shelf app subscription: we build custom systems in accounts you own.",
    "Anyone who needs a build started this week: we are at full client capacity right now, so new clients join the waitlist or reserve a slot.",
  ],
} as const;

export const FAQS: { question: string; answer: string }[] = [
  {
    question: "Which agencies is this for?",
    answer:
      "Marketing agencies with a team and a steady client base: performance, social, SEO, PPC, content and creative agencies. If your team spends hours replying to comments and DMs, chasing leads, repurposing content or moving data between tools, we can take that off them.",
  },
  {
    question: "How much does it cost?",
    answer:
      "An Automation Sprint is £6,300 + 45% service fee for one process automated end to end. A full Agency Operating System starts from £16,800 + 45% service fee, and our managed partnership from £3,500 per month + 45% service fee. Final pricing is agreed in writing before any work starts.",
  },
  {
    question: "How long does it take?",
    answer:
      "An Automation Sprint goes live within 5 working days after the process call. Larger builds are delivered in stages so you see value early. We are at full client capacity right now, so new builds start when a slot opens: join the waitlist (free) or reserve a slot with a £600 refundable deposit.",
  },
  {
    question: "Will this replace my team?",
    answer:
      "No. It removes the busywork so your strategists and account managers can handle more clients and do more of the work clients value. Most agencies use the freed-up hours to grow without hiring.",
  },
  {
    question: "What tools do you work with?",
    answer:
      "HubSpot, GoHighLevel, ClickUp, Asana, Notion, Slack, Google Workspace, Meta and Google Ads, GA4, Calendly and anything with an API. We build with n8n, Make, Apps Script and custom code, and everything is set up in accounts you own.",
  },
  {
    question: "Do we need to be technical?",
    answer:
      "No. We design, build, test and document everything, then walk your team through it. On the managed plan we also monitor and fix it every week.",
  },
  {
    question: "Who owns the systems you build?",
    answer:
      "You do. Every workflow, account and login is set up in accounts you own.",
  },
  {
    question: "Can I buy an Automation Sprint online?",
    answer:
      "Yes. It is £9,135 (£6,300 + 45% service fee): you pay online first, then have a call where you walk us through the process, and it goes live within 5 working days after that call. Sprint slots are full right now, so you can reserve one with a £600 refundable deposit.",
  },
  {
    question: "What happens after a system goes live?",
    answer:
      "You get handover docs and a recorded walkthrough. Fixes are included for 30 days after a Sprint and 60 days after an Agency Operating System. On the Managed Automation Partner plan we monitor and fix your systems every week and build new ones every month.",
  },
  {
    question: "Can you start right away?",
    answer:
      "We are at full client capacity right now. Join the waitlist (free) or reserve a slot with a £600 refundable deposit.",
  },
  {
    question: "Is there a free tool to see what automation could save?",
    answer:
      "Yes. The free Automation ROI Calculator at morningstarr.asendify.co/automation-roi-calculator/ helps you estimate what automating a process is worth before you talk to us.",
  },
];
