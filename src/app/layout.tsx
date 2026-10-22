import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SITE } from "@/lib/constants";
import "./globals.css";

// 2026-10-20: real-visit counter for the Asendify Channels dashboard (same rules as the book shops and the other sites):
// one visit per browser session, sent only after a scroll/tap/mouse/key or 12 s on screen; bots and our own browsers skipped.
const VISIT_COUNTER = `(function(){try{if(sessionStorage.getItem('asd_sv')==='1')return;var q0=new URLSearchParams(location.search);
if(q0.get('internal')==='1')document.cookie='asd_internal=1; domain=.asendify.co; path=/; max-age=63072000; SameSite=Lax; Secure';
if(/(^|;\\s*)asd_internal=1/.test(document.cookie))return;
if(navigator.webdriver||/bot\\b|bot\\/|crawl|spider|slurp|preview|headless|lighthouse|scanner|facebookexternalhit/i.test(navigator.userAgent))return;
var c=function(v){return String(v||'').toLowerCase().replace(/[^a-z0-9._-]/g,'').slice(0,60)};var src='';
if(q0.get('utm_source'))src=[c(q0.get('utm_source')),c(q0.get('utm_medium')),c(q0.get('utm_campaign'))].join('/');
if(!src&&document.referrer){var h=new URL(document.referrer).hostname.replace(/^www\\./,'');if(h&&!/(^|\\.)asendify\\.co$/.test(h))src='ref/'+c(h);}
src=src||'direct';var path=location.pathname.replace(/[^a-zA-Z0-9._\\/-]/g,'').slice(0,120)||'/';
var acts=['scroll','pointerdown','touchstart','keydown','mousemove','wheel'],sent=false,shown=0,tick;
var send=function(how){if(sent)return;sent=true;clearInterval(tick);acts.forEach(function(e){removeEventListener(e,on,true)});
try{sessionStorage.setItem('asd_sv','1')}catch(e){}
fetch('https://playbook.asendify.co/api/ref',{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'text/plain'},body:JSON.stringify({visit:src,page:path,engaged:how,product:'morningstarr'})}).catch(function(){})};
var on=function(){send('interact')};acts.forEach(function(e){addEventListener(e,on,{capture:true,passive:true})});
tick=setInterval(function(){if(document.visibilityState==='visible'&&(shown+=1000)>=12000)send('time')},1000);}catch(e){}})();`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MorningstarrAI | AI Automation for Marketing Agencies",
  description: SITE.description,
  keywords: [
    "AI automation for agencies",
    "marketing agency automation",
    "social media reply automation",
    "content repurposing automation",
    "client onboarding automation",
    "agency operations",
    "n8n agency",
    "done-for-you automation",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: "MorningstarrAI | Take On More Clients Without Hiring",
    description:
      "AI systems that take the manual work off marketing agencies: comment and DM replies, lead follow-up, content repurposing and admin. At full client capacity: join the free waitlist or reserve a slot with a £500 refundable deposit.",
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "MorningstarrAI | AI Automation for Marketing Agencies",
    description:
      "Take on more clients without hiring. Custom AI systems for marketing agencies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary antialiased">
        {children}
        <Script src="/blossom.js?v=5" strategy="afterInteractive" />
        <Script src="/asd-booksbar.js" data-src="morningstarr" strategy="afterInteractive" />
        <Script id="asd-visit-counter" strategy="afterInteractive">{VISIT_COUNTER}</Script>
      </body>
    </html>
  );
}
