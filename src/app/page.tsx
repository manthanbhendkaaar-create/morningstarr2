import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookingCTA } from "@/components/layout/StickyBookingCTA";
import { CalendlyBookingProvider } from "@/components/booking/CalendlyBookingProvider";
import { ExperienceShell } from "@/components/experience/ExperienceShell";
import { SectionTransition } from "@/components/experience/SectionTransition";
import { AIBrainDivider } from "@/components/experience/AIBrainDivider";
import { Hero } from "@/components/sections/Hero";
import { HeroTrustStrip } from "@/components/sections/HeroTrustStrip";
import { TrustSection } from "@/components/sections/TrustSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { CostComparison } from "@/components/sections/CostComparison";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { AIWorkforce } from "@/components/sections/AIWorkforce";
import { AutomationShowcase } from "@/components/sections/AutomationShowcase";
import { VideoDemo } from "@/components/sections/VideoDemo";
import { InsideTheSystem } from "@/components/sections/InsideTheSystem";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ManualVsAI } from "@/components/sections/ManualVsAI";
import { DiyVsAutomation } from "@/components/sections/DiyVsAutomation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { AutomationGallery } from "@/components/sections/AutomationGallery";
import { SuccessMetrics } from "@/components/sections/SuccessMetrics";
import { Testimonials } from "@/components/sections/Testimonials";
import { ObjectionHandling } from "@/components/sections/ObjectionHandling";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <ExperienceShell>
      <CalendlyBookingProvider>
      <Header />
      <StickyBookingCTA />
      <main className="pb-24 relative z-[2]">
        <Hero />
        <HeroTrustStrip />
        <TrustSection />
        <FounderSection />
        <TrustBar />
        <SectionTransition />
        <CostComparison />
        <AuthoritySection />
        <AIBrainDivider />
        <AIWorkforce />
        <AutomationShowcase />
        <VideoDemo />
        <InsideTheSystem />
        <SectionTransition />
        <CaseStudies />
        <ManualVsAI />
        <DiyVsAutomation />
        <HowItWorks />
        <AIBrainDivider />
        <ROICalculator />
        <AutomationGallery />
        <SuccessMetrics />
        <Testimonials />
        <ObjectionHandling />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      </CalendlyBookingProvider>
    </ExperienceShell>
  );
}
