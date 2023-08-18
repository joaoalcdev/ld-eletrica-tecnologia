import HeroSection from "@/components/HeroSection/heroSection";
import AdvantageSection from "@/components/AdvantageSection/advantageSection";
import AboutSection from "@/components/AboutSection/aboutSection";
import DividerComponent from "@/components/Dividers/dividerComponent";
import TestimonialsSection from "@/components/Testimonials/testimonialsSection";
import Footer from "@/components/Footer/footer";
import CTASection from "@/components/CTASection/ctaSection";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <DividerComponent></DividerComponent>
      <AdvantageSection></AdvantageSection>
      <DividerComponent></DividerComponent>
      <AboutSection></AboutSection>
      <DividerComponent></DividerComponent>
      <TestimonialsSection></TestimonialsSection>
      <DividerComponent></DividerComponent>
      <CTASection></CTASection>
      <DividerComponent></DividerComponent>
      <Footer></Footer>
    </>
  );
}
