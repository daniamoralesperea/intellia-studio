import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceBookingSection from "@/components/sections/ServiceBookingSection";
import ServiceFAQSection from "@/components/sections/ServiceFAQSection";
import ServiceHeroSection from "@/components/sections/ServiceHeroSection";
import ServiceTestimonialsSection from "@/components/sections/ServiceTestimonialsSection";
import ServiceWhatWeDoSection from "@/components/sections/ServiceWhatWeDoSection";
import ServiceWhyChooseSection from "@/components/sections/ServiceWhyChooseSection";
import ServiceYouNeedIfSection from "@/components/sections/ServiceYouNeedIfSection";
import { servicesData } from "@/data/services-detailed";

export const metadata = {
  title: "Our Services | Intellia Studio",
  description: "Professional design and development services for your business.",
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ink mb-4">Service Not Found</h1>
          <p className="text-ink-muted">The service you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Section 1: Hero */}
        <ServiceHeroSection
          title={service.title}
          image={service.heroImage}
          description={service.heroDescription}
        />

        {/* Section 2: What we do */}
        <ServiceWhatWeDoSection cards={service.whatWeDo} />

        {/* Section 3: You need if */}
        <ServiceYouNeedIfSection serviceName={service.title} cards={service.youNeedIf} />

        {/* Section 4: (Placeholder - can be customized per service) */}
        {/* Reserved for future use */}

        {/* Section 5: Why choose us */}
        <ServiceWhyChooseSection serviceName={service.title} cards={service.whyChoose} />

        {/* Section 6: FAQ */}
        <ServiceFAQSection items={service.faq} />

        {/* Section 7: Testimonials */}
        <ServiceTestimonialsSection testimonials={service.testimonials} />

        {/* Section 8: Booking */}
        <ServiceBookingSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
