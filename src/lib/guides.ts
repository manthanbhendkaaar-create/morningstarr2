/**
 * Question-led guides (pages at /guides/[slug]).
 * Facts come only from this site and the Automation Sprint checkout. Show package prices only.
 * No invented clients, results, stats or reviews. External facts are cited in each guide's sources.
 * Inline links use [text](/path) and are rendered by GuidePage.
 */

export const GUIDES_UPDATED = "2026-10-12";

export const SPRINT_CHECKOUT_URL = "https://playbook.asendify.co/sprint";
// 2026-10-13: MorningstarrAI is at full client capacity; every CTA goes to the free waitlist or the refundable GBP 600 waitlist deposit.
// 2026-10-29: the Sprint (GBP 10,962 = 7,560 + 45% fee) is waitlist only; SPRINT_CHECKOUT_URL is not linked anywhere while FULL_CAPACITY is true.
export const WAITLIST_DEPOSIT_URL = "https://playbook.asendify.co/msdeposit?utm_source=morningstarr";
export const FULL_CAPACITY = true;

export type GuideBlock = string | { list: string[] };

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  answer: string;
  sections: { h2: string; body: GuideBlock[] }[];
  faqs: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
  related: string[];
  /** Hide the Automation Sprint buy box (for guides about other services) */
  hideSprint?: boolean;
  /** Heading above the booking button at the end of the guide */
  cta?: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "ai-automation-for-marketing-agencies",
    eyebrow: "AI Automation for Agencies",
    title: "AI Automation for Marketing Agencies: What It Is and Where to Start",
    metaTitle: "AI Automation for Marketing Agencies: What It Is and Where to Start | MorningstarrAI",
    description:
      "What AI automation means for a marketing agency, which jobs it takes off your team, how a build works and how to start with one process.",
    answer:
      "AI automation for marketing agencies means connecting the tools an agency already uses so software, with an AI model where judgement on text is needed, does the repetitive work: replying to comments and DMs, following up new leads, building client reports and onboarding. The best place to start is one process that eats the most team hours each week. MorningstarrAI automates one process end to end in an Automation Sprint, live within 5 working days.",
    sections: [
      {
        h2: "What does AI automation actually do inside an agency?",
        body: [
          "Most agency work has two parts: the thinking clients pay for, and the moving of information around that surrounds it. Pulling numbers from ad accounts into a report, copying a new lead from a form into the CRM, answering the same question in a DM for the tenth time, creating folders and channels when a client signs. AI automation takes over the second part.",
          "A typical system has three pieces. A trigger (a new form entry, a new comment, the first day of the month), a set of steps that move and transform data between tools, and, where a step needs language, an AI model that drafts, summarises or classifies. The output lands where your team already works: a Slack message, a draft reply waiting for approval, a report in the client's inbox.",
          "The aim is not to replace your strategists or account managers. It is to remove the busywork so the same team can look after more clients and spend more of its hours on work clients value.",
        ],
      },
      {
        h2: "Which agency jobs are the best candidates?",
        body: [
          "The jobs agencies ask MorningstarrAI for most are the ones that repeat every day or every week and follow the same steps each time:",
          {
            list: [
              "Comment and DM replies drafted in each brand's voice and queued for one-click approval",
              "Content repurposing: one video, post or blog turned into captions, clips, carousels and posts",
              "Client reporting: ads, analytics and social data pulled, commentary written, branded report sent on schedule",
              "Lead follow-up: every inbound lead answered in minutes, qualified and sent a booking link",
              "Client onboarding: from signed contract to kickoff, with intake, folders, channels, tasks and the first call",
              "Keeping the CRM, project tool and sheets in sync so nobody copies data by hand",
            ],
          },
          "For a longer list by department, see [what marketing agencies can automate with AI](/guides/what-can-marketing-agencies-automate).",
        ],
      },
      {
        h2: "What tools does it run on?",
        body: [
          "MorningstarrAI builds with n8n, Make, Google Apps Script and custom code, on top of the tools an agency already pays for: HubSpot, GoHighLevel, ClickUp, Asana, Notion, Slack, Google Workspace, Meta and Google Ads, GA4, Calendly and anything with an API. Everything is set up in accounts the agency owns, so the workflows, logins and data stay yours.",
          "The same systems run MorningstarrAI's parent agency, Asendify, every day: a lead engine that searches 103 niches, a cold-email system across 10+ inboxes with warm-up and daily limits, and booking tracking with reminders 24 hours and 1 hour before calls.",
        ],
      },
      {
        h2: "How does a build work, step by step?",
        body: [
          {
            list: [
              "Pick the process. You describe the job your team still does by hand and where it starts and ends.",
              "Audit and design. The workflow is mapped step by step, including the edge cases and who approves what.",
              "Build and test. The system is built in your accounts and tested on real examples before it goes live.",
              "Handover. You get documentation and a recorded walkthrough, plus 30 days of fixes on an Automation Sprint.",
            ],
          },
          "Larger builds (3 to 5 connected systems) are delivered in stages so you see value early, and an optional monthly plan covers monitoring, fixes and new builds.",
        ],
      },
      {
        h2: "How should an agency get started?",
        body: [
          "Start with one process, not a transformation programme. Choose the job that costs the most hours per week, happens on a fixed trigger and has a clear finished state. Lead follow-up, monthly reporting and comment replies usually qualify.",
          "If you already know the process, the [Automation Sprint](/guides/ai-automation-agency-cost) is built for that: £10,962 (£7,560 plus the 45% service fee) for one process, live within 5 working days after the process call. MorningstarrAI is at full client capacity, so the Sprint is waitlist only right now: join the free waitlist, or reserve a slot with a £600 refundable deposit. If you are not sure which process to pick, that is what the process call is for.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is AI automation only for large agencies?",
        a: "No. MorningstarrAI works with marketing agencies that have a team and a steady client base, including performance, social, SEO, PPC, content and creative agencies. The test is whether your team repeats the same manual steps every day or week.",
      },
      {
        q: "Will AI automation replace my team?",
        a: "No. It removes repetitive work so strategists and account managers can handle more clients and spend more time on the work clients value.",
      },
      {
        q: "Do we need to be technical?",
        a: "No. MorningstarrAI designs, builds, tests and documents everything, then walks your team through it.",
      },
      {
        q: "Who owns the automations?",
        a: "You do. Every workflow, account and login is set up in accounts the agency owns.",
      },
      {
        q: "How fast can the first automation go live?",
        a: "An Automation Sprint goes live within 5 working days after the process call.",
      },
    ],
    related: ["what-can-marketing-agencies-automate", "ai-automation-agency-cost", "automate-lead-follow-up-with-ai"],
  },
  {
    slug: "automate-client-reporting",
    eyebrow: "Client Reporting",
    title: "How to Automate Client Reporting for a Marketing Agency",
    metaTitle: "How to Automate Client Reporting for Agencies (Step by Step) | MorningstarrAI",
    description:
      "A step-by-step way to automate agency client reports: pull ads, analytics and social data, write the commentary with AI, review and send on schedule.",
    answer:
      "To automate client reporting, connect each data source (ad platforms, GA4, social accounts) through their APIs, write the numbers into one place on a schedule, let an AI model draft the commentary against last period and the client's goals, and send a branded report after a quick human review. MorningstarrAI builds this as a Client Reporting Autopilot in the agency's own accounts.",
    sections: [
      {
        h2: "Why is client reporting worth automating first?",
        body: [
          "Reporting is the most predictable job in an agency. It happens on a fixed date, the data comes from the same places every time and the format barely changes. That makes it ideal for automation: the steps are known, the trigger is the calendar, and the finished state is obvious, a report in the client's inbox.",
          "It is also work clients notice. A report that arrives on time, every time, with clear commentary, builds trust, while copying numbers by hand is where mistakes creep in.",
        ],
      },
      {
        h2: "What does an automated reporting system look like?",
        body: [
          {
            list: [
              "Data collection: the system pulls spend, results and traffic from each platform's official API on a schedule, for example the Google Analytics Data API for GA4 and the reporting APIs of the ad platforms you use.",
              "One source of truth: the numbers land in a sheet or database per client, with the previous period stored next to them.",
              "Commentary: an AI model writes a short summary of what changed and why it matters, using the client's goals and your notes as context.",
              "Report build: a branded document or dashboard link is generated from a template.",
              "Review and send: the account manager gets the draft, edits if needed and approves; the report is emailed on schedule.",
            ],
          },
        ],
      },
      {
        h2: "How do you automate it, step by step?",
        body: [
          "1. List every number that appears in your current report and where it comes from. If a figure is calculated, write down the formula.",
          "2. Decide the trigger and timing: monthly on the 1st, weekly on Mondays, or both.",
          "3. Connect each source once, using accounts the agency owns, and test that the numbers match what the platform shows.",
          "4. Write the commentary prompt with examples of good commentary from your best account managers, so the AI matches your tone.",
          "5. Keep a human approval step for the first months. It catches odd data and keeps the account manager close to the account.",
          "6. Add alerts for missing data, such as a disconnected ad account, so a broken source never produces a silent wrong report.",
        ],
      },
      {
        h2: "What should stay human?",
        body: [
          "Strategy. The automation should deliver the numbers and a first draft of what they mean; the recommendations for next month are where your team earns its fee. Many agencies use the hours saved to add a short personal note or a call, which a client values far more than a hand-copied table.",
        ],
      },
      {
        h2: "Should you use a reporting tool or a custom build?",
        body: [
          "Off-the-shelf dashboards are a good fit when you only need charts from standard connectors. A custom build makes sense when you need commentary written for each client, your own calculations, data from tools a dashboard does not connect to, or reports sent and logged automatically. See [Zapier vs custom AI automation](/guides/zapier-vs-custom-ai-automation) for how to choose.",
          "A reporting automation for one report format is a typical scope for a single Automation Sprint: one process automated end to end, with handover docs, a recorded walkthrough and 30 days of fixes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can AI write the report commentary?",
        a: "Yes. An AI model can draft the summary of what changed and why, using the numbers, the previous period and the client's goals. MorningstarrAI keeps a human approval step so the account manager checks it before it is sent.",
      },
      {
        q: "Which data sources can be included?",
        a: "Any tool with an API, including GA4, Meta and Google Ads and the social platforms you use. MorningstarrAI connects them in accounts the agency owns.",
      },
      {
        q: "What happens if a data source disconnects?",
        a: "A well-built system checks for missing data and alerts your team instead of sending an incomplete report.",
      },
      {
        q: "How long does it take to build?",
        a: "One reporting process fits an Automation Sprint, which goes live within 5 working days after the process call.",
      },
    ],
    sources: [
      { label: "Google Analytics Data API (GA4) documentation", url: "https://developers.google.com/analytics/devguides/reporting/data/v1" },
    ],
    related: ["ai-automation-for-marketing-agencies", "zapier-vs-custom-ai-automation", "ai-automation-agency-cost"],
  },
  {
    slug: "automate-lead-follow-up-with-ai",
    eyebrow: "Lead Follow-Up",
    title: "How to Automate Lead Follow-Up With AI",
    metaTitle: "How to Automate Lead Follow-Up With AI (Without Sounding Like a Bot) | MorningstarrAI",
    description:
      "How to set up AI lead follow-up: instant first replies, qualification, booking links, follow-ups and handing tricky conversations to a human.",
    answer:
      "To automate lead follow-up with AI, send every new lead to one place, have an AI reply within minutes using your offer and FAQs, ask the questions that qualify them, send your booking link to qualified leads and schedule follow-ups for people who go quiet. Tricky or high-value replies should go to a person. MorningstarrAI builds this as a Lead-to-Call system on your own tools.",
    sections: [
      {
        h2: "Why does follow-up speed matter so much?",
        body: [
          "A new lead is most interested in the minutes after they fill in your form or send a message. Research published in Harvard Business Review on online sales leads concluded that most companies are not responding nearly fast enough. Agencies feel this every day: leads arrive at night and at weekends, during client calls and while the team is delivering work.",
          "Automation fixes the gap between a lead arriving and a useful reply going out. It does not get tired, it does not forget to follow up, and it logs every conversation.",
        ],
      },
      {
        h2: "What does an AI lead follow-up system include?",
        body: [
          {
            list: [
              "Capture: form entries, DMs, emails and ad leads all flow into one list or CRM, with duplicates removed.",
              "Instant reply: the AI writes a first reply within minutes, based on what the lead asked and your approved answers.",
              "Qualification: it asks the few questions that tell you whether this is a fit, such as budget range, service needed or timeline.",
              "Booking: qualified leads get your booking link, and bookings are tagged so you know which source produced each call.",
              "Follow-ups: people who don't reply get a short, timed sequence (MorningstarrAI's outbound system sends 2 follow-ups).",
              "Hand-off: complex questions, complaints or large deals go straight to a person, with the conversation attached.",
            ],
          },
        ],
      },
      {
        h2: "How do you set it up, step by step?",
        body: [
          "1. Map every place leads arrive and pick one destination, usually your CRM or a sheet.",
          "2. Write the facts the AI may use: services, who you work with, process, booking link and answers to the questions leads ask most. The AI should never invent prices or promises.",
          "3. Define what qualified means for you, in two or three questions.",
          "4. Decide the hand-off rules: which replies always go to a human.",
          "5. Add reminders before calls; MorningstarrAI's own booking system sends them 24 hours and 1 hour before each call.",
          "6. Review conversations weekly for the first month and tighten the prompts.",
        ],
      },
      {
        h2: "How do you keep AI replies from sounding robotic?",
        body: [
          "Give the AI real examples of your best replies, keep messages short, answer the question actually asked, and only use facts you have approved. MorningstarrAI's outbound engine writes a personal first line from each lead's own website or content rather than using a generic opener, and tricky replies are routed to a person instead of being forced through a script.",
        ],
      },
      {
        h2: "What does MorningstarrAI build here?",
        body: [
          "Two options. A Lead-to-Call system for inbound leads, which fits an [Automation Sprint](/guides/ai-automation-agency-cost) for one lead flow. Or the AI Outbound Engine (£6,300 fixed price, plus the 45% service fee), the cold-email system MorningstarrAI runs every day, set up on your inboxes: daily lead finding, a personal first line for every lead, 2 follow-ups, AI answers that qualify leads and send your booking link, deliverability setup and a daily report, live in 5 days.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can AI qualify leads on its own?",
        a: "Yes, for clear criteria. The AI asks your qualifying questions and sends a booking link to leads who fit. Anything unclear or high value should be handed to a person.",
      },
      {
        q: "Which channels can be followed up automatically?",
        a: "Any channel with an API or integration, such as web forms, email, CRM entries and ad lead forms. MorningstarrAI connects CRM, email, WhatsApp and calendars.",
      },
      {
        q: "Will the AI make up answers?",
        a: "It should not. A good setup gives the AI only approved facts and routes questions it cannot answer to your team.",
      },
      {
        q: "How many follow-ups should be sent?",
        a: "Keep it short. MorningstarrAI's own outbound system sends 2 follow-ups to people who do not reply.",
      },
      {
        q: "How long does setup take?",
        a: "One lead flow fits an Automation Sprint, live within 5 working days after the process call. The AI Outbound Engine is live in 5 days.",
      },
    ],
    sources: [
      { label: "Harvard Business Review: The Short Life of Online Sales Leads (2011)", url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads" },
    ],
    related: ["ai-automation-for-marketing-agencies", "what-can-marketing-agencies-automate", "ai-automation-agency-cost"],
  },
  {
    slug: "what-can-marketing-agencies-automate",
    eyebrow: "Use Cases",
    title: "What Can Marketing Agencies Automate With AI?",
    metaTitle: "What Can Marketing Agencies Automate With AI? (By Department) | MorningstarrAI",
    description:
      "A practical list of what marketing agencies can automate with AI across sales, client service, content, reporting and operations, and what to keep human.",
    answer:
      "Marketing agencies can automate most repetitive, rule-based work with AI: lead follow-up and booking, comment and DM replies, content repurposing, client reporting, onboarding and keeping tools in sync. Strategy, creative direction and client relationships should stay human. The best first automation is the one that repeats most often and costs the most team hours.",
    sections: [
      {
        h2: "What can be automated in sales and new business?",
        body: [
          {
            list: [
              "Answering every inbound lead within minutes, qualifying it and sending a booking link",
              "Finding prospects and writing a personal first line from their real content for outbound email",
              "Follow-ups to people who don't reply",
              "Tagging bookings by source so you know which channel or email produced each call",
              "Reminders before calls and a follow-up after no-shows",
            ],
          },
          "More detail: [how to automate lead follow-up with AI](/guides/automate-lead-follow-up-with-ai).",
        ],
      },
      {
        h2: "What can be automated in client service and community management?",
        body: [
          {
            list: [
              "Pulling new comments and DMs across every brand into one queue",
              "Drafting replies in each brand's voice for one-click approval",
              "Flagging complaints or urgent messages for a person",
              "Routine client questions answered from an approved knowledge base",
            ],
          },
          "Keeping a human approval step on public replies is sensible: the AI drafts, your team approves.",
        ],
      },
      {
        h2: "What can be automated in content production?",
        body: [
          {
            list: [
              "Turning one video, post or blog into captions, short clips, carousels and posts for every platform",
              "Transcripts, summaries and first drafts from recordings",
              "Scheduling and publishing to each platform",
              "Faceless, voice-led YouTube videos produced in the client's own cloned voice (MorningstarrAI's [AI Content Engine](/guides/ai-content-engine-youtube-in-your-voice))",
            ],
          },
        ],
      },
      {
        h2: "What can be automated in reporting and operations?",
        body: [
          {
            list: [
              "Client reports: data pulled from ads, analytics and social, commentary drafted, report sent on schedule ([guide](/guides/automate-client-reporting))",
              "Client onboarding: intake form, folders, Slack channels, project tasks and the kickoff call created from a signed contract",
              "Keeping the CRM, project tool and sheets in sync",
              "Daily or weekly internal summaries of what was sent, booked or delivered",
            ],
          },
        ],
      },
      {
        h2: "What does a first automation look like in practice?",
        body: [
          "Take client onboarding. Today an account manager might send a welcome email, create a shared folder, set up a Slack channel, add tasks to the project tool, send an intake form and chase it, then book the kickoff call. Each step is small, but together they take hours per client and are easy to get wrong when the team is busy.",
          "Automated, the trigger is the signed contract. The system sends the welcome email and intake form, creates the folder, channel and project tasks from a template, reminds the client if the form is not returned and offers kickoff times once it is. The account manager gets one message when everything is ready, and spends the first call on strategy instead of admin.",
          "The same pattern, a clear trigger, fixed steps and a human check where judgement matters, applies to reporting, lead follow-up and comment replies.",
        ],
      },
      {
        h2: "What should agencies not automate?",
        body: [
          "Anything where judgement is the product: strategy, creative direction, pricing decisions, sensitive client conversations and hiring. AI can prepare the inputs for these, such as a summary of the numbers or a draft brief, but a person should make the call.",
          "Also avoid automating a process nobody has written down. If two account managers do the same job two different ways, agree the steps first, then automate.",
        ],
      },
      {
        h2: "How do you choose what to automate first?",
        body: [
          "Score each candidate on three things: how often it happens, how many hours it takes per week across the team, and how clear its steps are. The winner is usually lead follow-up, comment replies or monthly reporting. That one process is exactly the scope of an [Automation Sprint](/guides/ai-automation-agency-cost), which can be bought online and goes live within 5 working days after the process call.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the easiest thing for an agency to automate?",
        a: "A job that repeats on a fixed trigger with clear steps, such as replying to new leads, sending monthly reports or onboarding a new client.",
      },
      {
        q: "Can AI reply to social media comments for clients?",
        a: "AI can draft replies in each brand's voice and queue them for one-click approval. MorningstarrAI builds this as a Comment and DM Reply Assistant.",
      },
      {
        q: "Can onboarding be automated?",
        a: "Yes. From a signed contract, a system can send the intake form and create folders, channels, tasks and the kickoff call.",
      },
      {
        q: "Does automation work with our existing tools?",
        a: "Usually yes. MorningstarrAI works with HubSpot, GoHighLevel, ClickUp, Asana, Notion, Slack, Google Workspace, Meta and Google Ads, GA4, Calendly and anything with an API.",
      },
    ],
    related: ["ai-automation-for-marketing-agencies", "automate-client-reporting", "automate-lead-follow-up-with-ai"],
  },
  {
    slug: "ai-automation-agency-cost",
    eyebrow: "Pricing",
    title: "How Much Does an AI Automation Agency Cost? What an Automation Sprint Includes",
    metaTitle: "AI Automation Agency Cost: What an Automation Sprint Includes | MorningstarrAI",
    description:
      "MorningstarrAI's prices explained: the Automation Sprint (£10,962, waitlist only), the AI Outbound Engine, the Agency Operating System, the managed plan and the AI Content Engine.",
    answer:
      "MorningstarrAI's Automation Sprint costs £10,962: £7,560 plus the 45% service fee. It covers one process automated end to end, live within 5 working days after the process call. MorningstarrAI is at full client capacity, so the Sprint is waitlist only: join the free waitlist, or reserve a slot with a £600 refundable deposit. Larger engagements start from £16,800 one-off or £3,500 per month, each plus the 45% service fee.",
    sections: [
      {
        h2: "What does the Automation Sprint include?",
        body: [
          {
            list: [
              "A workflow audit and system design for one process",
              "One process automated, tested and live",
              "Handover documentation and a recorded walkthrough",
              "30 days of fixes",
            ],
          },
          "The exact scope is agreed on the process call. Examples of a single process: replying to and qualifying inbound leads, building monthly client reports, onboarding new clients, or drafting comment and DM replies for approval.",
        ],
      },
      {
        h2: "How do I get an Automation Sprint?",
        body: [
          "MorningstarrAI is at full client capacity, so the Sprint is not sold online right now. It works like this:",
          "1. Join the free waitlist, or reserve a slot with a £600 refundable deposit. The deposit is refunded in full any time until we offer you a slot, and credited to your first invoice.",
          "2. When a slot opens, Manthan emails you, in waitlist order (deposit holders are offered a slot first).",
          "3. You have a call to walk through the process you want automated, and the automation goes live within 5 working days after that call.",
        ],
      },
      {
        h2: "What do the other engagements cost?",
        body: [
          "All MorningstarrAI fees have a 45% service fee added on top, invoiced together with the fee.",
          {
            list: [
              "AI Outbound Engine: £6,300 fixed price. The cold-email system MorningstarrAI runs daily, set up on your inboxes, live in 5 days.",
              "Agency Operating System: from £16,800 one-off. 3 to 5 connected systems across the agency, team training, one operations dashboard and 60 days of fixes.",
              "Managed Automation Partner: from £3,500 per month. Weekly monitoring and fixes, new builds every month, priority WhatsApp support and a monthly review.",
              "AI Content Engine: £3,000 per month plus a £1,500 one-time setup, 3-month minimum, limited to 3 clients.",
            ],
          },
        ],
      },
      {
        h2: "What drives the cost of an AI automation project?",
        body: [
          {
            list: [
              "Number of processes: one process is a Sprint; several connected systems are an operating system build.",
              "Number of tools and how good their APIs are",
              "Edge cases: approvals, exceptions and error handling take more time than the happy path",
              "Ongoing running: monitoring, fixes and changes after launch, which the managed plan covers",
            ],
          },
          "Running costs for the tools themselves (for example your automation platform plan or AI model usage) sit in accounts you own, so you see them directly.",
        ],
      },
      {
        h2: "What is not included in the Sprint?",
        body: [
          {
            list: [
              "More than one process. A second process is a second Sprint, or part of an Agency Operating System build.",
              "Tool subscriptions and AI usage. These run in accounts you own and are billed to you by the tool provider.",
              "Ongoing monitoring after the 30 days of fixes. That is what the Managed Automation Partner plan covers.",
              "Strategy work outside the process, such as rewriting your offer or your client reports' content.",
            ],
          },
        ],
      },
      {
        h2: "Which engagement fits which agency?",
        body: [
          {
            list: [
              "You know the one job that eats your team's week: the Automation Sprint (waitlist only right now).",
              "You want more booked calls from cold email: the AI Outbound Engine.",
              "Several teams lose hours to manual work across sales, delivery and reporting: the Agency Operating System.",
              "You already have systems and want someone to run, fix and extend them: the Managed Automation Partner.",
              "You want a YouTube channel publishing daily in your own voice: the [AI Content Engine](/guides/ai-content-engine-youtube-in-your-voice).",
            ],
          },
        ],
      },
      {
        h2: "Is a fixed-price Sprint better than hourly billing?",
        body: [
          "For a first project, a fixed price with a fixed scope is easier to approve and easier to judge: one process, one price, a clear finished state and a date. MorningstarrAI does not quote results it does not have; it shows you the systems it runs on its own agency instead.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much is the Automation Sprint?",
        a: "£10,962: £7,560 plus the 45% service fee. It is waitlist only right now: join the free waitlist, or reserve a slot with a £600 refundable deposit.",
      },
      {
        q: "What happens after I join the waitlist?",
        a: "Manthan emails you, in order, when a slot opens (deposit holders are offered a slot first). You then have a call to walk through the process you want automated, and the automation goes live within 5 working days after that call.",
      },
      {
        q: "Can I pay from India?",
        a: "Yes. When you are offered a slot, buyers in India can request an invoice and pay by bank transfer.",
      },
      {
        q: "Is the service fee included in the £10,962?",
        a: "Yes. £10,962 is £7,560 plus the 45% service fee (£3,402).",
      },
      {
        q: "Do I own what is built?",
        a: "Yes. Every workflow, account and login is set up in accounts you own.",
      },
    ],
    related: ["ai-automation-for-marketing-agencies", "zapier-vs-custom-ai-automation", "what-can-marketing-agencies-automate"],
  },
  {
    slug: "zapier-vs-custom-ai-automation",
    eyebrow: "Comparison",
    title: "Zapier vs Custom AI Automation for Agencies: Which Should You Use?",
    metaTitle: "Zapier vs Custom AI Automation for Agencies: Which to Choose | MorningstarrAI",
    description:
      "When Zapier is enough for an agency, when a custom build with n8n, Make, Apps Script or code is better, and how to decide for each process.",
    answer:
      "Use Zapier when a process is simple, linear and low volume, and someone on your team can maintain it. Choose a custom AI automation (built with tools like n8n, Make, Apps Script or code) when the process has many steps, branches, AI-written text, high volume or needs proper error handling and monitoring. Many agencies use both.",
    sections: [
      {
        h2: "What is Zapier good at?",
        body: [
          "Zapier connects thousands of apps with a visual builder, so a non-developer can set up a trigger and a few actions in minutes. It is a strong choice for simple, linear jobs: send a new form entry to the CRM, post a Slack message when a deal closes, add a row to a sheet.",
          "Zapier bills by tasks. Its help centre defines a task as any successful action that runs in Zapier; trigger steps and filter or paths steps do not count. That model is easy to understand at low volume, and worth checking as volume grows, because every action step on every run counts.",
        ],
      },
      {
        h2: "When does a custom AI automation make more sense?",
        body: [
          {
            list: [
              "The process has many steps, loops or branches, such as reporting across dozens of client accounts",
              "AI needs context: brand voice, approved facts, past conversations or client goals",
              "Volume is high, so per-action pricing or rate limits matter",
              "You need error handling: retries, alerts for missing data, and a log of what happened",
              "You want to own and host the workflows, or keep data in specific accounts",
              "Nobody on the team has time to maintain a growing set of zaps",
            ],
          },
          "n8n, for example, can be self-hosted on your own infrastructure, on-premises or in a private cloud, which suits agencies that want control over where workflows and data run.",
        ],
      },
      {
        h2: "How do the two approaches compare?",
        body: [
          {
            list: [
              "Setup speed: Zapier is fastest for simple jobs; custom builds take longer but handle complex logic",
              "Who builds it: Zapier suits in-house non-developers; custom builds are usually done by a specialist",
              "AI steps: both can call AI models; custom builds make it easier to control prompts, context and approvals",
              "Cost model: Zapier charges by tasks; custom builds have a build cost plus the running cost of the platform you choose",
              "Maintenance: both need an owner; with a managed plan, the builder monitors and fixes it",
            ],
          },
        ],
      },
      {
        h2: "What are the signs an agency has outgrown its zaps?",
        body: [
          {
            list: [
              "Nobody knows which zaps are still running or what they do",
              "A broken step is noticed by a client before your team sees it",
              "The same logic is copied across dozens of zaps, one per client",
              "Task usage keeps climbing as you add clients",
              "You need AI replies that follow brand voice and approved facts, with a human approval step",
            ],
          },
          "None of these mean Zapier is the wrong tool; they mean that particular process has become important enough to deserve a system designed, documented and monitored for it.",
        ],
      },
      {
        h2: "Can you use both?",
        body: [
          "Yes, and many agencies should. Keep small one-step zaps where they work, and move the processes that are core to delivery, like [client reporting](/guides/automate-client-reporting) or [lead follow-up](/guides/automate-lead-follow-up-with-ai), to a system built for them. MorningstarrAI builds with n8n, Make, Apps Script and custom code, and picks the tool per process rather than forcing one platform.",
        ],
      },
      {
        h2: "How do you decide for your agency?",
        body: [
          "Write the process down step by step. If it fits on a sticky note and runs a few times a day, try Zapier. If it needs a flowchart, AI judgement on text, or would hurt the business when it silently breaks, build it properly. One such process is the scope of an [Automation Sprint](/guides/ai-automation-agency-cost): one process automated, tested and live within 5 working days after the process call, with handover docs and 30 days of fixes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Zapier enough for a marketing agency?",
        a: "For simple, linear, low-volume jobs, often yes. For multi-step processes with AI-written text, high volume or a need for monitoring, a custom build is usually a better fit.",
      },
      {
        q: "How does Zapier count usage?",
        a: "Zapier's help centre defines a task as any successful action that runs in Zapier. Trigger steps and filter or paths steps do not count as tasks.",
      },
      {
        q: "Can n8n be self-hosted?",
        a: "Yes. n8n's documentation says you can self-host it on your own infrastructure, on-premises or in a private cloud.",
      },
      {
        q: "Which tools does MorningstarrAI build with?",
        a: "n8n, Make, Google Apps Script and custom code, set up in accounts the agency owns.",
      },
    ],
    sources: [
      { label: "Zapier Help Center: How is task usage measured in Zapier?", url: "https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier" },
      { label: "n8n documentation: Hosting n8n", url: "https://docs.n8n.io/hosting/" },
    ],
    related: ["ai-automation-agency-cost", "automate-client-reporting", "ai-automation-for-marketing-agencies"],
  },
  {
    slug: "ai-content-engine-youtube-in-your-voice",
    eyebrow: "AI Content Engine",
    title: "AI Content Engine: How to Run a YouTube Channel in Your Own Voice",
    metaTitle: "AI Content Engine: A YouTube Channel in Your Own Voice | MorningstarrAI",
    description:
      "How MorningstarrAI's AI Content Engine clones your voice and scripts, produces and publishes 30 Shorts and 8 long-form videos a month to your channel.",
    answer:
      "MorningstarrAI's AI Content Engine runs a faceless YouTube channel in your own voice: you record a 2-minute voice sample once, with written consent, and the team scripts, produces and publishes 30 Shorts and 8 long-form videos a month to your channel. It costs £3,000 per month plus a £1,500 one-time setup, with a 3-month minimum and 3 client spots.",
    sections: [
      {
        h2: "How does the AI Content Engine work?",
        body: [
          {
            list: [
              "Record 2 minutes, once. You send a short voice sample and sign a consent form. A private voice model is built from it.",
              "Plan and script. On a consultation call the niche, topics and the offer the channel should sell are agreed. Then every script is researched and written.",
              "Produced every night. Each script is voiced in your voice, with B-roll, captions, music and pacing built for retention, then rendered.",
              "Published on schedule. You approve the first batch. After that, videos go up automatically: a Short every day and two long videos a week.",
            ],
          },
          "First videos are live within 7 days of your voice sample.",
        ],
      },
      {
        h2: "What is included each month?",
        body: [
          {
            list: [
              "Your own voice, cloned from a 2-minute sample with your written consent",
              "30 Shorts and 8 long-form videos every month",
              "Topic research and every script written for your niche and offer",
              "Editing, B-roll, captions and music built for retention",
              "Uploading and scheduling to your YouTube channel",
              "A monthly performance report and strategy call",
            ],
          },
        ],
      },
      {
        h2: "What do you need to provide?",
        body: [
          {
            list: [
              "A 2-minute voice sample, recorded once",
              "A signed consent form for the voice clone",
              "A consultation call to agree your niche, topics and the offer the channel should sell",
              "Access to upload to your YouTube channel",
              "Approval of the first batch of videos",
            ],
          },
          "After that, there is no filming, editing or uploading on your side. A Short goes up every day and two long videos a week, and you get a monthly performance report and strategy call.",
        ],
      },
      {
        h2: "Which niches does it suit?",
        body: [
          "Faceless, voice-led formats: education and explainers, coaching, finance, business, self-improvement and how-to. If your channel needs your face on camera, this is not the right fit, and MorningstarrAI will say so on the call.",
        ],
      },
      {
        h2: "Is a cloned voice allowed on YouTube?",
        body: [
          "YouTube asks creators to disclose realistic altered or synthetic content, for example content that makes a real person appear to say or do something they did not do. Its help page lists cloning your own voice to create voice-overs or dubs among the changes that do not need disclosure. MorningstarrAI follows YouTube's rules and applies the altered or synthetic content label when uploading wherever YouTube asks for it.",
          "Your voice is only cloned with your written consent and only for your channel. You can withdraw consent at any time, and the voice model is deleted when you leave.",
        ],
      },
      {
        h2: "What does it cost and who owns the channel?",
        body: [
          "£3,000 per month plus a £1,500 one-time setup, with a 3-month minimum; the 45% service fee that applies to every MorningstarrAI fee is added on top. It is limited to 3 clients because every video is rendered on MorningstarrAI's own production machines, the same ones that run its own channels.",
          "The channel stays yours and every video made for you is yours to keep. MorningstarrAI does not quote client results it does not have; on the call you see the engine and the videos it makes. Full details are on the [AI Content Engine page](/content-engine).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it really my voice?",
        a: "Yes. It is cloned from your 2-minute sample, only with your written consent and only for your channel. You can withdraw consent at any time, and the voice model is deleted when you leave.",
      },
      {
        q: "How many videos do I get?",
        a: "30 Shorts and 8 long-form videos a month: a Short every day and two long videos a week.",
      },
      {
        q: "Can I check videos before they go live?",
        a: "Yes. You approve the first batch before anything is published, and you can keep reviewing every video if you prefer.",
      },
      {
        q: "How much does the AI Content Engine cost?",
        a: "£3,000 per month plus a £1,500 one-time setup, 3-month minimum, plus the 45% service fee that applies to every MorningstarrAI fee.",
      },
      {
        q: "Do I own the channel and videos?",
        a: "Yes. The channel stays yours and every video made for you is yours to keep.",
      },
      {
        q: "How soon do videos go live?",
        a: "First videos are live within 7 days of your voice sample.",
      },
    ],
    sources: [
      { label: "YouTube Help: Disclosing use of altered or synthetic content", url: "https://support.google.com/youtube/answer/14328491" },
    ],
    related: ["what-can-marketing-agencies-automate", "ai-automation-agency-cost", "ai-automation-for-marketing-agencies"],
    hideSprint: true,
    cta: "Want a channel that publishes every day in your voice?",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
