/* eslint-disable @next/next/no-img-element */
import HeroSection from "@/components/ServicesComponents/HeroSection";

import DividerComponent from "@/components/Dividers/dividerComponent";
import CamerasSection from "@/components/ServicesComponents/CamerasSection";
import CercasSection from "@/components/ServicesComponents/CercasSection";
import MotoresSection from "@/components/ServicesComponents/MotoresSection";
import ArCondicionadoSection from "@/components/ServicesComponents/ArCondicionadoSection";
import CasaInteligenteSection from "@/components/ServicesComponents/CasaInteligenteSection";
import EletricasSection from "@/components/ServicesComponents/EletricasSection";
import Footer from "@/components/Footer/footer";
import WhatsappCTA from "@/components/WhatsappButton/WhatsappCTA";

export default function Page() {
  return (
    <>
      <WhatsappCTA></WhatsappCTA>
      <HeroSection></HeroSection>
      <DividerComponent></DividerComponent>
      <CamerasSection></CamerasSection>
      <DividerComponent></DividerComponent>
      <CercasSection></CercasSection>
      <DividerComponent></DividerComponent>
      <MotoresSection></MotoresSection>
      <DividerComponent></DividerComponent>
      <ArCondicionadoSection></ArCondicionadoSection>
      <DividerComponent></DividerComponent>
      <CasaInteligenteSection></CasaInteligenteSection>
      <DividerComponent></DividerComponent>
      <EletricasSection></EletricasSection>
      <DividerComponent></DividerComponent>
      <Footer></Footer>
    </>
  );
}
