import { BookingButton } from "@/components/booking/BookingButton";
import { BrandLogo } from "@/components/brand/Logo";
import { SITE, FOUNDER, EXPERTISE_TAGS, CTAS, CALENDLY_URL } from "@/lib/constants";
import { Mail, MessageCircle, MapPin } from "lucide-react";

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const FOOTER_LINKS = {
  Company: [
    { label: "About", href: "#founder" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  Services: [
    { label: "Lead Automation", href: "#gallery" },
    { label: "CRM Automation", href: "#gallery" },
    { label: "WhatsApp Automation", href: "#gallery" },
    { label: "Email Automation", href: "#gallery" },
  ],
  Contact: [
    { label: "Book Audit", href: CALENDLY_URL, external: true },
    { label: SITE.email, href: `mailto:${SITE.email}` },
    { label: "WhatsApp", href: `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}` },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-secondary/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container-wide section-padding !py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <BrandLogo />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-sm">
              We build AI-powered automation systems that run businesses on autopilot.
            </p>

            <div className="space-y-2 mb-6 text-sm">
              <p className="text-text-primary font-medium">{FOUNDER.name}</p>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors"
              >
                <Mail size={14} />
                {SITE.email}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent-green transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={14} />
                {SITE.whatsapp}
              </a>
              <a
                href={SITE.linkedin}
                className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={14} />
                LinkedIn
              </a>
              <p className="flex items-center gap-2 text-text-muted">
                <MapPin size={14} />
                {SITE.location}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {EXPERTISE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2.5 py-1 rounded-full glass text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <BookingButton size="sm">
              {CTAS.bookAudit}
            </BookingButton>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-text-primary mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-accent-blue transition-colors"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="text-text-muted hover:text-accent-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
              className="text-text-muted hover:text-accent-green transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={SITE.linkedin}
              className="text-text-muted hover:text-accent-blue transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
