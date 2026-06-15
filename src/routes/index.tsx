import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { Hero } from "@/components/home/Hero";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { JoinCta } from "@/components/home/JoinCta";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Shell>
      <Hero />
      <ManifestoSection />
      <PillarsSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsletterSection />
      <JoinCta />
    </Shell>
  );
}


