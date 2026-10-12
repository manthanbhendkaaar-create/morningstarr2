import { SITE, FOUNDER, CONTENT_ENGINE } from "@/lib/constants";
import { SPRINT_CHECKOUT_URL } from "@/lib/guides";

const ORG_ID = `${SITE.url}/#organization`;

/** Home page JSON-LD: organisation, website and services. Prices only as stated on the site and checkout. */
export const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: "MorningstarrAI",
      alternateName: "Morningstarr AI",
      url: SITE.url,
      logo: `${SITE.url}/morningstarai-logo.png`,
      image: `${SITE.url}/morningstarai-logo.png`,
      description: SITE.description,
      email: SITE.email,
      founder: { "@type": "Person", name: FOUNDER.name, jobTitle: FOUNDER.title, url: SITE.linkedin },
      parentOrganization: { "@type": "Organization", name: "Asendify", url: "https://www.asendify.co/" },
      sameAs: [SITE.linkedin],
      knowsAbout: [
        "AI automation for marketing agencies",
        "Lead follow-up automation",
        "Client reporting automation",
        "Content repurposing automation",
        "Client onboarding automation",
        "n8n",
        "Make",
        "Google Apps Script",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: "MorningstarrAI",
      url: SITE.url,
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "Service",
      "@id": `${SITE.url}/#automation-sprint`,
      name: "Automation Sprint",
      serviceType: "AI automation",
      provider: { "@id": ORG_ID },
      audience: { "@type": "BusinessAudience", audienceType: "Marketing agencies and businesses" },
      description:
        "One process automated end to end: workflow audit and system design, one process automated, tested and live within 5 working days after the process call, handover docs and a recorded walkthrough, 30 days of fixes. Bought online: payment first, then a call to describe the process. Buyers in India can request an invoice.",
      offers: {
        "@type": "Offer",
        name: "Automation Sprint (online checkout)",
        price: "6525",
        priceCurrency: "GBP",
        url: SPRINT_CHECKOUT_URL,
        availability: "https://schema.org/InStock",
        description: "£4,500 plus the 45% service fee (£2,025).",
        seller: { "@id": ORG_ID },
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE.url}/#ai-outbound-engine`,
      name: "AI Outbound Engine",
      serviceType: "Cold email automation",
      provider: { "@id": ORG_ID },
      description:
        "The cold-email system MorningstarrAI runs daily, set up on the client's inboxes: daily lead finding, personalised first lines, 2 follow-ups, AI replies that qualify leads and send a booking link, deliverability setup and a daily report. Live in 5 days. £4,500 fixed price plus the 45% service fee.",
    },
    {
      "@type": "Service",
      "@id": `${SITE.url}/#agency-operating-system`,
      name: "Agency Operating System",
      serviceType: "AI automation",
      provider: { "@id": ORG_ID },
      description:
        "3 to 5 connected systems across the agency, built on its CRM, project tool and data sources, with team training, one operations dashboard and 60 days of fixes. From £12,000 one-off plus the 45% service fee.",
    },
    {
      "@type": "Service",
      "@id": `${SITE.url}/#managed-automation-partner`,
      name: "Managed Automation Partner",
      serviceType: "Automation maintenance",
      provider: { "@id": ORG_ID },
      description:
        "Weekly monitoring and fixes, new builds every month, priority WhatsApp support and a monthly review. From £2,500 per month plus the 45% service fee.",
    },
    {
      "@type": "Service",
      "@id": `${SITE.url}/content-engine#service`,
      name: "AI Content Engine",
      serviceType: "Done-for-you YouTube channel",
      provider: { "@id": ORG_ID },
      url: `${SITE.url}/content-engine`,
      description: `A faceless YouTube channel in the client's own cloned voice (with written consent): ${CONTENT_ENGINE.volume}, scripts, editing, uploading and a monthly report; first videos live within ${CONTENT_ENGINE.firstVideos}. ${CONTENT_ENGINE.price} per month plus ${CONTENT_ENGINE.setup} one-time setup, ${CONTENT_ENGINE.minimum} minimum, ${CONTENT_ENGINE.spots} client spots, plus the 45% service fee.`,
    },
  ],
};
